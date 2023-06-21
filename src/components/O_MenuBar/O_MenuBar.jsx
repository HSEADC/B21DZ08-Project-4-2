import React from 'react';
import { useState, useEffect } from 'react';
import './O_MenuBar.scss'
import classnames from 'classnames'

import A_MenuElement from '../A_MenuElement/A_MenuElement.jsx';
import M_SearchBar from '../M_SearchBar/M_SearchBar.jsx';
import { getSearchData } from '../../airtableData.js';
import A_MenuLogo from '../A_MenuLogo/A_MenuLogo.jsx';

import A_MenuMobileToggle from '../A_MenuMobileToggle/A_MenuMobileToggle.jsx';

const adressPart = ':8080/'
// const addressPart = '.adc.ac/'
const menu = [
  {
    text: '',
    url: '/index.html'
  },
  {
    text: 'погадать',
    url: '/fortunetellings.html'
  },
  {
    text: 'почитать',
    url: '/articles.html'
  },
  {
    text: 'толкования карт',
    url: '/cards.html'
  },
  {
    text: 'карта дня',
    url: '/cardoftheday.html'
  },
  {
    text: 'о нас',
    url: '/about.html'
  }
]

export default class O_MenuBar extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = props

    this.state = {
      isSearchButtonDisabled: true,
      teasers: [],
      searchInputValue,
      isFocused: false,
      isToggled: false
    }
  }

  // componentDidMount() {
  //   getSearchData().then((data) => {
  //     this.setState({
  //       teasers: data
  //     })
  //   })
  // }

  // вынести функцию в утилиты
  getPathFromUrl = (url) => {
    return url.split(adressPart)[0]
  }

  handleSearchInput = (searchInputValue) => {
    let isSearchButtonDisabled = true

    if (searchInputValue.length >= 3) {
      isSearchButtonDisabled = false
    }

    this.setState({
      isSearchButtonDisabled,
      searchInputValue
    })
  }

  handleSearchSubmit = () => {
    const { searchInputValue } = this.state

    if (searchInputValue.length >= 3) {
      const url = this.getPathFromUrl(window.location.href)

      window.location.href =
        url + adressPart + 'search.html?request=' + searchInputValue
    }
  }

  // ExtendedSearchBar = () => {
  //   searchBox.classList.add('M_SearchBarActive')
  // }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  toggleClass = () => {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  };

  render() {
    const { searchInputValue, current, isToggled } = this.state
    const url = this.getPathFromUrl(window.location.href)
    const menuElementsclasses = classnames({
      'M_MenuElements': true,
      'Shows': isToggled
    });
    return (
      <div className="O_MenuBar">
        {/* <A_MenuLogo url={menu[0].url}/> */}
        <A_MenuMobileToggle onClick={this.toggleClass}/>
        <A_MenuLogo url={url + adressPart}/>
        <div className={menuElementsclasses}>
          <A_MenuElement text={menu[1].text} url={menu[1].url} current={current} logo={false} wrapper='W_MenuElement1'/>
          <div className="Q_MenuStar Black"></div>
          <A_MenuElement text={menu[2].text} url={menu[2].url} current={current} logo={false} wrapper='W_MenuElement2'/>
          <div className="Q_MenuStar Black"></div>
          <A_MenuElement text={menu[3].text} url={menu[3].url} current={current} logo={false} wrapper='W_MenuElement3'/>
          <div className="Q_MenuStar Black"></div>
          <A_MenuElement text={menu[4].text} url={menu[4].url} current={current} logo={false} wrapper='W_MenuElement4'/>
          <div className="Q_MenuStar Black"></div>
          <A_MenuElement text={menu[5].text} url={menu[5].url} current={current} logo={false} wrapper='W_MenuElement5'/>
        </div>
        <M_SearchBar
          isToggled = {isToggled}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          isFocused={this.state.isFocused}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
      </div>
    )
  }
}