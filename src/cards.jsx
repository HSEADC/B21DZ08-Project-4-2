import React from 'react'
import './airtableData.js'
import { createRoot } from 'react-dom/client'
import O_BlockOfTarotCards from './components/O_BlockOfTarotCards/O_BlockOfTarotCards.jsx'
import O_MenuBar from './components/O_MenuBar/O_Menubar.jsx'
import { getFortuneTellings, getTarotCards } from './airtableData.js'
import { getSearchRequest } from './search.jsx'

  let tarotCards

  document.addEventListener('DOMContentLoaded', () => {
    getTarotCards().then((data) => {
      tarotCards = data
      const root = createRoot(document.querySelector('.Major'))
      const requiredCards = []
      tarotCards.forEach((card) => {
        if (card.arcana === 'major') {
          requiredCards.push(card)
        }
      })
  root.render(
    <div>
    <O_BlockOfTarotCards data={requiredCards} />
    </div>)
    })  
  })

  document.addEventListener('DOMContentLoaded', () => {
    getTarotCards().then((data) => {
      tarotCards = data
      const root = createRoot(document.querySelector('.Swords'))
      const requiredCards = []
      tarotCards.forEach((card) => {
        if (card.arcana === 'swords') {
          requiredCards.push(card)
        }
      })
  root.render(
    <div>
    <O_BlockOfTarotCards data={requiredCards} />
    </div>)
    })  
  })

  document.addEventListener('DOMContentLoaded', () => {
    getTarotCards().then((data) => {
      tarotCards = data
      const root = createRoot(document.querySelector('.Cups'))
      const requiredCards = []
      tarotCards.forEach((card) => {
        if (card.arcana === 'cups') {
          requiredCards.push(card)
        }
      })
  root.render(
    <div>
    <O_BlockOfTarotCards data={requiredCards} />
    </div>)
    })  
  })

  document.addEventListener('DOMContentLoaded', () => {
    getTarotCards().then((data) => {
      tarotCards = data
      const root = createRoot(document.querySelector('.Wands'))
      const requiredCards = []
      tarotCards.forEach((card) => {
        if (card.arcana === 'wands') {
          requiredCards.push(card)
        }
      })
  root.render(
    <div>
    <O_BlockOfTarotCards data={requiredCards} />
    </div>)
    })  
  })

  document.addEventListener('DOMContentLoaded', () => {
    getTarotCards().then((data) => {
      tarotCards = data
      const root = createRoot(document.querySelector('.Pentacles'))
      const requiredCards = []
      tarotCards.forEach((card) => {
        if (card.arcana === 'pentacles') {
          requiredCards.push(card)
        }
      })
  root.render(
    <div>
    <O_BlockOfTarotCards data={requiredCards} />
    </div>)
    })  
  }) 