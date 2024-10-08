/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

function initFilter() {
  var filtername = document.getElementsByClassName('A_Heading3');
  var allarticlescards = document.getElementById('W_AllArticleCards');
  var allchildren = allarticlescards.children;
  var _loop = function _loop(i) {
    var currentfilter = filtername[i];
    currentfilter.addEventListener('click', function () {
      for (var c = 0; c < filtername.length; c++) {
        var element = filtername[c];
        element.classList.remove('Underlined');
      }
      currentfilter.classList.add('Underlined');
      var datafilter = currentfilter.dataset.type;
      for (var b = 0; b < allchildren.length; b++) {
        var _element = allchildren[b];
        _element.classList.add('NotShowing');
        var dataofelem = _element.dataset.category;
        if (dataofelem.includes(datafilter)) {
          _element.classList.remove('NotShowing');
        }
      }
    });
  };
  for (var i = 0; i < filtername.length; i++) {
    _loop(i);
  }
}
// function clickInit() {
//   const allarticlescards = document.getElementById('W_AllArticleCards')
//   const allchildren = allarticlescards.children
//   for (let i = 0; i < allchildren.length; i++) {
//     const element = allchildren[i]
//     element.addEventListener('click', () => {
//       window.location.replace('/articles/article.html')
//     })
//   }
// }
document.addEventListener('DOMContentLoaded', function () {
  initFilter();
  // clickInit()
});
/******/ })()
;