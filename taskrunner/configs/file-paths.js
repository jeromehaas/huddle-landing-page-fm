const filePaths = {
	html: {
		src: '../index.html',
		dist: '',
		},
	font: {
		src: ['../src/assets/fonts/**/*.+(ttf|woff2)'],
		dist: ['../assets/fonts']
	},
	js: {
		src: ['../src/js/**/*.js'],
		dist: ['../js']
	},
	scss: {
		src: ['../src/scss/configs/reset.scss', '../src/scss/configs/variables.scss', '../src/scss/configs/fonts.scss', '../src/scss/configs/typography.scss', '../src/scss/configs/global.scss', '../src/scss/sections/**/*.scss'],
		dist: ['../css']
	},
	graphics: {
		src: ['../src/assets/graphics/**/*.+(svg)' ],
		dist: ['../assets/graphics']
	},
	favicon: {
		src: ['../src/assets/favicons/favicon.ico'],
		dist: ['../assets/favicons']
	}
};

module.exports = {
	filePaths
};