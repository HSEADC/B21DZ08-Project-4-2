import React from 'react';
import './A_Button.scss'
import classnames from 'classnames'

export default class A_Button extends React.Component {
  render() {
    const { text, handleClick } = this.props

      return (
        <div className='A_Button' onClick={ handleClick }>
          погадать снова!
        </div>
      )
    }
}