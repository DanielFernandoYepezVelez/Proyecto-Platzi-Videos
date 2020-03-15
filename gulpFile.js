const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp.src('./dist/scss/app.scss')
        .pipe(autoprefixer({
            overridebrowserList: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded' // nested, compact, compressed
        }))
        .pipe(gulp.dest('./public/css/'))
}

function watchFiles() {
    gulp.watch('./dist/scss/*.scss', css);
    gulp.watch('./public/index.html');
}

/* Registrar Las Funciones Como Tareas */
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));