const gulp = require('gulp')
const pump = require('pump')

gulp.task('default', copyFiles)

function copyFiles(done) {
  // let root = 'dist/ngx-dom-wrappers'
  let output = 'dist/ngx-dom-wrappers'
  pump([
    gulp.src(['README.md', 'LICENSE']),
    gulp.dest(output)
  ], done())
}
