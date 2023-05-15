import React from 'react';
import './M_TarotCard.scss'
import A_HighlightHeading4 from '../A_HighlightHeading4/A_HighlightHeading4.jsx'
import A_TarotCardImage from '../A_TarotCardImage/A_TarotCardImage.jsx'
import classnames from 'classnames'

export default class M_TarotCard extends React.Component {
  render() {
    const { color, emoji, line1, line2, image, none } = this.props

    const classes = classnames ({
        M_TarotCard: true,
        [`${color}`]: true,
    })
    return (
        <a href="">
            <div className={classes}>
                <div className="W_TarotCardShadow">
                    <div className="W_TarotCardInside">
                      <A_HighlightHeading4 
                      texttype="Emoji" 
                      text={emoji}
                      />
                      <br />
                      <br />
                      <A_TarotCardImage
                        image={image}
                      />
                      <br />
                      <A_HighlightHeading4 
                      none={none}
                      texttype="Antiqua" 
                      text={line1}
                      />
                      <br />
                      <A_HighlightHeading4 
                      texttype="Grotesk" 
                      text={line2}
                      />
                    </div>
                </div>
            </div>
        </a>
        
    )
  }
}