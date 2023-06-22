import React from 'react';
import './A_MenuMobileToggle.scss'
import classnames from 'classnames'

export default class A_MenuMobileToggle extends React.Component {
  // handleClick = () => {
  //   const searchbb = document.querySelector(".M_SearchBar")
  //   const menuelems = document.querySelector(".M_MenuElements")
  //   searchbb.classList.toggle("Shows")
  //   menuelems.classList.toggle("Shows")
  // };

  render() {
    return (
      <a className='A_MenuMobileToggle' onClick={this.props.onClick}>
        <div></div>
        <div></div>
        <div></div>
      </a>
    );
  }
}
