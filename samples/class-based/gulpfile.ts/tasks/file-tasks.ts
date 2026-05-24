const { dest, src } = require('gulp');
const clean = require('gulp-clean');

export class FileTasks {
    static copyTask(): any {
        console.log("copying...");
        return src(
            [
                'src/**/*.json',
                'src/assets/**/*.*'
            ],
            { base: 'src' })
            .pipe(dest('dist'));
    }

    static cleanTask(): any {
        console.log("cleaning...");
        return src(["dist"], { read: false, allowEmpty: true }).pipe(clean({force: true}));
    }

    static cleanNpmTask(): any {
        console.log("cleaning npm...");
        return src(["node_modules"], { read: false, allowEmpty: true }).pipe(clean({force: true}));
    }
}
