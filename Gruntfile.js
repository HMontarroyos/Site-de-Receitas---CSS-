module.exports = function(grunt) {
    grunt.initConfig({
       
         copy: {
            public: {
                cwd: 'public',
                src: '**', 
                dest: 'dist', 
                expand: true
           }
      },

      clean: {
        dist: {
            src: 'dist'
        }
   },

   useminPrepare: {
    html: 'dist/**/*.html'
  },

  usemin: {
    html: 'dist/**/*.html'
  },

  imagemin: {
    public: {
      expand: true,
      cwd: 'dist/img',
      src: '**/*.{png,jpg,gif}',
      dest: 'dist/img'
    }
 },
 rev: {
    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 8
    },

    imagens: {
      src: ['dist/img/**/*.{png,jpg,gif}']
    },

    minificados: {
      src: ['dist/js/**/*.min.js', 'dist/css/**/*.min.css']
    }
},

 browserSync: {
    public: {
        bsFiles: {
          src : ['public/**/*']
        }, 
       options: {
          server: {
              baseDir: "public"
          }
       }
    }
}
});


//grunt server
grunt.registerTask('server', ['browserSync']);

grunt.registerTask('dist', ['clean', 'copy']);

grunt.registerTask('minifica', ['useminPrepare', 
                                  'concat',  'cssmin', 'rev:imagens','rev:minificados', 'usemin', 'imagemin']);

grunt.registerTask('default', ['dist', 'minifica']);


// carregando tasks
grunt.loadNpmTasks('grunt-contrib-copy'); 
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-usemin'); 
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-rev');

}