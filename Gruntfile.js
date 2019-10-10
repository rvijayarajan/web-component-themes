module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
		    options: {
		    },
		    dist: {
		      src: [],
		      dest: '',
		    },
		  },
		copy: {
			main: {
				src: '',
				dest: ''
			}
		},
		sass: {                              // Task
		    dist: {                            // Target
		      files: [{
		        expand: true,
		        cwd: 'scss',
		        src: ['app.scss'],
		        dest: 'dist',
		        ext: '.css'
		      }]
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default',['sass']);
};