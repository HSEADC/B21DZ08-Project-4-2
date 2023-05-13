import React from 'react'
import Airtable from 'airtable'
import { createRoot } from 'react-dom/client'
import O_BlockOfTarotCards from './components/O_BlockOfTarotCards/O_BlockOfTarotCards.jsx'
import tarotCardImage1 from './images/tarotcard1.png'
import tarotCardImage2 from './images/tarotcard2.png'
import tarotCardImage3 from './images/tarotcard3.png'

let base = new Airtable({
    apiKey:
      'patTX1cwSKVpDKQ63.5bd9c7552485e54487c6e17913b4e7f0e68bfedf725a360c2d80673b4fdf9d27'
  }).base('appcttjzPgvmm4Gdx')

  function getTarotCards() {
    return new Promise((resolve, reject) => {
        let images = [tarotCardImage1, tarotCardImage2, tarotCardImage3]
      const tarotCardsMajorArcana = []
      base('Cards')
        .select({ maxRecords: 100 })
        .firstPage()
        .then((result) => {
          result.forEach((record) => {
            tarotCardsMajorArcana.push({
              color: record.fields['color'],
              emoji: record.fields['emoji'],
              line1: record.fields['line1'],
              line2: record.fields['line2'],
              none: eval(record.fields['none']),
              image: eval(record.fields['image'])
            })
          })
  
          resolve(tarotCardsMajorArcana)
        })
    })
  }

  let tarotCardsMajorArcana

  document.addEventListener('DOMContentLoaded', () => {
    getTarotCards().then((data) => {
      tarotCardsMajorArcana = data
      const root = createRoot(document.querySelector('.Testtt'))
      let RequiredCards = tarotCardsMajorArcana[3]
  root.render(
    <div>
    <O_BlockOfTarotCards tarotCardsMajorArcana={tarotCardsMajorArcana} />
    </div>)
    })  })