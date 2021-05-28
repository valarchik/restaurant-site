

module.exports = function(grunt) {
    const sass = require('node-sass');
    require('load-grunt-tasks')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        watch: {
            styles: {
                files: ['sass/**/*.scss'], // which files to watch
                tasks: ['sass']
            },
            options: {
                nospawn: false
            }
        }
    });

    grunt.registerTask('default', ['sass', 'watch']);
};


