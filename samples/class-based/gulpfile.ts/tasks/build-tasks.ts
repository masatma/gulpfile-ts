import { ExportConfiguration } from "../config/export-configuration";
const { dest } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("./tsconfig.json");

export class BuildTasks {
    static compileTask() {
        console.log("compiling...");
        return tsProject.src().pipe(tsProject()).js.pipe(dest("dist"));
    }
}

