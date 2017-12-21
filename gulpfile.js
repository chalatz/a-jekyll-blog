var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    pleeease = require('gulp-pleeease'),
    wait = require('gulp-wait');

gulp.task('default', ['serve']);

gulp.task('build-css', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(wait(50))
        .pipe(sass({includePaths: ['./scss']}))
        .pipe(pleeease({
            "autoprefixer": {"browsers": ["last 4 versions", "ios 6"]},
            "rem": false,
            "minifier": false
        }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('serve',['build-css'], function(){
    browserSync.init({
        server: {
            baseDir: ''
        }
    });

    gulp.watch('scss/**/*.scss', ['build-css']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// gulp.task('watch', function(){
//     gulp.watch('app/js/**/*.js', ['jshint']);
//     gulp.watch('app/scss/**/*.scss', ['build-css']);
// });