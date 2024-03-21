// var destroot = "../theme-extension/";
var docsroot = "../docs/"
var gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  twig = require("gulp-twig"),
  // responsive = require("gulp-responsive"),
  browserSync = require("browser-sync").create();

// gulp.task("css", function () {
//   return gulp
//     .src("./home.scss")
//     .pipe(
//       sass({
//         // outputStyle: 'compressed'
//       }).on("error", sass.logError)
//     )
//     .pipe(gulp.dest(destroot + "assets/css/"))
//     .pipe(browserSync.stream());
// });

// gulp.task("compile", function (done) {
//   return gulp
//     .src("./home.twig")
//     .pipe(twig({ data: {} }))
//     .pipe(gulp.dest(destroot + "overrides/"))
//     .pipe(browserSync.stream());
//   done();
// });

gulp.task("compile_docs", function (done) {
  return gulp
    .src("./documentation.twig")
    .pipe(twig({ extname: '.md' }))
    .pipe(gulp.dest(docsroot))
    .pipe(browserSync.stream());
  done();
});

// gulp.task("browserSync", function () {
//   browserSync.init({
//     open: false,
//     server: {
//       baseDir: destroot,
//     },
//   });
// });

// gulp.task("images-presets", function () {
//   return gulp
//     .src("images/presets/*.jpg")
//     .pipe(
//       responsive(
//         {
//           "*.jpg": [
//             {
//               width: 1220,
//               rename: { suffix: "-1220" },
//             },
//             {
//               width: 1300,
//               rename: { suffix: "-1300" },
//             },
//             {
//               width: 1500,
//               rename: { suffix: "-1500" },
//             },
//             {
//               width: 1700,
//               rename: { suffix: "-1700" },
//             },
//             {
//               width: 2050,
//               rename: { suffix: "-2050" },
//             },
//             {
//               width: 2560,
//               rename: { suffix: "-2560" },
//             },
//           ],
//         },
//         {
//           // Global configuration for all images
//           format: 'jpeg',
//           quality: 95,
//           progressive: true,
//           withMetadata: false,
//         }
//       )
//     )
//     .pipe(gulp.dest(destroot + "assets/images/presets"));
// });


// gulp.task("images-gallery", function () {
//   return gulp
//     .src("images/gallery/**/*.jpg")
//     .pipe(
//       responsive(
//         {
//           "**/*{1,2,3,4,5}.jpg": [
//             {},
//           ],
//           "**/*-thumb.jpg": [
//             {
//               width: 160,
//               rename: { suffix: "-160" },
//             },
//             {
//               width: 200,
//               rename: { suffix: "-200" },
//             },
//             {
//               width: 256,
//               rename: { suffix: "-256" },
//             },
//             {
//               width: 360,
//               rename: { suffix: "-360" },
//             },
//             {
//               width: 425,
//               rename: { suffix: "-425" },
//             },
//           ],
//           "**/*-thumb-2x.jpg": [
//             {
//               width: 320,
//               rename: { suffix: "-320" },
//             },
//             {
//               width: 400,
//               rename: { suffix: "-400" },
//             },
//             {
//               width: 512,
//               rename: { suffix: "-512" },
//             },
//             {
//               width: 720,
//               rename: { suffix: "-720" },
//             },
//             {
//               width: 850,
//               rename: { suffix: "-850" },
//             },
//           ],
//         },
//         {
//           // Global configuration for all images
//           quality: 95,
//           progressive: true,
//           withMetadata: false,
//         }
//       )
//     )
//     .pipe(gulp.dest(destroot + "assets/images/gallery"));
// });

// gulp.task("images-testimonials", function () {
//   return gulp
//     .src("images/testimonials/*.jpg")
//     .pipe(
//       responsive(
//         {
//           "*.jpg": [
//             {
//               width: 100,
//               rename: { suffix: "-100" },
//             },
//             {
//               width: 200,
//               rename: { suffix: "-200" },
//             },
//           ],
//         },
//         {
//           // Global configuration for all images
//           quality: 95,
//           progressive: true,
//           withMetadata: false,
//         }
//       )
//     )
//     .pipe(gulp.dest(destroot + "assets/images/testimonials"));
// });

// gulp.task("images-ourstory", function () {
//   return gulp
//     .src("images/our-story/*.jpg")
//     .pipe(
//       responsive(
//         {
//           "*.jpg": [
//             {
//               width: 200,
//               rename: { suffix: "-200" },
//             },
//             {
//               width: 320,
//               rename: { suffix: "-320" },
//             },
//             {
//               width: 450,
//               rename: { suffix: "-450" },
//             },
//             {
//               width: 600,
//               rename: { suffix: "-600" },
//             },
//           ],
//         },
//         {
//           // Global configuration for all images
//           quality: 95,
//           progressive: true,
//           withMetadata: false,
//         }
//       )
//     )
//     .pipe(gulp.dest(destroot + "assets/images/our-story"));
// });

// gulp.task("images-benefits", function () {
//   return gulp
//     .src("images/benefits/*.jpg")
//     .pipe(
//       responsive(
//         {
//           "*.jpg": [
//             {
//               width: 365,
//               rename: { suffix: "-365" },
//             },
//             {
//               width: 475,
//               rename: { suffix: "-475" },
//             },
//             {
//               width: 845,
//               rename: { suffix: "-845" },
//             },
//           ],
//         },
//         {
//           // Global configuration for all images
//           quality: 95,
//           progressive: true,
//           withMetadata: false,
//         }
//       )
//     )
//     .pipe(gulp.dest(destroot + "assets/images/benefits"));
// });

gulp.task("watch", function () {
  // gulp.watch("./**/*.scss", gulp.series("css"));
  gulp.watch("./**/*.twig", gulp.series("compile_docs"));
});

gulp.task("default", gulp.parallel("compile_docs", "watch"));

// npm install <--
// gulp
