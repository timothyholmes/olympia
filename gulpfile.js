'use strict';

var Promise = require('es6-promise').Promise,
    babel = require('gulp-babel'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    build = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    runSequence = require('run-sequence'),
    connect = require('gulp-connect'),
    flatten = require('gulp-flatten'),
    jshint = require('gulp-jshint');

gulp.task('sass', () => {
    return gulp.src('lib/ui/src/style/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('lib/ui/src/style/css'));
});

gulp.task('transpile', () => {
    return gulp.src('lib/ui/src/scripts/es6/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('lib/ui/src/scripts/es5'));
});

gulp.task('watch', (callback) => {
    gulp.watch('lib/ui/src/style/scss/**/*.scss', ['sass', 'clean:dist', 'build']);
    gulp.watch('lib/ui/src/scripts/es6/**/*.js', ['transpile', 'clean:dist', 'build']);
    gulp.watch('lib/ui/src/index.html', ['clean:dist', 'build']);
});

gulp.task('build', () => {
    return gulp.src('lib/ui/src/index.html')
        .pipe(build())
        .pipe(gulpIf('*.js', uglify({mangle: false})))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('lib/ui/dist'));
});

gulp.task('clean:dist', () =>  {
    return del.sync('lib/ui/dist');
});

gulp.task('lint', () =>  {
    return gulp.src('./lib/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('fail'));
});

gulp.task('default', (callback) => {
    runSequence(['sass', 'transpile'], 'clean:dist', 'build', 'watch',
        callback
    );
});
