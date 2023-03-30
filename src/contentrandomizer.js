// это код для просмотра 3 модуля, чтобы заполнить карточки, пока у нас нет базы данных

console.log('cardrandomizer')
const textrandom = document.getElementsByClassName('A_TarotCardTitleGrotesk')
const datarandom = [
  'на неделю',
  'на год',
  'на любовь',
  'на работу',
  'на модуль',
  'на масика',
  'на тюбика',
  'семью'
]
const cardPic = document.getElementsByClassName('A_TarotCardImage')

function initRandom() {
  for (let i = 0; i < textrandom.length; i++) {
    const element = textrandom[i]
    const randomnum = Math.floor(Math.random() * datarandom.length)
    element.innerText = datarandom[randomnum]
  }
}
document.addEventListener('DOMContentLoaded', () => {
  initRandom()
})
