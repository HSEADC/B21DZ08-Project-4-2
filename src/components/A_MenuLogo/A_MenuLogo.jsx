import React from 'react';
import './A_MenuLogo.scss'
import classnames from 'classnames'
import logo from "../../images/A_Logo.svg"

export default class A_MenuLogo extends React.Component {
    render() {

        const { text, url } = this.props
    
        return (
          <a className='A_MenuLogo' href={url}>
            <img src={logo} />
          </a>
        )
    }
  }