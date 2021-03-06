import gulp from 'gulp';
import gulpif from 'gulp-if'; //gulp语句做判断的
import livereload from 'gulp-livereload';//文件修改以后，浏览器自动更新
import args from './util/args';//对命令行参数进行解析

gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs')
		.pipe(gulp.dest('server'))
		.pipe(gulpif(args.watch,livereload()))
})