import { spawnSync } from 'node:child_process';

const status = spawnSync(process.platform === 'win32' ? 'py' : 'python3', ['-3', 'scripts/thumbnail_ops.py', 'report'], { stdio: 'inherit' });
if (status.status !== 0) process.exit(status.status ?? 1);
