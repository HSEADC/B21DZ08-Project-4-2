import React from 'react';
import './S_SearchPage.scss'
import classnames from 'classnames'
import O_FoundContent from '../O_FoundContent/O_FoundContent.jsx'

import { getSearchData } from '../../airtableData.js'

export default class S_SearchPage extends React.Component {

  renderPostSuggestions = () => {
    const { searchData } = this.props
    const searchInputValue = this.props.searchInputValue.toLowerCase()
    const nbspRegex = /[\u202F\u00A0]/gm
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm
    const posts = []

    searchData.forEach((dataPiece) => {
      const title = dataPiece.title
        .replaceAll(nbspRegex, ' ')
        .replaceAll(punctuationRegex, '')
        .toLowerCase()

      const description = postTeaser.description
        .replaceAll(nbspRegex, ' ')
        .replaceAll(punctuationRegex, '')
        .toLowerCase()

      if (
        title.includes(searchInputValue) ||
        description.includes(searchInputValue)
      ) {
        posts.push(
          <M_TarotCard
            title={postTeaser.title}
            description={postTeaser.description}
            url={postTeaser.url}
            key={postTeaser.id}
          />
        )
      }
    })

    return <div className="O_FoundContent">{posts}</div>

  }
    render() {

        const {  } = this.props

        // const classes = classnames({
        //     A_HighlightHeading4: true,
        //     [`${texttype}`]: true,
        //     None: none
        // })

      return (
            <>  </>
      )
    }
}