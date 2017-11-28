import gulp from 'gulp';
import gulpif from 'gulp-if'; //gulp语句做判断的
import concat from 'gulp-concat';  //gulp中做语句拼接
import webpack from 'webpack';  //打包
import gulpWebpack from 'webpack-stream'; //gulp处理的文件流
import named from 'vinyl-named';//文件重命名 做标志的
import livereload from 'gulp-livereload';//文件修改以后，浏览器自动更新
import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//对文件重命名
import uglify from 'gulp-uglify';//压缩js的时候
import {log,colors} from 'gulp-util';//在命令行中输出 log 色彩
import args from './util/args';//对命令行参数进行解析

//建立一个scripts任务
gulp.task('scripts',()=>{
	return gulp.src(['app/js/index.js'])  //打开index.js文件
		.pipe(plumber({  //处理常规的错误逻辑
			errorHandle:function(){  //每个pipe 出现错误时 抛出异常

			}
		}))
		.pipe(named())  //对文件重命名
		.pipe(gulpWebpack({  //对js文件进行编译
			module:{
				loaders:[{
					test:/\.js$/,
					loader:'babel-loader'
				}]
			}
		}),null,(err,stats)=>{  //错误处理
			log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
				chunks:false
			}))
		})
		.pipe(gulp.dest('server/public/js'))  //编译后放在此位置
		.pipe(rename({   //重新备份一下编译好的文件，压缩后名叫cp.min.js
			basename:'cp',
			extname:'.min.js'
		}))
		.pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}
		))  //配置 压缩
		.pipe(gulp.dest('server/public/js'))  //存储压缩后的文件
		.pipe(gulpif(args.watch,livereload()))  //监听 文件修改 浏览器自动更新
})
 