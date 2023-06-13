import React from 'react';
import './O_TarotCardInfo.scss'
import M_TarotCardReading from '../M_TarotCardReading/M_TarotCardReading.jsx'
import M_TarotCard from '../M_TarotCard/M_TarotCard.jsx'

export default class O_TarotCardInfo extends React.Component {
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
          <div className='O_TarotCardInfo'>
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
              <div class="W_BasicInfo">
                <M_TarotCardReading
                starShowing={true}
                heading='название'
                paragraph={name}/>
                <M_TarotCardReading
                starShowing={true}
                heading='общее'
                paragraph={basics}/>
                <M_TarotCardReading
                starShowing={true}
                heading='любовь'
                paragraph={love}/>
                <M_TarotCardReading
                starShowing={true}
                heading='работа'
                paragraph={work}/>
                <M_TarotCardReading 
                starShowing={true}
                heading='совет'
                paragraph={advice}/>
              </div>
            </div>
            <div className='W_Section2'>
                <M_TarotCardReading
                starShowing={false}
                heading='общее значение'
                paragraph={basicMeaning}/>
                <M_TarotCardReading
                starShowing={false}
                heading='любовный расклад'
                paragraph={loveTelling}/>
                <M_TarotCardReading
                starShowing={false}
                heading='ответ на вопрос'
                paragraph={answer}/>
                <M_TarotCardReading
                starShowing={false}
                heading='карта дня'
                paragraph={cardOfTheDay}/>
                <M_TarotCardReading
                starShowing={false}
                heading='совет'
                paragraph={adviceLong}/>
                <M_TarotCardReading
                starShowing={false} 
                heading='история карты'
                paragraph={history}/>
            </div>
          </div>
      )
    }
}