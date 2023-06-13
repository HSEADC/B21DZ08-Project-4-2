import React from 'react'
import './fool.css'
import { getTarotCards } from './../airtableData.js'
import { createRoot } from 'react-dom/client'
import O_TarotCardInfo from '../components/O_TarotCardInfo/O_TarotCardInfo.jsx'
import O_MoreFortuneTellings from '../components/O_MoreFortuneTellings/O_MoreFortuneTellings.jsx'

document.addEventListener('DOMContentLoaded', () => {

  // getTarotCards().then((data) => {
  //   let tarotCard = data[5]
  //   const root = createRoot(document.querySelector('.CardContainer'))
  // root.render(
  //   <div>
  //   <O_TarotCardInfo 
  //     tarotCard={tarotCard}
  //     name={tarotCard.name} 
  //     basics={tarotCard.basics} 
  //     love={tarotCard.love}
  //     work={tarotCard.work}
  //     advice={tarotCard.advice} 
  //     basicMeaning={tarotCard.basicMeaning} 
  //     loveTelling={tarotCard.loveTelling}
  //     answer={tarotCard.answer}
  //     history={tarotCard.history}
  //     cardOfTheDay={tarotCard.cardOfTheDay}
  //     adviceLong={tarotCard.adviceLong}/>
  //   </div>)
  // })

  getTarotCards().then((data) => {
    let tarotCards = data
    let requiredCards = []

    const firstCard = tarotCards[2]
    const secondCard = tarotCards[3]
    const thirdCard = tarotCards[1]

    requiredCards.push(firstCard, secondCard, thirdCard);

    //я напишу тут функцию чтобы он генерил соседние карты!!
    // tarotCards.forEach((tarotCard) => {
      
    // })

    const root = createRoot(document.querySelector('.W_MoreTarotCards'))
  root.render(
    <div>
    <O_MoreFortuneTellings data={requiredCards}/>
    </div>
    )
  })
})