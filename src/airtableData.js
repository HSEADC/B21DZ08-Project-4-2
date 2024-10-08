import articles from './data/articles.json'
import fortuneTellings from './data/fortuneTellings.json'
import tarotCards from './data/tarotCards.json'

// Функция для получения статей
export function getArticles() {
  return new Promise((resolve) => {
    resolve(articles)
  })
}

// Функция для получения предсказаний
export function getFortuneTellings() {
  return new Promise((resolve) => {
    resolve(fortuneTellings)
  })
}

// Функция для получения карт Таро
export function getTarotCards() {
  return new Promise((resolve) => {
    resolve(tarotCards)
  })
}

// Функция для поиска данных
export function getSearchData() {
  return new Promise((resolve) => {
    const searchData = [...articles, ...fortuneTellings, ...tarotCards] // Или какой-то другой способ объединения данных
    resolve(searchData)
  })
}
