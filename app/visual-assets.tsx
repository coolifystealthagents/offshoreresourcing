import type { ReactNode } from 'react';

type ProcessIconName = 'brief' | 'evidence' | 'access' | 'review' | 'scope' | 'calibrate' | 'operate';

const approvedImages = {
  candidates: '/images/thumbnail-backgrounds/candidate-pipeline.webp',
  schedule: '/images/thumbnail-backgrounds/schedule-bridge.webp',
  onboarding: '/images/thumbnail-backgrounds/onboarding-path.webp',
  evidence: '/images/thumbnail-backgrounds/compliance-files.webp',
  quality: '/images/thumbnail-backgrounds/quality-review.webp',
  capacity: '/images/thumbnail-backgrounds/capacity-planning.webp',
  handoff: '/images/thumbnail-backgrounds/handoff-lanes.webp',
  people: '/images/thumbnail-backgrounds/people-network.webp',
  collaboration: '/images/thumbnail-backgrounds/remote-collaboration.webp',
} as const;

export function editorialImageFor(value: string) {
  const text = value.toLowerCase();
  if (/candidate|recruit|screen|talent|interview/.test(text)) return { src: approvedImages.candidates, alt: 'Candidate workflow illustration with organized review stages' };
  if (/schedule|calendar|time.?zone|coverage|overlap/.test(text)) return { src: approvedImages.schedule, alt: 'Schedule coordination illustration with connected coverage windows' };
  if (/onboard|training|knowledge|learn/.test(text)) return { src: approvedImages.onboarding, alt: 'Onboarding workflow illustration with clear completion checkpoints' };
  if (/compliance|access|security|privacy|source|evidence|approval/.test(text)) return { src: approvedImages.evidence, alt: 'Evidence and compliance illustration with organized source records' };
  if (/quality|review|scorecard|performance|audit/.test(text)) return { src: approvedImages.quality, alt: 'Quality review illustration with visible checks and feedback' };
  if (/capacity|workforce|forecast|queue|workload/.test(text)) return { src: approvedImages.capacity, alt: 'Capacity planning illustration with workload and coverage lanes' };
  if (/handoff|workflow|process|coordination|delivery/.test(text)) return { src: approvedImages.handoff, alt: 'Workflow handoff illustration with connected owners and stages' };
  if (/retention|employee|people|team/.test(text)) return { src: approvedImages.people, alt: 'People operations illustration with connected team responsibilities' };
  return { src: approvedImages.collaboration, alt: 'Remote collaboration illustration with organized work lanes' };
}


const editorialPhotos = {
  candidates: { src: '/images/photos/candidate-screening.jpg', alt: 'Recruiting coordinator screening candidates with a checklist and laptop' },
  schedule: { src: '/images/photos/interview-scheduling.jpg', alt: 'Recruiting coordinator scheduling interviews with a printed weekly plan' },
  onboarding: { src: '/images/photos/onboarding.jpg', alt: 'Team lead welcoming a new hire at a laptop in a bright office' },
  training: { src: '/images/photos/training.jpg', alt: 'Team lead running a short training session with printed handouts' },
  evidence: { src: '/images/photos/compliance.jpg', alt: 'Compliance reviewer checking a printed policy document beside a laptop' },
  quality: { src: '/images/photos/reporting.jpg', alt: 'Operations analyst reviewing a performance dashboard and printed summary' },
  capacity: { src: '/images/photos/workforce-planning.jpg', alt: 'Operations leaders reviewing a capacity plan on a wall monitor' },
  handoff: { src: '/images/photos/recruitment-admin.jpg', alt: 'Hands organizing candidate folders with colored index tabs' },
  people: { src: '/images/photos/people-ops.jpg', alt: 'People operations specialist in a one-on-one conversation with a colleague' },
  collaboration: { src: '/images/photos/services-hero.jpg', alt: 'Recruiting operations colleagues planning service lanes around a table' },
} as const;

export function editorialPhotoFor(value: string) {
  const text = value.toLowerCase();
  if (/candidate|recruit|screen|talent|interview/.test(text)) return editorialPhotos.candidates;
  if (/schedule|calendar|time.?zone|coverage|overlap/.test(text)) return editorialPhotos.schedule;
  if (/onboard|knowledge|learn/.test(text)) return editorialPhotos.onboarding;
  if (/training/.test(text)) return editorialPhotos.training;
  if (/compliance|access|security|privacy|source|evidence|approval/.test(text)) return editorialPhotos.evidence;
  if (/supplier|vendor|continuity/.test(text)) return editorialPhotos.handoff;
  if (/transfer|assessment|impact/.test(text)) return editorialPhotos.evidence;
  if (/quality|review|scorecard|performance|audit/.test(text)) return editorialPhotos.quality;
  if (/capacity|workforce|forecast|queue|workload/.test(text)) return editorialPhotos.capacity;
  if (/handoff|workflow|process|coordination|delivery/.test(text)) return editorialPhotos.handoff;
  if (/retention|employee|people|team/.test(text)) return editorialPhotos.people;
  const pool = [editorialPhotos.collaboration, editorialPhotos.capacity, editorialPhotos.handoff, editorialPhotos.quality, editorialPhotos.people, editorialPhotos.evidence, editorialPhotos.schedule, editorialPhotos.candidates, editorialPhotos.onboarding, editorialPhotos.training];
  let hash = 0;
  for (const character of text) hash = (hash * 33 + character.charCodeAt(0)) >>> 0;
  return pool[hash % pool.length];
}

export function ProcessIcon({ name }: { name: ProcessIconName }) {
  const paths: Record<ProcessIconName, ReactNode> = {
    brief: <><path d="M7 3h7l3 3v15H7z"/><path d="M14 3v4h4M10 11h5M10 15h5"/></>,
    evidence: <><circle cx="9" cy="9" r="4"/><path d="m12 12 5 5M15 17l2-2 3 3-2 2z"/></>,
    access: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/></>,
    review: <><path d="M4 6h10M4 12h7M4 18h8"/><path d="m14 16 2 2 4-5"/></>,
    scope: <><path d="M4 5h16v14H4zM8 9h8M8 13h5"/></>,
    calibrate: <><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></>,
    operate: <><path d="M4 12h5l2-5 3 10 2-5h4"/></>,
  };
  return <span className="process-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg></span>;
}
