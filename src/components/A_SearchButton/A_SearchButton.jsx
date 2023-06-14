import React from 'react';
import './A_SearchButton.scss'
import classnames from 'classnames'

export default class A_SearchButton extends React.Component {

    render() {

        const { handleClick } = this.props

        return (
         <div className="A_SearchButton" onClick={handleClick}></div>
      )
    }
  }