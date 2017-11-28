import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';


//任务的顺序，最后一定是个数组
gulp.task('bulid',gulpSequence('clean','css','pages','scripts',['browser','serve']));

