import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
assert.match(readFileSync('README.md','utf8'), /Hello from PM OS/);
console.log('Synthetic README check passed');
