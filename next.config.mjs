/** @type {import("next").NextConfig} */
const csp = ["default-src 'self'", "script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com", "connect-src 'self' https://cloudflareinsights.com https://*.cloudflareinsights.com", "img-src 'self' data: https:", "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", "font-src 'self' data: https://fonts.gstatic.com", "frame-src https://go.oncehub.com https://*.oncehub.com https://*.scheduleonce.com", "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'self'"].join('; ');
const nextConfig = { async headers() { return [{ source: '/(.*)', headers: [{ key: 'Content-Security-Policy', value: csp }] }]; } };
export default nextConfig;
