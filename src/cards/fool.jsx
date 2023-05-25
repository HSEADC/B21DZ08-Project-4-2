import React from 'react'
import './fool.css'
import { getTarotCards } from './../airtableData.js'
import { createRoot } from 'react-dom/client'
import O_BlockOfTarotCards from '../components/O_BlockOfTarotCards/O_BlockOfTarotCards.jsx'
import M_TarotCardReading from '../components/M_TarotCardReading/M_TarotCardReading.jsx'
import O_TarotCardInfo from '../components/O_TarotCardInfo/O_TarotCardInfo.jsx'
import A_Text from '../components/A_Text/A_Text.jsx'

// document.addEventListener('DOMContentLoaded', () => {
//     getTarotCards().then((data) => {
//       requiredCard = []
//       requiredCard.push(data[0])
//       const root = createRoot(document.querySelector('.CardContainer'))
//   root.render(

//     <div>
//     <O_BlockOfTarotCards data={requiredCard} />
//     </div>)
//     })  
//   })
  document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.querySelector('.CardContainer'))

  getTarotCards().then((data) => {
    let tarotCard = data[5]
    const root = createRoot(document.querySelector('.CardContainer'))
  root.render(
    <div>
    <O_TarotCardInfo 
    tarotCard={tarotCard}
      name={tarotCard.name} 
      basics={tarotCard.basics} 
      love={tarotCard.love}
      work={tarotCard.work}
      advice={tarotCard.advice} 
      basicMeaning={tarotCard.basicMeaning} 
      loveTelling={tarotCard.loveTelling}
      answer={tarotCard.answer}
      history={tarotCard.history}
      cardOfTheDay={tarotCard.cardOfTheDay}
      adviceLong={tarotCard.adviceLong}/>
    </div>)
  })
})