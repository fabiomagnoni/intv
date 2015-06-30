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

		copy: {
			main: {
				src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
				dest: 'app/styles/third-party/bootstrap/bootstrap.min.css'
			}
		},

		watch: {
			files: [
				'app/**/*.less'
			],
			tasks: [
				'less', 'copy'
			]
		}
	});

	grunt.registerTask('default', ['watch']);
};
