const gulp = require('gulp');
const { series, parallel, dest } = require('gulp');

const { fontTask } = require('./lib/font-task');
const { watchTask } = require('./lib/watch-task');
const { jsTask } = require('./lib/js-task');
const { scssTask } = require('./lib/scss-task');
const { graphicTask } = require('./lib/graphic-task');
const { faviconTask } = require('./lib/favicon-task');

const dev = series(scssTask, jsTask, watchTask);
const build = series(scssTask, jsTask, fontTask, graphicTask, faviconTask);

module.exports = {
	default: dev,
	dev: dev,
	build: build
};