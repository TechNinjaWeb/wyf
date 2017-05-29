var fs = require('fs');
var package_json = JSON.parse(fs.readFileSync('./package.json'));
var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var exec = require('child_process').exec;    
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var browserSync = require('browser-sync');
var Vinyl = require('vinyl');
var toJson = require('gulp-to-json');
var intoStream = require('into-stream');

gulp.task('browser-sync', function() {
  browserSync({
    cors: true,
    reloadOnRestart: false,
    port: 8080,
    minify: true,
    server: {
       baseDir: "./dist",
       directory: false,
       index: "index.html"
    },
    middleware: [
    {
        route: "/test",
        handle: function (req, res, next) {
            // handle any requests at /test
            res.status(200).send("Thanks for stopping by!");
        }
    }]
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('src/assets/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('styles', function(){
  gulp.src(['src/**/*.css'])
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
  return gulp.src('src/**/*.ts')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('main.ts'))
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch("src/scripts/**/*.ts", ['scripts']);
  gulp.watch("*.html", ['bs-reload']);
});

gulp.task('test', function () {
  console.log("Outputting jObj to json");
  let jObj = {
    server: {url: 'www.bob.com'},
    dashboard: {url: 'www.kyle.com'}
  };
  // // Complete task
  // let vinyl = new Vinyl({
  //   cwd: '/',
  //   base: '/',
  //   path: '/',
  //   contents: new Buffer(JSON.stringify(jObj))
  // });
  let config = require('./server/routes/parse/parse.config.js');
  let server = config.server;
  let dashboard = config.dashboard;

  var settings_builder = require('./gulp');

  gulp.src('./server/routes/parse/parse.config.js', { buffer: false })
    .pipe(settings_builder({
      serverBaseURL: "",
      
    }))
    .pipe(gulp.dest('TESTING'));
  

// gulp.src('./jObj.js')
//   .pipe(function(e){
//     console.log("What is OBJ?: ");
//     console.log(e);
//     return function(req, res, next) {

//     }
//   })
//   .pipe(gulp.dest('./TEST/jObj2.js'))

  // intoStream(jObj)
  //   // .pipe(process.stdout)
  //   .pipe(toJson({filename: 'jObj.js'}))
  //   .pipe(gulp.dest('public/jquery/jObj.js'));
  
  console.log("Completed Task");

});
