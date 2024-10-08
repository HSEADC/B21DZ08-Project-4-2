/******/ (() => { // webpackBootstrap
// это код для просмотра 3 модуля, чтобы заполнить карточки, пока у нас нет базы данных

console.log('cardrandomizer');
var textrandom = document.getElementsByClassName('A_TarotCardTitleGrotesk');
var datarandom = ['на неделю', 'на год', 'на любовь', 'на работу', 'на модуль', 'на масика', 'на тюбика', 'семью'];
var cardPic = document.getElementsByClassName('A_TarotCardImage');
function initRandom() {
  for (var i = 0; i < textrandom.length; i++) {
    var element = textrandom[i];
    var randomnum = Math.floor(Math.random() * datarandom.length);
    element.innerText = datarandom[randomnum];
  }
}
document.addEventListener('DOMContentLoaded', function () {
  initRandom();
});
/******/ })()
;