import React from 'react'
import Airtable from 'airtable'
import './airtableData.js'
import { createRoot } from 'react-dom/client'
import O_BlockOfTarotCards from './components/O_BlockOfTarotCards/O_BlockOfTarotCards.jsx'
import { getSearchData, getTarotCards } from './airtableData.js'

  let tarotCardsMajorArcana

  document.addEventListener('DOMContentLoaded', () => {
    getTarotCards().then((data) => {
      tarotCardsMajorArcana = data
      const root = createRoot(document.querySelector('.Testtt'))
      const requiredCards = []
      for (let i = 1; i < 3; i++) {
        requiredCards.push(tarotCardsMajorArcana[i]);
      }
  root.render(
    <div>
    <O_BlockOfTarotCards data={requiredCards} />
    </div>)
    })  
  })

  document.addEventListener('DOMContentLoaded', () => {
    getTarotCards().then((data) => {
      tarotCardsMajorArcana = data
      const root = createRoot(document.querySelector('.Testtt2'))
      const requiredCards = []
      for (let i = 0; i < 4; i++) {
        requiredCards.push(tarotCardsMajorArcana[i]);
      }
  root.render(
    <div>
    <O_BlockOfTarotCards data={requiredCards} />
    </div>)
    })  
  })