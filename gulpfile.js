var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require("tsify");
gulp.task('copy-html', function() {
	gulp
		.src('app/index.html')
		.pipe(gulp.dest('./public'));
});
gulp.task('browserify', function() {
	return browserify({
			basedir: '.',
			entries: ['app/app.ts'],
		})
		.plugin(tsify, {
			declaration: false,
			"module": "commonjs",
			noImplicitAny: true,
			"target": "es5"
		})
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('public'));
});
gulp.task('default', ['copy-html', 'browserify']);
