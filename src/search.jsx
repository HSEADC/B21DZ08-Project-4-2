import React from 'react'
import './airtableData.js'
import { createRoot } from 'react-dom/client'
import O_BlockOfTarotCards from './components/O_BlockOfTarotCards/O_BlockOfTarotCards.jsx'

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

function createArticleCard(contentItemData) {
  const contentItemLink = document.createElement('a')
  contentItemLink.href = contentItemData.link

  const contentItem = document.createElement('div')
  contentItem.classList.add('M_CardArticle')

  const contentItemImage = document.createElement('img')
  contentItemImage.classList.add('A_CardArticleImage')
  contentItemImage.src = contentItemData.image

  const contentItemTitle = document.createElement('div')
  contentItemTitle.classList.add('A_Heading5')
  contentItemTitle.innerHTML = contentItemData.title

  const contentItemDescription = document.createElement('div')
  contentItemDescription.classList.add('A_Paragraph', 'Center')
  contentItemDescription.innerHTML = contentItemData.description

  contentItem.appendChild(contentItemImage)
  contentItem.appendChild(contentItemTitle)
  contentItem.appendChild(contentItemDescription)
  contentItemLink.appendChild(contentItem)

  return contentItemLink
}

function createTarotCards(tarotCardData){
  const root = createRoot(document.querySelector('.C_FoundTarotCards'))
    root.render(<O_BlockOfTarotCards data={tarotCardData} />) 
}

function createFortuneTellings(fortuneTellings){
  const root = createRoot(document.querySelector('.C_FoundFortuneTellings'))
    root.render(<O_BlockOfTarotCards data={fortuneTellings} />) 
}

function renderCardsByIds(container, ids) {
  ids = [...new Set(ids)]
  let tarotCards = []
  let fortuneTellings = []
  ids.forEach((id) => {
    content.forEach((item) => {
      if (item.id === id && id.startsWith('article')) {
        container.appendChild(createArticleCard(item))
      }
      else if (item.id === id && id.startsWith('tarotCard')) {
        tarotCards.push(item)
      }
      else if (item.id === id && id.startsWith('fortuneTelling')) {
        fortuneTellings.push(item)
      }
    })
  })
  createTarotCards(tarotCards)
  createFortuneTellings(fortuneTellings)
}

function rerenderSearchedContent(requestText) {
  const contentItemsContainer1 = document.querySelector(
    '.C_FoundArticleCards'
  )
  contentItemsContainer1.innerHTML = ''

  let Ids = []

  let articleFound = false;
  let tarotCardFound = false;
  let fortuneTellingFound = false;

  content.forEach((contentItem) => {
    const nbspRegex = /[\u202F\u00A0]/gm
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm
    let { title, description, line1, line2, name, similarWords } = contentItem

    similarWords = similarWords.replaceAll(nbspRegex, ' ')
    similarWords = similarWords.replaceAll(punctuationRegex, '')

    if (contentItem.id.startsWith('article') && requestText.length >= 3) {
      if (title.includes(requestText) || description.includes(requestText) || similarWords.includes(requestText)) {
        title = title.replaceAll(nbspRegex, ' ')
        title = title.replaceAll(punctuationRegex, '')
        description = description.replaceAll(nbspRegex, ' ')
        description = description.replaceAll(punctuationRegex, '')
        Ids.push(contentItem.id)
        articleFound = true
      }
    } else if (
      contentItem.id.startsWith('tarotCard') &&
      requestText.length >= 3){
        line1 = line1.replaceAll(nbspRegex, ' ')
        line1 = line1.replaceAll(punctuationRegex, '')
        line2 = line2.replaceAll(nbspRegex, ' ')
        line2 = line2.replaceAll(punctuationRegex, '')
        name = name.replaceAll(nbspRegex, ' ')
        name = name.replaceAll(punctuationRegex, '')
      if (line1.includes(requestText) || line2.includes(requestText) || name.includes(requestText) || similarWords.includes(requestText)) {
        Ids.push(contentItem.id)
        tarotCardFound = true
      }
    } else if (
        contentItem.id.startsWith('fortuneTelling') &&
        requestText.length >= 3){
          line1 = line1.replaceAll(nbspRegex, ' ')
          line1 = line1.replaceAll(punctuationRegex, '')
          line2 = line2.replaceAll(nbspRegex, ' ')
          line2 = line2.replaceAll(punctuationRegex, '')
        if (line1.includes(requestText) || line2.includes(requestText) || similarWords.includes(requestText)) {
          Ids.push(contentItem.id)
          fortuneTellingFound = true
        }
        }
    })
    if (articleFound) {
      const articlesSection = document.querySelector('.W_FoundArticlesSection')
      if (articlesSection) {
        articlesSection.style.display = 'flex';
      }
    }
  
    if (tarotCardFound) {
      const tarotCardsSection = document.querySelector('.W_FoundTarotCardsSection')
      if (tarotCardsSection) {
        tarotCardsSection.style.display = 'flex';
      }
    }

    if (fortuneTellingFound) {
      const fortuneTellingsSection = document.querySelector('.W_FoundFortuneTellingsSection')
      if (fortuneTellingsSection) {
        fortuneTellingsSection.style.display = 'flex';
      }
    }

  if (Ids.length > 0) {
    renderCardsByIds(contentItemsContainer1, Ids)
  } else {
    renderNothingFound()
  }

  function renderNothingFound() {
    const NothingFound = document.querySelector('.M_NothingFound')
    NothingFound.style.display = 'flex';
  }
}

function initSearch() {
  const O_Search = document.querySelector('.M_Search')
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

// export { getSearchRequest }