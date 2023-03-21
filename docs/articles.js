/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

console.log('cardfilter');
document.addEventListener('DOMContentLoaded', function () {
  initFilter();
});

function initFilter() {
  var allarticlescards = document.getElementById('W_AllArticleCards');
  var allchildren = allarticlescards.children;
  console.log(allchildren);
  var Category = document.getElementsByClassName('A_ArticlesСategory');
  var Compilation = document.getElementsByClassName('M_ArticlesCompilation');
  var CardSmall = document.getElementsByClassName('M_CardArticle');
  var CardBig = document.getElementsByClassName('M_ArticleCardBig');
  var datacards = document.querySelector('[data-type="Cards"]');
  console.log(datacards);
  var datadecks = document.querySelector('[data-type="Decks"]');
  console.log(Category);

  for (var i = 0; i < Category.length; i++) {
    Category[i].addEventListener('click', function () {
      console.log(this.innerHTML);
      console.log('click');

      if (this.innerHTML == 'все статьи') {
        console.log('all');

        for (var b = 0; b < Compilation.length; b++) {
          Compilation[b].classList.add('NotShowing');
        }

        for (var b = 0; b < CardSmall.length; b++) {
          CardSmall[b].classList.remove('NotShowing');
        }

        for (var b = 0; b < CardBig.length; b++) {
          CardBig[b].classList.remove('NotShowing');
        }
      }

      if (this.innerHTML == 'все подборки') {
        console.log('подборки');

        for (var b = 0; b < Compilation.length; b++) {
          Compilation[b].classList.remove('NotShowing');
        }

        for (var b = 0; b < CardSmall.length; b++) {
          CardSmall[b].classList.add('NotShowing');
        }

        for (var b = 0; b < CardBig.length; b++) {
          CardBig[b].classList.add('NotShowing');
        }
      }

      if (this.innerHTML == 'о картах') {
        console.log('карты');

        for (var b = 0; b < allchildren.length; b++) {
          allchildren[b].classList.add('NotShowing');
        }

        for (var b = 0; b < datacards.length; b++) {
          datacards[b].classList.remove('NotShowing');
        }
      }

      for (var i = 0; i < Category.length; i++) {
        Category[i].classList.remove('Underlined');
      }

      this.classList.add('Underlined');
    });
  } //   [...document.getElementsByClassName('A_ArticlesCategory')].forEach((i) => {
  //     i.addEventListener('click', function () {
  //       console.log('click')
  //       console.log(Category.innerHTML)
  //       i.classList.add('.Underlined')
  //     })
  //   })

}
/******/ })()
;