const gulp = require('gulp');
const opn = require('opn');

const pages = [
  'https://github.com',
  'https://habr.com',
  'https://stackoverflow.com',
];

const interval = 5000;
let currentPageIndex = 0;
let intervalId; 

function showNextPage() {
  if (currentPageIndex < pages.length) {
    opn(pages[currentPageIndex]).catch(error => {
      console.error(`Error opening page: ${error}`);
    });
    currentPageIndex++;
  } else {
    clearInterval(intervalId);
    console.log('All pages have been opened. Task stopped.');
  }
}

gulp.task('show-pages', function (done) {
  intervalId = setInterval(showNextPage, interval);
  done();
});

gulp.task('default', gulp.series('show-pages'));