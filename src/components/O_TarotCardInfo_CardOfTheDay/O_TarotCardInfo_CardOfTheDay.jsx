import React from 'react';
import './O_TarotCardInfo_CardOfTheDay.scss'
import M_TarotCardReading from '../M_TarotCardReading/M_TarotCardReading.jsx'
import M_TarotCard from '../M_TarotCard/M_TarotCard.jsx'

export default class O_TarotCardInfo_CardOfTheDay extends React.Component {
  render() {
    const { 
      tarotCard, 
      name, 
      basics, 
      love, 
      work, 
      advice, 
      basicMeaning, 
      loveTelling, 
      answer, 
      history,
      cardOfTheDay,
      adviceLong } = this.props

      return (
          <div className='O_TarotCardInfo_CardOfTheDay'>
            <div className='W_Section1'>
              <M_TarotCard 
                color={tarotCard.color} 
                emoji={tarotCard.emoji} 
                line1={tarotCard.line1} 
                line2={tarotCard.line2}
                none={tarotCard.none} 
                image={tarotCard.image}
                texttype={tarotCard.texttype} 
              />
              <div className="W_BasicInfo">
                <M_TarotCardReading
                starshowing={true}
                heading='название'
                paragraph={name}/>
                <M_TarotCardReading
                starshowing={true}
                heading='общее'
                paragraph={basics}/>
                <M_TarotCardReading
                starshowing={true}
                heading='карта дня'
                paragraph={cardOfTheDay}/>
                <M_TarotCardReading 
                starshowing={true}
                heading='совет'
                paragraph={advice}/>
              </div>
            </div>
          </div>
      )
    }
}