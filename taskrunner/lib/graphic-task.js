const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const cache = require('gulp-cache');
const plumber = require('gulp-plumber');
const { filePaths } = require('../configs/file-paths');
const { dest } = require('gulp');

const graphicTask = ( done ) => {
	gulp.src(filePaths.graphics.src)
		.pipe(plumber())
		.pipe(cache(svgmin()))
		.pipe(dest(filePaths.graphics.dist[0]))
	done();
};

module.exports = {
	graphicTask
};