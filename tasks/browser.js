import gulp from 'gulp';
import gulpif from 'gulp-if'; //gulp语句做判断的
import gutil from 'gulp-util';  //gulp常用函数工具集合
import args from './util/args';//对命令行参数进行解析

gulp.task('browser',(cb)=>{
	if(!args.watch) return cb();

	gulp.watch('app/**/*.js',['scripts']); //当原始spp下的js文件发生变化时，启动scripts.js构建脚本
	gulp.watch('app/**/*.ejs',['pages']); 
	gulp.watch('app/**/*.css',['css']);
});