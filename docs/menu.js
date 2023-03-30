/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
console.log('ready');
var search = document.querySelector('.A_Search');
var searchBox = document.querySelector('.M_SearchBox');
var wrapperSearch = document.createElement('div');
var logoMenu = document.querySelector('.A_Logo');
var centerMenu = document.querySelector('.M_MenuElements');
var vw = window.innerWidth;
console.log(vw);
var cards = [{
  title: 'карта дня',
  imgname: "url('images/image.jpg')",
  ahref: '/cardoftheday.html'
}, {
  title: 'любовное настроение',
  imgname: "url('images/image.jpg')",
  ahref: '/articlescompilations/lovecompilation.html'
}, {
  title: 'таро уэйта',
  imgname: "url('images/image.jpg')",
  ahref: '/articles/article.html'
}];

function initSelect() {
  wrapperSearch.classList.add('W_SearchItems');
  search.addEventListener('focus', function () {
    searchBox.classList.add('M_SearchBoxActive');
    searchBox.appendChild(wrapperSearch);
    console.log(wrapperSearch.children);
  });
  document.body.addEventListener('click', function (e) {
    if (!e.target.classList.contains('M_SearchItem') && !e.target.classList.contains('M_SearchBox') && !e.target.classList.contains('M_SearchBoxActive') && !e.target.classList.contains('A_Search')) {
      console.log('focus');
      searchBox.classList.remove('M_SearchBoxActive');
      searchBox.removeChild(wrapperSearch);
      searchBox.classList.remove('Modify');
      wrapperSearch.innerHTML = '';
    }
  });
  search.addEventListener('input', function () {
    wrapperSearch.innerHTML = '';

    if (search.value != '') {
      filterCards(search.value);
      searchBox.classList.add('Modify');
    }
  });
}

function filterCards(inputtext) {
  var cardsForRender = [];
  cards.forEach(function (o) {
    var nameofcard = o.title;

    if (nameofcard.includes(inputtext.toLowerCase())) {
      cardsForRender.push(o);
    }
  });
  cardsForRender.forEach(function (o) {
    createElem(o.title, wrapperSearch, o.ahref);
  });
}

function createElem(title, parentname, ahref) {
  var itemSearch = document.createElement('a');
  var itemText = document.createElement('div');
  var dreamcore = parentname.appendChild(itemSearch);
  dreamcore.classList.add('M_SearchItem');
  itemText.classList.add('A_Heading3');
  dreamcore.appendChild(itemText);
  itemText.innerText = title;
  dreamcore.setAttribute('href', ahref);
  console.log(dreamcore);
}

function adaptiveMenu() {
  logoMenu.removeAttribute('onclick');
  centerMenu.classList.toggle('NotShowing');
  searchBox.classList.toggle('NotShowing');
  logoMenu.addEventListener('click', function () {
    centerMenu.classList.toggle('NotShowing');
    searchBox.classList.toggle('NotShowing');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initSelect();

  if (vw <= 460) {
    adaptiveMenu();
  }
});
/******/ })()
;