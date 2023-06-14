import './search.css'
import { getSearchData } from './airtableData.js'

let content

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

function setSearchRequest(requestText) {
  const url = getPathFromUrl(window.location.href)
  window.location.href = url + '?request=' + requestText
}

function getPathFromUrl(url) {
  return url.split('?')[0]
}

function createContentCard(contentItemData) {
  const contentItem = document.createElement('div')
  contentItem.classList.add('M_CardArticle')

  const contentItemImage = document.createElement('img')
  contentItemImage.classList.add('A_CardArticleImage')
  // contentItemCover.src = contentItemData.image

  const contentItemTitle = document.createElement('div')
  contentItemTitle.classList.add('A_Heading5')
  contentItemTitle.innerText = contentItemData.title

  const contentItemDescription = document.createElement('div')
  contentItemDescription.classList.add('A_Paragraph', 'Center')
  contentItemDescription.innerText = contentItemData.description

  contentItem.appendChild(contentItemImage)
  contentItem.appendChild(contentItemTitle)
  contentItem.appendChild(contentItemDescription)

  return contentItem
}

function renderCardsByIds(container, ids) {
  ids = [...new Set(ids)]

  ids.forEach((id) => {
    content.forEach((item) => {
      if (item.id === id) {
        container.appendChild(createContentCard(item))
      }
    })
  })
}

function rerenderSearchedContent(requestText) {
  const contentItemsContainer1 = document.querySelector(
    '.W_SearchedArticleCards'
  )
  contentItemsContainer1.innerHTML = ''
  const contentItemsContainer2 = document.querySelector('.O_SearchedTarotCards')
  contentItemsContainer2.innerHTML = ''

  let articleIds = []
  let tarotCardIds = []

  content.forEach((contentItem) => {
    const nbspRegex = /[\u202F\u00A0]/gm
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm
    let { title, description } = contentItem
    title = title.replaceAll(nbspRegex, ' ')
    title = title.replaceAll(punctuationRegex, '')
    description = description.replaceAll(nbspRegex, ' ')
    description = description.replaceAll(punctuationRegex, '')

    if (contentItem.id.startsWith('article') && requestText.length >= 3) {
      if (title.includes(requestText) || description.includes(requestText)) {
        articleIds.push(contentItem.id)
        console.log(contentItem.id)
      }
    } else if (
      contentItem.id.startsWith('tarotCard') &&
      requestText.length >= 3
    ) {
      if (title.includes(requestText) || description.includes(requestText)) {
        tarotCardIds.push(contentItem.id)
        console.log(contentItem.id)
      }
    }
  })
  // renderCardsByIds(contentItemsContainer1, tarotCardIds)
  // renderCardsByIds(contentItemsContainer2, articleIds)
  if (tarotCardIds.length > 0 || articleIds.length > 0) {
    renderCardsByIds(contentItemsContainer1, articleIds)
    renderCardsByIds(contentItemsContainer2, tarotCardIds)
  } else {
    renderNothingFound()
  }

  function renderNothingFound() {
    const contentItemsContainer = document.querySelector('.A_NothingFound')
    contentItemsContainer.innerHTML = 'мы ничего не нашли :('
  }
}

function initSearch() {
  const O_Search = document.querySelector('.O_Search')
  const A_SearchInput = O_Search.querySelector('.A_SearchInput')
  const Q_SearchIcon = O_Search.querySelector('.Q_SearchIcon')
  let requestText = getSearchRequest()

  if (requestText != undefined) {
    A_SearchInput.value = requestText

    if (content) {
      rerenderSearchedContent(requestText)
    }
  } else {
    A_SearchInput.value = ''
  }

  A_SearchInput.addEventListener('input', (e) => {
    const requestText = e.target.value

    if (requestText.length >= 3) {
      Q_SearchIcon.classList.remove('disabled')
    } else {
      Q_SearchIcon.classList.add('disabled')
    }
  })

  A_SearchInput.addEventListener('keydown', (e) => {
    requestText = e.target.value
    if (requestText.length >= 3) {
      if (e.key === 'Enter') {
        setSearchRequest(requestText)
      }
    }
  })

  Q_SearchIcon.addEventListener('click', (e) => {
    if (!e.target.classList.contains('disabled')) {
      const requestText = A_SearchInput.value
      setSearchRequest(requestText)
      rerenderSearchedContent(requestText)
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  getSearchData().then((data) => {
    content = data
    initSearch()
  })
})

export { getSearchRequest }
