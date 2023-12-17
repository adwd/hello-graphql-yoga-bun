import { beforeEach } from 'bun:test';
import { execSync } from 'child_process';

beforeEach(() => {
  execSync('bun prisma migrate reset --force --skip-seed');
});
