module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['www/includes/js/jquery-1.8.3.min.js','www/includes/js/application.js'],
        dest: 'www/includes/js/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'www/includes/js/<%= pkg.name %>.min.js'
      }
    },
    less: { 
      development: {
        options: {
          yuicompress: false
        },
        files: {
          "www/includes/css/<%= pkg.name %>.css": "www/includes/css/*.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "www/includes/css/<%= pkg.name %>.min.css": "www/includes/css/*.less"
        }
      }
    }
  });

  // load modules 
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', 'concat min less');

};
