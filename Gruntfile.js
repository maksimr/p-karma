module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        shower: {
            index: {
                title: 'Karma - Spectacular Test Runner for Javascript',
                src: 'index.md',
                styles: 'shower/screen.css'
            }
        },
        watch: {
            shower: {
                files: [
                    'index.md'
                ],
                tasks: ['shower']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};
