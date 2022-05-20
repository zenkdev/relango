/**
 * This is a minimal script that generates TypeScript definitions
 * from a Chevrotain parser.
 */
import { generateCstDts } from 'chevrotain';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

import { productions } from '../src/services/compiler/grammars/fields';

const dtsString = generateCstDts(productions);
const dtsPath = resolve(__dirname, '../src', 'fields_cst.d.ts');
writeFileSync(dtsPath, dtsString);
