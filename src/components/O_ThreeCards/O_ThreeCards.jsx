import React from 'react';
import './O_ThreeCards.scss'
import M_TarotCard from '../M_TarotCard/M_TarotCard.jsx'

export default class O_ThreeCards extends React.Component {
  render() {
    const { data } = this.props
    
        const threeCards = data.map((tarotCard, i) => {
          return (
            <M_TarotCard 
            color={tarotCard.color} 
            emoji={tarotCard.emoji} 
            line1={tarotCard.line1} 
            line2={tarotCard.line2}
            none={tarotCard.none} 
            image={tarotCard.image}
            texttype={tarotCard.texttype} 
            key={i} />
          )
        })

        return (
            <div className="O_ThreeCards">
                {threeCards[0]}
                <div className="Q_MenuStar Black Big"></div>
                {threeCards[1]}
                <div className="Q_MenuStar Black Big"></div>
                {threeCards[2]}
            </div>
          )
  }
}