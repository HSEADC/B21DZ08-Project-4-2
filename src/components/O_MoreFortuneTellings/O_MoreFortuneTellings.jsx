import React from 'react';
import './O_MoreFortuneTellings.scss'
import A_Text from '../A_Text/A_Text.jsx'
import classnames from 'classnames'
import M_TarotCard from '../M_TarotCard/M_TarotCard.jsx';
import O_ThreeCards from '../O_ThreeCards/O_ThreeCards.jsx';

export default class O_MoreFortuneTellings extends React.Component {
  render() {
    const { data } = this.props

      return (
        <div className='O_MoreFortuneTellings'>
          <div className='W_HeaderHeading'>
            <A_Text texttype='A_Heading2Grotesk' text='другие'/>
            <A_Text texttype='A_Heading2Antiqua' text='карты таро'/>
          </div>
          <div className='W_CardsRow'>
            {/* <M_TarotCard 
                color={tarotCard[0].color} 
                emoji={tarotCard[0].emoji} 
                line1={tarotCard[0].line1} 
                line2={tarotCard[0].line2}
                none={tarotCard[0].none} 
                image={tarotCard[0].image}
                texttype={tarotCard[0].texttype} 
                key={i} />
            <div className='Q_StarIcon'></div>
            <M_TarotCard 
                color={tarotCard[1].color} 
                emoji={tarotCard[1].emoji} 
                line1={tarotCard[1].line1} 
                line2={tarotCard[1].line2}
                none={tarotCard[1].none} 
                image={tarotCard[1].image}
                texttype={tarotCard[1].texttype} 
                key={i} />
            <div className='Q_StarIcon'></div>
            <M_TarotCard 
                color={tarotCard[2].color} 
                emoji={tarotCard[2].emoji} 
                line1={tarotCard[2].line1} 
                line2={tarotCard[2].line2}
                none={tarotCard[2].none} 
                image={tarotCard[2].image}
                texttype={tarotCard[2].texttype} 
                key={i} /> */}
            <O_ThreeCards data={data}/>
          </div>
        </div>
      )
    }
}