import React from 'react';
import './A_MenuMobileToggle.scss'
import classnames from 'classnames'


export default class A_MenuMobileToggle extends React.Component {
    render() {

        const { url } = this.props
    
        return (
          <a className='A_MenuMoblieToggle'>
            <div></div>
            <div></div>
            <div></div>
          </a>
        )
    }
  }