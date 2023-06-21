import React from 'react';
import './A_MenuElement.scss'
import classnames from 'classnames'

export default class A_MenuElement extends React.Component {
    render() {

        const { text, url, current, wrapper } = this.props
    
        const classes = classnames({
          A_MenuElement: true,
        })

        const wrapperClasses = classnames({
          [`${wrapper}`]: true,
        })
    
        return (
          <div className={wrapperClasses}>
            <a className={classes} href={url}>
              {text}
            </a>
          </div>
        )
    }
  }