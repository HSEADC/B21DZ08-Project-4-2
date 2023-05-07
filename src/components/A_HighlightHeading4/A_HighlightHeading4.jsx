import React from 'react';
import './A_HighlightHeading4.scss'
import classnames from 'classnames'

export default class A_HighlightHeading4 extends React.Component {
    render() {

        const { text, texttype } = this.props

        const classes = classnames({
            A_HighlightHeading4: true,
            [`${texttype}`]: true
        })

      return (
        <div className={classes} texttype={texttype}>
            {text}
        </div>
      )
    }
  }