var gulp = require('gulp'),
    //jshint = require('gulp-jshint'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload');

gulp.task('default', ['develop']);


//gulp.task('watch', function() {
//    livereload.listen();
//    gulp.watch('routes/*.js', ['less']);
//});

//gulp.task('lint', function () {
//    gulp.src('./**/*.js')
//        .pipe(jshint())
//});

gulp.task('develop', function () {
    nodemon({ script: 'server.js'
        ,env: {
                'NODE_ENV': 'development'
        }
        , ext: 'html js'
        //, tasks: ['lint']
        , nodeArgs: ['--debug']
    })

        .on('restart', function () {
            console.log('restarted!')
        })
});