const gulp = require('gulp');
const ttf2woff2 = require('gulp-ttf2woff2');
const plumber = require('gulp-plumber');
const { dest } = require('gulp');
const { filePaths } = require('../configs/file-paths');

const fontTask = ( done ) => {
		gulp.src(filePaths.font.src[0])
			.pipe(plumber())
			.pipe(dest(filePaths.font.dist[0]));
		gulp.src(filePaths.font.src[0])
			.pipe(plumber())
			.pipe(ttf2woff2())
			.pipe(dest(filePaths.font.dist[0]));
		done();
}

module.exports = {
		fontTask
}