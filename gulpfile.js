var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var wiredep = require('wiredep').stream;
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();


//Compile jade into html
//Wiredep
gulp.task('templates', function () {
    var YOUR_LOCALS = {};

    gulp.src('./app/jade/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./app'))
        .pipe(wiredep({
            directory: "app/bower_components"
        }))
        .pipe(gulp.dest('./app'));
    gulp.watch('./app/jade/**/*.jade', ['templates']);
});
//Compile scss into css
gulp.task("sass", function () {
    gulp.src(
        "app/sass/**/*.scss"
    )
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.reload({stream: true}))

});
//BrowserSync
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        //files: ['app/jade/*.html', 'app/css/*.css', 'app/js/*.js'],
        notify: false
    });
});
//Watch
gulp.task('default', ['browser-sync', 'sass', 'templates'], function () {
    gulp.watch('./app/sass/layout/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/home/*.scss', ['sass']);
    gulp.watch('./app/jade/layout/home/*.jade', ['templates']);

    gulp.watch('./app/sass/layout/object/*.scss', ['sass']);
    gulp.watch('./app/jade/layout/object/*.jade', ['templates']);


    gulp.watch('./app/sass/layout/novostroiki/*.scss', ['sass']);
    gulp.watch('./app/jade/layout/novostroiki.jade', ['templates']);

    gulp.watch('./app/sass/layout/builders/*.scss', ['sass']);

    gulp.watch('./app/sass/layout/bank/*.scss', ['sass']);

    gulp.watch('./app/jade/layout/builders/*.jade', ['templates']);

    gulp.watch('./app/sass/layout/banks/*.scss', ['sass']);
    gulp.watch('./app/jade/layout/banks/*.jade', ['templates']);

    gulp.watch('./app/sass/components/*.scss', ['sass']);
    gulp.watch('./app/sass/utils/*.scss', ['sass']);
    gulp.watch('./app/sass/*.scss', ['sass']);
    gulp.watch('./app/jade/layout/*.jade', ['templates']);
    gulp.watch('./app/jade/mixins/*.jade', ['templates']);

    gulp.watch('./app/jade/*.jade', ['templates']);
    gulp.watch('./app/*.html', browserSync.reload);
    gulp.watch('./app/js/*.js', browserSync.reload);
});