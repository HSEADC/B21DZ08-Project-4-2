import React from 'react';
import './M_TarotCardReading.scss'
import A_Text from '../A_Text/A_Text.jsx'
import classnames from 'classnames'

export default class M_CardReading extends React.Component {
  render() {
    const { heading, paragraph, starshowing} = this.props

    const iconClasses = classnames ({
      Q_StarIcon: true,
      none: !starshowing
  })
      return (
        <div className='M_CardReading'>
          <div className='W_StarHeading'>
            <div className={iconClasses} starShowing={starshowing}></div>
            <A_Text texttype='A_Heading3' text={heading}/>
          </div>
            <A_Text texttype='A_Paragraph' text={paragraph}/>
        </div>
      )
    }
}