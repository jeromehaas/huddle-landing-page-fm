const gulp = require('gulp');
const plumber = require('gulp-plumber');
const { filePaths } = require('../configs/file-paths');
const { dest } = require('gulp');

const graphicTask = ( done ) => {
	gulp.src(filePaths.graphics.src)
		.pipe(plumber())
		.pipe(dest(filePaths.graphics.dist[0]))
	done();
};

module.exports = {
	graphicTask
};