import React from 'react'
import SingleNewsHeader from './SingleNewsHeader'
import SingleNewsDescription from './SingleNewsDescription'

function SingleNewsContainer({news}) {
  return (
      <div
          className='single-news-container'
          key={news.id}
      >
          <SingleNewsHeader
            title={news.title}
          />
          <SingleNewsDescription
            description={news.description}
          />
      </div>
  )
}

export default SingleNewsContainer