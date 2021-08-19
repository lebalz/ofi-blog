const gulp = require('gulp')
const connect = require('gulp-connect')

gulp.task('reload', () => gulp.src(['static/p/**/*.html', 'static/p/**/*.md'])
    .pipe(connect.reload()));

gulp.task('serve', () => {

    connect.server({
        root: 'static/p',
        port: 8001,
        host: '0.0.0.0',
        livereload: true
    })

    gulp.watch(['static/p/**/*.html', 'static/p/**/*.md', 'static/p/**/*.css'], gulp.series('reload'))
})