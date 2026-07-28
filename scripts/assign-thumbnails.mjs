import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const command = args.length ? ['scripts/thumbnail_ops.py', 'assign', ...args] : ['scripts/thumbnail_ops.py', 'publish'];
const python = process.platform === 'win32' ? 'py' : 'python3';
const status = spawnSync(python, ['-3', ...command], { stdio: 'inherit' });
if (status.status !== 0) process.exit(status.status ?? 1);
