/**
 * Created by yanyj on 2017/7/6.
 */
var gulp = require('gulp');
var concat  = require('gulp-concat');
var replace  = require('gulp-replace');
var order = require('gulp-order');
var uglify  = require('gulp-uglify');
var clean = require('gulp-clean');
var filter = require('gulp-filter');

var prettify = require('gulp-jsbeautifier');

gulp.task('clean',function(){

    gulp.src(['dist/*'],{read:false})
        .pipe(clean());
});

var fileArray = [
    "src/pocket/pocket.header",
    "src/pocket-*/*.js",
    "src/pocket/pocket.tail",
];

//合并
gulp.task("contact",function(){
    // 把1.js和2.js合并为main.js，输出到dest/js目录下
    gulp.src(fileArray)
        .pipe(order(fileArray,{ base: './' }))
        .pipe(filter(['src/*/*','!src/pocket-*/*-test.js']))
        .pipe(replace(/var pocket = require\('([^']*)'\);/, ''))
        .pipe(replace('module.exports = pocket;', ''))
        .pipe(concat('pocket.js')).pipe(prettify({
        indent_size: 4,
    })).pipe(gulp.dest('./dist'));
});

//压缩
gulp.task("uglify",function(){
    // 把1.js和2.js合并压缩为main.js，输出到dest/js目录下
    gulp.src(fileArray)
        .pipe(order(fileArray,{ base: './' }))
        .pipe(filter(['src/*/*','!src/pocket-*/*-test.js']))
        .pipe(replace(/var pocket = require\('([^']*)'\);/, ''))
        .pipe(replace('module.exports = pocket;', ''))
        .pipe(concat('pocket.min.js')).pipe(uglify()).pipe(gulp.dest('./dist'));
});

gulp.task('minify', ['clean', 'contact', 'uglify']);



gulp.task('watch', function(){
    gulp.watch('./src/pocket-*/*.js', ['minify']);
});

//压缩
gulp.task("minify-test",function(){
    // 把1.js和2.js合并压缩为main.js，输出到dest/js目录下
    gulp.src('./minfy/socket.io.js')

        .pipe(uglify()).pipe(gulp.dest('./dist'));
});



