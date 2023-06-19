import React from 'react'
import './../fool.css'
import { getTarotCards } from '../airtableData.js'
import { createRoot } from 'react-dom/client'
import O_TarotCardInfo from '../components/O_TarotCardInfo/O_TarotCardInfo.jsx'
import O_MoreFortuneTellings from '../components/O_MoreFortuneTellings/O_MoreFortuneTellings.jsx'

document.addEventListener('DOMContentLoaded', () => {
const names = ['fool', 'theMagician', 'priestess', 'bashnya', 'empress', 
'emperor', 'priest', 'lovers', 'chariot', 'strength', 'hermit', 
'wheelOfFortune', 'justice' , 'theHangedMan', 'death', 'temperance', 
'theDevil', 'star', 'moon', 'sun', 'judgement', 'world', 'wandsAce', 
'kingOfWands', 'queenOfWands', 'knightOfWands', 'pageOfWands', 'wands2', 
'wands3', 'wands4', 'wands5', 'wands6', 'wands7', 'wands8', 'wands9', 
'wands10', 'aceOfCups', 'kingOfCups', 'queenOfCups', 'cupsKnight', 
'pageCups', 'cups2', 'cups3', 'cups4', 'cups5', 'cups6', 'cups7', 
'cups8', 'cups9', 'cups10', 'aceOfSwords', 'kingOfSwords', 
'queenOfSwords', 'knightOfSwords', 'pageOfSwords', 'swords2', 
'swords3', 'swords4', 'swords5', 'swords6', 'swords7', 'swords8', 
'swords9', 'swords10', 'aceOfPentacles', 'kingOfPentacles', 
'queenOfPentacles', 'knightOfPentacles', 'pageOfPentacles', 'pentacles2', 
'pentacles3', 'pentacles4', 'pentacles5', 'pentacles6', 'pentacles7', 
'pentacles8', 'pentacles9', 'pentacles10']

let url = window.location.href;
let path = window.location.pathname;
let filename = path.substring(path.lastIndexOf('/') + 1);
filename = filename.replace('.html', '');

  getTarotCards().then((data) => {
    let allTarotCards = data
    let requiredCard
    
    allTarotCards.forEach((tarotCard) => {
      if (tarotCard.htmlname == filename){
        requiredCard = tarotCard
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