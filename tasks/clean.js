import gulp from 'gulp';
import del from 'del';
import args from './util/args';//对命令行参数进行解析

gulp.task('clean',()=>{
	return del(['server/public','server/views']);  //清空server/public、server/views
});