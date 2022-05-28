const gulp = require('gulp');
const plumber = require('gulp-plumber');
const { filePaths } = require('../configs/file-paths');
const { dest } = require('gulp');
const scsslint = require('gulp-scss-lint');

const beautifyTask = ( done ) => {
	gulp.src(filePaths.scss.src)
		.pipe(plumber())
		.pipe(scsslint());
	done();
};

module.exports = {
	beautifyTask
};