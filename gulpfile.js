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
            locals: YOUR_LOCALS,
            pretty: true
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
    gulp.watch('./app/jade/layout/novostroiki/*.jade', ['templates']);


    gulp.watch('./app/sass/layout/control/*.scss', ['sass']);
    gulp.watch('./app/jade/layout/control/.jade', ['templates']);


    gulp.watch('./app/sass/layout/builders/*.scss', ['sass']);

    gulp.watch('./app/sass/layout/bank/*.scss', ['sass']);

    gulp.watch('./app/jade/layout/builders/*.jade', ['templates']);

    gulp.watch('./app/sass/layout/banks/*.scss', ['sass']);
    gulp.watch('./app/jade/layout/banks/*.jade', ['templates']);

    gulp.watch('./app/sass/layout/vzaimodeistvie/*.scss', ['sass']);
    gulp.watch('./app/jade/layout/vzaimodeistvie/*.jade', ['templates']);

    gulp.watch('./app/sass/layout/question-lawyer/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/question-lawyer/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/ipoteka-povtorno/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/ipoteka-povtorno/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/black-menu/initiatives/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/black-menu/initiatives/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/black-menu/news/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/black-menu/news/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/black-menu/partners/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/black-menu/partners/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/vtorichka/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/vtorichka/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/black-menu/contact/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/black-menu/contact/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/reviews/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/reviews/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/review/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/review/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/calculator-page/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/calculator-page/*.jade', ['jade']);
  
    gulp.watch('./app/sass/layout/black-menu/analitic/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/black-menu/analitic/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/black-menu/union/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/black-menu/union/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/articles/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/articles/*.jade', ['jade']);

    gulp.watch('./app/sass/layout/townhouse/*.scss', ['sass']);
    gulp.watch('./app/sass/layout/townhouse/*.jade', ['jade']);

    gulp.watch('./app/sass/components/*.scss', ['sass']);
    gulp.watch('./app/sass/utils/*.scss', ['sass']);
    gulp.watch('./app/sass/*.scss', ['sass']);
    gulp.watch('./app/jade/layout/*.jade', ['templates']);
    gulp.watch('./app/jade/mixins/*.jade', ['templates']);

    gulp.watch('./app/jade/*.jade', ['templates']);
    gulp.watch('./app/*.html', browserSync.reload);
    gulp.watch('./app/js/*.js', browserSync.reload);
});