import React from 'react';
import './A_Text.scss'
import classnames from 'classnames'

export default class A_Text extends React.Component {
  render() {
    const { texttype, starShowing, text } = this.props

    const textClasses = classnames ({
        [`${texttype}`]: true
    })

    const iconClasses = classnames ({
        Q_StarIcon: true,
        none: !starShowing
    })

      return (
        <div className='A_Text'>
          <div className={textClasses} type={texttype}>{text}</div>
        </div>
      )
    }
}