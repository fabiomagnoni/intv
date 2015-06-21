module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			development: {
				files: {
					'app/styles/intv.css': 'app/less/intv.less'
				}
			}
		},

		watch: {
			files: [
				'app/**/*.less'
			],
			tasks: [
				'less'
			]
		}
	});

	grunt.registerTask('default', ['watch']);
};