console.log('cardoftheday')
import React from 'react'
import './fool.css'
import { getTarotCards } from './airtableData.js'
import { createRoot } from 'react-dom/client'
import O_TarotCardInfo_CardOfTheDay from './components/O_TarotCardInfo_CardOfTheDay/O_TarotCardInfo_CardOfTheDay.jsx'
import O_MoreFortuneTellings from './components/O_MoreFortuneTellings/O_MoreFortuneTellings.jsx'



document.addEventListener('DOMContentLoaded', () => {
const AccentBottom = document.querySelector('.A_AccentButtonTarotTellings')
  const FortuneTelling = document.querySelector('.O_ContentFortuneTelling')
AccentBottom.addEventListener('click', () => {
        AccentBottom.classList.toggle('NotShowing')
        FortuneTelling.classList.toggle('NotShowing')
        window.gtag('event', 'Click', {
          event_category: 'Button',
          event_label: 'CardOfTheDay',
        });
      })

  getTarotCards().then((data) => {
    let allTarotCards = data
    let requiredCard

    const randomIndex = Math.floor(Math.random() * allTarotCards.length);
    requiredCard = allTarotCards[randomIndex]
    console.log(requiredCard)

    // allTarotCards.forEach((tarotCard) => {
    //   if (tarotCard.htmlname == name){
    //     requiredCard = tarotCard
    //     console.log(requiredCard);
    //   }
    // })
    const root = createRoot(document.querySelector('.CardContainer_CardOfTheDay'))
    root.render(
      <O_TarotCardInfo_CardOfTheDay
        tarotCard={requiredCard}
        name={requiredCard.name}
        basics={requiredCard.basics} 
        cardOfTheDay={requiredCard.cardOfTheDay}
        advice={requiredCard.advice}/>
      )
  })
})
