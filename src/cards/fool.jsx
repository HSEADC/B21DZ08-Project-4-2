import React from 'react'
import './../fool.css'
import { getTarotCards } from './../airtableData.js'
import { createRoot } from 'react-dom/client'
import O_TarotCardInfo from '../components/O_TarotCardInfo/O_TarotCardInfo.jsx'
import O_MoreFortuneTellings from '../components/O_MoreFortuneTellings/O_MoreFortuneTellings.jsx'

document.addEventListener('DOMContentLoaded', () => {
const name = 'fool'
let tarotCardIndex 

  getTarotCards().then((data) => {
    let allTarotCards = data
    let requiredCard
    // let recommendations
    
    allTarotCards.forEach((tarotCard) => {
      if (tarotCard.name == name){
        requiredCard = tarotCard
        tarotCardIndex = allTarotCards.indexOf(tarotCard)
      }
    })
    const root = createRoot(document.querySelector('.CardContainer'))
    root.render(
      <O_TarotCardInfo 
        tarotCard={requiredCard}
        name={requiredCard.name} 
        basics={requiredCard.basics} 
        love={requiredCard.love}
        work={requiredCard.work}
        advice={requiredCard.advice} 
        basicMeaning={requiredCard.basicMeaning} 
        loveTelling={requiredCard.loveTelling}
        answer={requiredCard.answer}
        history={requiredCard.history}
        cardOfTheDay={requiredCard.cardOfTheDay}
        adviceLong={requiredCard.adviceLong}/>
      )
  })

  // getTarotCards().then((data) => {
  //   let allTarotCards = data
  //   let requiredCards = []

  //   const firstCard = allTarotCards[0]
  //   const secondCard = allTarotCards[1]
  //   const thirdCard = allTarotCards[2]
  //   requiredCards.push(firstCard, secondCard, thirdCard);

  //   const root = createRoot(document.querySelector('.W_MoreTarotCards'))
  // root.render(
  //   <div>
  //   <O_MoreFortuneTellings data={requiredCards}/>
  //   </div>
  //   )
  // })
})