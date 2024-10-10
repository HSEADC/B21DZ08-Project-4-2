import React from 'react';
import './M_ArticleCard.scss'
import classnames from 'classnames'

export default class M_ArticleCard extends React.Component {
  render() {
    const { link, title, description, id, image } = this.props

      return (
          <a href={link}>
                  <div className="M_CardArticle">
                      <div className='A_CardArticleImage' style={{ backgroundImage: `url(${require('../../data/' + image)})` }}>
                        <div className="Q_CardArticlesImageGradient"></div>
                      </div>
                    <div className='A_Heading5' dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div className='A_Paragraph Center' dangerouslySetInnerHTML={{ __html: description }}></div>
                  </div>
          </a>
      )
    }
}