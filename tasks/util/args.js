//处理命令行参数
import yargs from 'yargs';

const args = yargs
	
	.option('production',{  //区别线上版还是线下版，production：发行版
		boolean:true,
		default:false,
		describe:'min all scripts'
	})

	.option('watch',{  //监听所有文件
		boolean:true,
		default:false,
		describe:'watch all files'
	})

	.option('verbose',{  //详细输出命令行执行的日志
		boolean:true,
		default:false,
		describe:'log'
	})

	.option('sourcemaps',{  //js压缩后 有sourcemaps，
		describe:'force the creation of sourcemaps'
	})

	.option('port',{  //端口
		string:true,
		default:8080,
		describe:'server port'
	})

	.argv