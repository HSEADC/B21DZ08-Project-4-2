import React from 'react';
import './A_TarotCardImage.scss'
import classnames from 'classnames'
import TarotCardImage from '../../images/tarotcard6.png'

import tarotCardImage1 from '../../images/tarotcard1.png'
import tarotCardImage2 from '../../images/tarotcard2.png'
import tarotCardImage3 from '../../images/tarotcard3.png'

export default class A_TarotCardImage extends React.Component {
    render() {

        const { image } = this.props

      return (
        <img src={image} className='A_TarotCardImage'/>
      )
    }
  }