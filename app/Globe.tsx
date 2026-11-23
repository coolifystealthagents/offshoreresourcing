'use client';

import { useEffect, useRef } from 'react';

type Point = { x: number; y: number; z: number };

const PHILIPPINES = { lat: 12.9, lon: 121.8 };
const DESTINATIONS = [
  { lat: 37.77, lon: -122.42 },
  { lat: 51.51, lon: -0.13 },
  { lat: -33.87, lon: 151.21 },
];

function toVector(lat: number, lon: number): Point {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return {
    x: -Math.sin(phi) * Math.cos(theta),
    y: Math.cos(phi),
    z: Math.sin(phi) * Math.sin(theta),
  };
}

function rotate(point: Point, yaw: number, tilt: number): Point {
  const cosY = Math.cos(yaw);
  const sinY = Math.sin(yaw);
  const cosT = Math.cos(tilt);
  const sinT = Math.sin(tilt);
  const x = point.x * cosY - point.z * sinY;
  const z = point.x * sinY + point.z * cosY;
  const y = point.y * cosT - z * sinT;
  const z2 = point.y * sinT + z * cosT;
  return { x, y, z: z2 };
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const points: Point[] = [];
    const count = 620;
    for (let i = 0; i < count; i += 1) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * Math.PI * (3 - Math.sqrt(5));
      points.push({ x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius });
    }

    const photo = toVector(PHILIPPINES.lat, PHILIPPINES.lon);
    const destinations = DESTINATIONS.map((d) => toVector(d.lat, d.lon));

    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let start = 0;
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      if (!width || !height) return;
      if (!start) start = time;
      const elapsed = time - start;
      const yaw = reduce ? 0.6 : 0.6 + elapsed * 0.00011;
      const tilt = -0.3;
      const radius = Math.min(width, height) * 0.4;
      const cx = width / 2;
      const cy = height / 2;

      context.clearRect(0, 0, width, height);

      const sphere = context.createRadialGradient(cx - radius * 0.32, cy - radius * 0.36, radius * 0.05, cx, cy, radius * 1.02);
      sphere.addColorStop(0, 'rgba(86, 132, 255, 0.34)');
      sphere.addColorStop(0.55, 'rgba(24, 68, 150, 0.2)');
      sphere.addColorStop(1, 'rgba(7, 20, 38, 0.06)');
      context.fillStyle = sphere;
      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2);
      context.fill();

      const glow = context.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.5);
      glow.addColorStop(0, 'rgba(47, 85, 255, 0.3)');
      glow.addColorStop(0.55, 'rgba(25, 182, 217, 0.14)');
      glow.addColorStop(1, 'rgba(25, 182, 217, 0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(cx, cy, radius * 1.5, 0, Math.PI * 2);
      context.fill();

      // Latitude and longitude lines give the sphere readable depth.
      context.lineWidth = 1;
      for (let lat = -60; lat <= 60; lat += 30) {
        context.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 6) {
          const point = rotate(toVector(lat, lon), yaw, tilt);
          const px = cx + point.x * radius;
          const py = cy - point.y * radius;
          if (point.z > 0) {
            if (!started) { context.moveTo(px, py); started = true; } else { context.lineTo(px, py); }
          } else {
            started = false;
          }
        }
        context.strokeStyle = 'rgba(126, 178, 255, 0.3)';
        context.stroke();
      }
      for (let lon = -180; lon < 180; lon += 30) {
        context.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 4) {
          const point = rotate(toVector(lat, lon), yaw, tilt);
          const px = cx + point.x * radius;
          const py = cy - point.y * radius;
          if (point.z > 0) {
            if (!started) { context.moveTo(px, py); started = true; } else { context.lineTo(px, py); }
          } else {
            started = false;
          }
        }
        context.strokeStyle = 'rgba(126, 178, 255, 0.22)';
        context.stroke();
      }

      for (const raw of points) {
        const point = rotate(raw, yaw, tilt);
        const px = cx + point.x * radius;
        const py = cy - point.y * radius;
        const front = point.z > 0;
        context.beginPath();
        context.arc(px, py, front ? 1.75 : 0.85, 0, Math.PI * 2);
        context.fillStyle = front ? 'rgba(203, 227, 255, 0.96)' : 'rgba(100, 145, 220, 0.24)';
        context.fill();
      }

      // Connection arcs from the Philippines to client regions.
      destinations.forEach((destination, index) => {
        const a = rotate(photo, yaw, tilt);
        const b = rotate(destination, yaw, tilt);
        if (a.z < -0.15 || b.z < -0.15) return;
        const ax = cx + a.x * radius;
        const ay = cy - a.y * radius;
        const bx = cx + b.x * radius;
        const by = cy - b.y * radius;
        const mx = (ax + bx) / 2 + (by - ay) * 0.18;
        const my = (ay + by) / 2 - (bx - ax) * 0.18;
        const progress = reduce ? 1 : (Math.sin(elapsed * 0.001 + index * 1.4) + 1) / 2;
        context.save();
        context.globalAlpha = 0.3 + progress * 0.55;
        context.strokeStyle = index === 0 ? 'rgba(25, 182, 217, 1)' : 'rgba(86, 132, 255, 0.95)';
        context.lineWidth = 1.2;
        context.setLineDash([4, 6]);
        context.lineDashOffset = -elapsed * 0.02;
        context.beginPath();
        context.moveTo(ax, ay);
        context.quadraticCurveTo(mx, my, bx, by);
        context.stroke();
        context.restore();
      });

      context.beginPath();
      context.arc(cx, cy, radius * 1.005, 0, Math.PI * 2);
      context.strokeStyle = 'rgba(103, 232, 255, 0.22)';
      context.lineWidth = 1;
      context.stroke();

      const ph = rotate(photo, yaw, tilt);
      if (ph.z > -0.2) {
        const px = cx + ph.x * radius;
        const py = cy - ph.y * radius;
        const pulse = reduce ? 0 : (Math.sin(elapsed * 0.003) + 1) / 2;
        context.save();
        context.beginPath();
        context.arc(px, py, 13 + pulse * 8, 0, Math.PI * 2);
        context.strokeStyle = `rgba(25, 182, 217, ${0.5 - pulse * 0.35})`;
        context.stroke();
        context.beginPath();
        context.arc(px, py, 4.5, 0, Math.PI * 2);
        context.fillStyle = '#67e8ff';
        context.shadowColor = '#19b6d9';
        context.shadowBlur = 18;
        context.fill();
        context.shadowBlur = 0;
        context.font = '600 9px Manrope, sans-serif';
        context.fillStyle = 'rgba(206, 244, 255, 0.9)';
        context.fillText('PHILIPPINES', px + 10, py - 9);
        context.restore();
      }

      if (!reduce && visible && !document.hidden) raf = requestAnimationFrame(draw);
      else if (frame === 0) frame = 1;
    };

    const startLoop = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    resize();
    startLoop();

    const observer = new ResizeObserver(() => {
      resize();
      if (reduce) draw(performance.now());
    });
    observer.observe(canvas);

    const visibility = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (visible) startLoop();
      else if (raf) { cancelAnimationFrame(raf); raf = 0; }
    }, { threshold: 0.05 });
    visibility.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
      else startLoop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      visibility.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="globe-canvas"
      role="img"
      aria-label="Rotating globe with the Philippines highlighted and connections to client regions"
    >
      Rotating globe with the Philippines highlighted.
    </canvas>
  );
}
