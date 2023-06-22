import React from 'react'
import './airtableData.js'
import { createRoot } from 'react-dom/client'
import O_BlockOfTarotCards from './components/O_BlockOfTarotCards/O_BlockOfTarotCards.jsx'
import { getFortuneTellings, getTarotCards } from './airtableData.js'

  let tellings

  document.addEventListener('DOMContentLoaded', () => {
    getFortuneTellings().then((data) => {
      tellings = data
      const root = createRoot(document.querySelector('.W_FortuneTellings'))
      const requiredTellings = []
      tellings.forEach(telling => {
        if (telling.id === 'fortuneTelling3'){
          requiredTellings.push(telling)
        }
      });
  root.render(
    <div>
    <O_BlockOfTarotCards data={requiredTellings} />
    </div>)
    })  
  })