import React from 'react';
import './O_BlockOfTarotCards.scss'
import classnames from 'classnames'
import M_TarotCard from '../M_TarotCard/M_TarotCard.jsx'

export default class O_BlockOfTarotCards extends React.Component {
    render() {

        const { tarotCardsMajorArcana } = this.props
    
        const tarotCollection = tarotCardsMajorArcana.map((tarotCard, i) => {
          return (
            <M_TarotCard 
            color={tarotCard.color} 
            emoji={tarotCard.emoji} 
            line1={tarotCard.line1} 
            line2={tarotCard.line2}
            none={tarotCard.none} 
            image={tarotCard.image} 
            key={i} />
          )
        })

      return (
        <div className="O_BlockOfTarotCards">
          {/* <div className="M_Description"></div> */}
          <div className="C_TarotCards">
            {tarotCollection}
          </div>
        </div>
      )
    }
  }