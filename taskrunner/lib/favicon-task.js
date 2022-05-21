const gulp = require('gulp');
const plumber = require('gulp-plumber');
const { filePaths } = require('../configs/file-paths');
const { dest } = require('gulp');

const faviconTask = ( done ) => {
	gulp.src(filePaths.favicon.src)
		.pipe(plumber())
		.pipe(dest(filePaths.favicon.dist[0]))
	done();
};

module.exports = {
	faviconTask
};