To split a massive `gulpfile.ts` into multiple modular files, you can organize them inside a folder named `gulpfile.ts` containing an `index.ts` file. Gulp natively supports treating a directory named `gulpfile.ts` as the configuration entry point, provided your system resolves the TypeScript files.

Directory StructureSet up your project root directory like this:

```text
your-project/
├── node_modules/
├── package.json
├── tsconfig.json
└── gulpfile.ts/          <-- This is a folder, not a file!
    ├── index.ts          <-- The main entry point for Gulp
    ├── clean.ts          <-- Individual task file
    └── styles.ts         <-- Individual task file
```

## Install Dependencies

Gulp needs ts-node to transpile and run TypeScript files on the fly. Install the required modules in your terminal:
```bash
npm install --save-dev gulp ts-node typescript @types/gulp @types/node
```

## Configure `tsconfig.json`
Ensure your TypeScript configuration allows target modules to resolve properly for Node.
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2022",
    "moduleResolution": "node",
    "esModuleInterop": true
  },
  "include": ["gulpfile.ts/**/*"]
}
```
## Create Task Files
Define your individual tasks in separate files inside the `gulpfile.ts/` directory.

```
gulpfile.ts/clean.ts
```
```typescript
import { src } from 'gulp';
// Example task using a modern deletion module or simple gulp stream
export function cleanTask() {
  return src('dist/**/*', { read: false }); 
}
```

```
gulpfile.ts/styles.ts
```
```typescript
import { src, dest } from 'gulp';

export function compileStyles() {
  return src('src/**/*.css')
    .pipe(dest('dist/css'));
}
```
## Wire Everything into `index.ts`
Import your sub-tasks and export them from the `index.ts` entry point. Gulp only registers tasks that are explicitly exported from this file.
```
gulpfile.ts/index.ts
```
```typescript
import { series, parallel } from 'gulp';
import { cleanTask } from './clean';
import { compileStyles } from './styles';

// Export individual tasks if you want to run them via CLI (e.g., `gulp cleanTask`)
export { cleanTask, compileStyles };

// Export the default task (run via `gulp`)
export default series(cleanTask, parallel(compileStyles));
```

## Run Gulp
Execute your Gulp tasks exactly as you normally would:
```bash
npx gulp
```