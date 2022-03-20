import React from 'react'
import SingleNewsHeader from './SingleNewsHeader'
import SingleNewsDescription from './SingleNewsDescription'
import SingleNewsImage from './SingleNewsImage'
import NewsTime from './NewsTime'
function SingleNewsContainer({ news, index }) {
  return (
      <div
          className='single-news-container'
      >
          <div className='single-news-container-top'>
              {index>2 && <SingleNewsImage
                  photo={news.photo}
                  alt={news.title}
              />}
                <SingleNewsHeader
                    title={news.title}
                />
          </div>
          {index<3 &&
              <SingleNewsDescription
             description={news.description}
              />
          }
          <NewsTime
            time={news.time}
          />
      </div>
  )
}

export default SingleNewsContainer