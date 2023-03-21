/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
console.log('ready');
document.addEventListener('DOMContentLoaded', function () {
  initSelect();
});

function initSelect() {
  var Search = document.querySelector('.A_Search');
  var SearchBox = document.querySelector('.M_SearchBox');
  Search.addEventListener('focus', function () {
    console.log('focus');
    SearchBox.classList.add('M_SearchBoxActive');
  });
  Search.addEventListener('blur', function () {
    console.log('focus');
    SearchBox.classList.remove('M_SearchBoxActive');
  });
}
/******/ })()
;