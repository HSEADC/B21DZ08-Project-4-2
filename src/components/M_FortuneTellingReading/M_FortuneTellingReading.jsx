import React from 'react';
import './M_FortuneTellingReading.scss'
import A_Text from '../A_Text/A_Text.jsx'
import classnames from 'classnames'

export default class M_FortuneTellingReading extends React.Component {
  render() {
    const {telling} = this.props
    return (
        <div className = "M_FortuneTellingReading">
            <A_Text texttype='A_Heading3' text='что это значит?'/>
            <A_Text texttype='A_Paragraph' text={telling}/>
        </div>
    )
  }
}