var gulp = require('gulp');

    //Plugins模块获取
    var minifycss = require('gulp-minify-css');
    var uglify = require('gulp-uglify');
    var htmlmin = require('gulp-htmlmin');
    var htmlclean = require('gulp-htmlclean');
	var imagemin = require('gulp-imagemin');
	var clean = require('gulp-clean');

    // 压缩 public 目录 css文件
    gulp.task('minify-css', function() {
        return gulp.src('./public/**/*.css')
            .pipe(minifycss())
            .pipe(gulp.dest('./public'));
    });

    // 压缩 public 目录 html文件
    gulp.task('minify-html', function() {
      return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
             removeComments: true,
             minifyJS: true,
             minifyCSS: true,
             minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
    });

    // 压缩 public/js 目录 js文件
    gulp.task('minify-js', function() {
        return gulp.src('./public/**/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('./public'));
    });

//public-fancybox-js压缩
	gulp.task('fancybox:js', function() {
		return gulp.src('./public/fancybox/jquery.fancybox.js')
			.pipe(uglify())
			.pipe(gulp.dest('./public/fancybox/'));
	});
//public-fancybox-css压缩
	gulp.task('fancybox:css', function() {
		return gulp.src('./public/fancybox/jquery.fancybox.css')
			.pipe(minifycss())
			.pipe(gulp.dest('./public/fancybox/'));
	});
//图片压缩
	gulp.task('images', function() {
    gulp.src('./public/imsges/*.*')
        .pipe(imagemin({
            progressive: false
        }))
        .pipe(gulp.dest('./public/images/'));
});

    // 执行 gulp 命令时执行的任务
    gulp.task('build', [
        'minify-html','minify-css','minify-js','fancybox:js','fancybox:css','images'
    ]);

	gulp.task("watch",function() {
    gulp.watch("public/*",['build']);
});