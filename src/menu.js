// const search = document.querySelector('.A_Search')
// const searchBox = document.querySelector('.M_SearchBox')
// const wrapperSearch = document.createElement('div')
// const logoMenu = document.querySelector('.A_Logo')
// const centerMenu = document.querySelector('.M_MenuElements')
// const vw = window.innerWidth

// const cards = [
//   {
//     title: 'карта дня',
//     imgname: "url('images/image.jpg')",
//     ahref: '/cardoftheday.html'
//   },
//   {
//     title: 'любовное настроение',
//     imgname: "url('images/image.jpg')",
//     ahref: '/articlescompilations/lovecompilation.html'
//   },
//   {
//     title: 'таро уэйта',
//     imgname: "url('images/image.jpg')",
//     ahref: '/articles/article.html'
//   }
// ]

// function initSelect() {
//   wrapperSearch.classList.add('W_SearchItems')

//   search.addEventListener('focus', () => {
//     searchBox.classList.add('M_SearchBoxActive')
//     searchBox.appendChild(wrapperSearch)
//     console.log(wrapperSearch.children)
//   })

//   document.body.addEventListener('click', (e) => {
//     if (
//       !e.target.classList.contains('M_SearchItem') &&
//       !e.target.classList.contains('M_SearchBox') &&
//       !e.target.classList.contains('M_SearchBoxActive') &&
//       !e.target.classList.contains('A_Search')
//     ) {
//       console.log('focus')
//       searchBox.classList.remove('M_SearchBoxActive')
//       searchBox.removeChild(wrapperSearch)
//       searchBox.classList.remove('Modify')
//       wrapperSearch.innerHTML = ''
//     }
//   })

//   search.addEventListener('input', () => {
//     wrapperSearch.innerHTML = ''
//     if (search.value != '') {
//       filterCards(search.value)
//       searchBox.classList.add('Modify')
//     }
//   })
// }

// function filterCards(inputtext) {
//   const cardsForRender = []
//   cards.forEach((o) => {
//     const nameofcard = o.title
//     if (nameofcard.includes(inputtext.toLowerCase())) {
//       cardsForRender.push(o)
//     }
//   })

//   cardsForRender.forEach((o) => {
//     createElem(o.title, wrapperSearch, o.ahref)
//   })
// }

// function createElem(title, parentname, ahref) {
//   const itemSearch = document.createElement('a')
//   const itemText = document.createElement('div')
//   const dreamcore = parentname.appendChild(itemSearch)

//   dreamcore.classList.add('M_SearchItem')
//   itemText.classList.add('A_Heading3')
//   dreamcore.appendChild(itemText)
//   itemText.innerText = title
//   dreamcore.setAttribute('href', ahref)
//   console.log(dreamcore)
// }

// function adaptiveMenu() {
//   logoMenu.removeAttribute('onclick')
//   centerMenu.classList.toggle('NotShowing')
//   searchBox.classList.toggle('NotShowing')
//   logoMenu.addEventListener('click', () => {
//     centerMenu.classList.toggle('NotShowing')
//     searchBox.classList.toggle('NotShowing')
//   })
// }

// document.addEventListener('DOMContentLoaded', () => {
//   initSelect()
//   if (vw <= 460) {
//     adaptiveMenu()
//   }
// })

$(document).ready(function () {
  $(function () {
    $('.draggable').draggable()
  })

  $('.umbrella').click(function () {
    $(this).addClass('umbrella1-01')
    $(this).removeClass('umbrella')
  })

  search.addEventListener('input', () => {
    wrapperSearch.innerHTML = ''
    if (search.value != '') {
      filterCards(search.value)
      searchBox.classList.add('Modify')
    }
  })
}

// function filterCards(inputtext) {
//   const cardsForRender = []
//   cards.forEach((o) => {
//     const nameofcard = o.title
//     if (nameofcard.includes(inputtext.toLowerCase())) {
//       cardsForRender.push(o)
//     }
//   })

//   cardsForRender.forEach((o) => {
//     createElem(o.title, wrapperSearch, o.ahref)
//   })
// }

// function createElem(title, parentname, ahref) {
//   const itemSearch = document.createElement('a')
//   const itemText = document.createElement('div')
//   const dreamcore = parentname.appendChild(itemSearch)

//   dreamcore.classList.add('M_SearchItem')
//   itemText.classList.add('A_Heading3')
//   dreamcore.appendChild(itemText)
//   itemText.innerText = title
//   dreamcore.setAttribute('href', ahref)
//   console.log(dreamcore)
// }

function adaptiveMenu() {
  logoMenu.removeAttribute('onclick')
  centerMenu.classList.toggle('NotShowing')
  searchBox.classList.toggle('NotShowing')
  logoMenu.addEventListener('click', () => {
    centerMenu.classList.toggle('NotShowing')
    searchBox.classList.toggle('NotShowing')
  })
}

// document.addEventListener('DOMContentLoaded', () => {
//   initSelect()
//   if (vw <= 460) {
//     adaptiveMenu()
//   }
// })
