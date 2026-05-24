const { series, parallel } = require('gulp');
import { ExportConfiguration } from "./config/export-configuration";
import { FileTasks } from'./tasks/file-tasks';
import { BuildTasks } from './tasks/build-tasks';

class Tasks {
  static copy = FileTasks.copyTask;
  static clean = FileTasks.cleanTask;
  static cleanNpm = FileTasks.cleanNpmTask;
  static compile = BuildTasks.compileTask;
  static build = series(this.clean, parallel(this.compile, this.copy));
  static reset = parallel(this.clean, this.cleanNpm);
}

ExportConfiguration.register(module.exports, Tasks);