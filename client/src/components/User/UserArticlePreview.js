import React from 'react';
import { Link } from 'react-router-dom';

const UserArticlePreview = ({articles, url}) => {
    
  const articlePreviews = articles.map((article) => {
   

      return <div className = "articlePreviews" key = {article.id}>
      <Link to={{
          pathname: `/articles/edit/${article.id}`,
          state: {
              article: {article}
          }
          }}>{article.title}</Link>
           <h3>{article.lead}</h3>
           <h4>by {article.user.name} </h4>
      </div>
  })

  return(
      <div>
      <h1>Articles</h1>
      {articlePreviews}
      </div>
  )
}

export default UserArticlePreview;