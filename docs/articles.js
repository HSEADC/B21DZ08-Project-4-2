/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

console.log('cardfilter');

function initFilter() {
  var filtername = document.getElementsByClassName('A_ArticlesСategory');
  var allarticlescards = document.getElementById('W_AllArticleCards');
  var allchildren = allarticlescards.children;
  console.log(filtername, allchildren);

  var _loop = function _loop(i) {
    var currentfilter = filtername[i];
    currentfilter.addEventListener('click', function () {
      console.log('clickclock');

      for (var c = 0; c < filtername.length; c++) {
        var element = filtername[c];
        element.classList.remove('Underlined');
      }

      console.log(currentfilter.dataset.type);
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

function clickInit() {
  var allarticlescards = document.getElementById('W_AllArticleCards');
  var allchildren = allarticlescards.children;

  for (var i = 0; i < allchildren.length; i++) {
    var element = allchildren[i];
    element.addEventListener('click', function () {
      window.location.replace('/articles/article.html');
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initFilter();
  clickInit();
});
/******/ })()
;