import gulp from 'gulp';
import gulpif from 'gulp-if'; //gulp语句做判断的
import liveserver from 'gulp-live-server';//启动服务器的包
import args from './util/args';//对命令行参数进行解析

gulp.task('serve',(cb)=>{
	if(!args.watch) return cb(); //如果不是处于监听状态下，返回回调
	
	//否则 创建一个服务器
	var server = liveserver.new(['--harmony','server/bin/www']); //启动www服务器脚本
	server.start();  //启动服务器

	//server下的js、ejs文件 发生改变 浏览器自动刷新
	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
		server.notify.apply(server,[file]);  //通知服务器 发生改变，服务器进行相应处理
	})


	//监听需要重启服务的 文件，接口，服务启动入口文件，需要重启服务器才行
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
		server.start.bind(server)();
	});

})