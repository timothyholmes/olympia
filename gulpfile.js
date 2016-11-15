'use strict';

var Promise = require('es6-promise').Promise,
    babel = require('gulp-babel'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
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
    return gulp.src('lib/ui/src/scripts/es6/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('lib/ui/src/scripts/es5'));
});

gulp.task('watch', () => {
    gulp.watch('lib/ui/src/style/scss/**/*.scss', ['sass']);
    gulp.watch('lib/ui/src/scripts/es6/app.js', ['transpile']);
});

gulp.task('useref', () => {
    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify({mangle: false})))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', () =>  {
    return del.sync('dist');
});

gulp.task('lint', () =>  {
    return gulp.src('./lib/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('fail'));
});

gulp.task('build', (callback) => {
    runSequence('clean:dist',
        'sass',
        // 'useref',
        'move-components',
        'move-templates',
        callback
    );
});


gulp.task('default', (callback) => {
    runSequence(['sass', 'transpile', 'watch'],
        callback
    );
});
