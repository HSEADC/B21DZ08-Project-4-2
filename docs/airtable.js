/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// UNUSED EXPORTS: getArticles, getFortuneTellings, getSearchData, getTarotCards

;// ./src/data/articles.json
const articles_namespaceObject = [];
;// ./src/data/fortuneTellings.json
const fortuneTellings_namespaceObject = [];
;// ./src/data/tarotCards.json
const tarotCards_namespaceObject = [];
;// ./src/airtableData.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




// Функция для получения статей
function getArticles() {
  return new Promise(function (resolve) {
    resolve(articles);
  });
}

// Функция для получения предсказаний
function getFortuneTellings() {
  return new Promise(function (resolve) {
    resolve(fortuneTellings);
  });
}

// Функция для получения карт Таро
function getTarotCards() {
  return new Promise(function (resolve) {
    resolve(tarotCards);
  });
}

// Функция для поиска данных
function getSearchData() {
  return new Promise(function (resolve) {
    var searchData = [].concat(_toConsumableArray(articles), _toConsumableArray(fortuneTellings), _toConsumableArray(tarotCards)); // Или какой-то другой способ объединения данных
    resolve(searchData);
  });
}
/******/ })()
;