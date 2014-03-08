module.exports = function(grunt) {
    var path = require('path');
    var mountFolder = function(connect, point) {
        return connect.static(path.resolve(point));
    };

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        shower: {
            index: {
                title: 'Karma - Spectacular Test Runner for Javascript',
                src: 'index.md',
                styles: 'shower/screen.css'
            }
        },
        connect: {
            options: {
                livereload: true,
            },
            server: {
                options: {
                    middleware: function(connect) {
                        return [
                            require('connect-livereload')(),
                            mountFolder(connect, '.')
                        ];
                    }
                }
            }
        },
        watch: {
            shower: {
                options: {
                    livereload: true
                },
                files: [
                    'index.md'
                ],
                tasks: ['shower']
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);
};
