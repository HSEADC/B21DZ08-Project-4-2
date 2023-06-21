import React from 'react';
import './O_BlockOfArticles.scss'
import classnames from 'classnames'
import M_ArticleCard from '../M_ArticleCard/M_ArticleCard.jsx'

export default class O_BlockOfArticles extends React.Component {
    render() {

        const { data } = this.props
    

        const ArticlesCollection = data.map((article, i) => {
          return (
            <M_ArticleCard 
            link={article.link}
            title={article.title} 
            description={article.description} 
            id={article.id} 
            image={article.image}
            key={i} 
            />
          )
        })

      return (
        <div className="O_BlockOfArticles">
            {ArticlesCollection}
        </div>
      )
    }
  }