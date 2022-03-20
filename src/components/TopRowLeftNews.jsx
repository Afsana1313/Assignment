import React from 'react'
import { getNews } from '../functions/controllerFunctions'
import NewsTime from './NewsTime'
import SingleNewsDescription from './SingleNewsDescription'
import SingleNewsHeader from './SingleNewsHeader'
import Image from './Image'

function TopRowLeftNews({ newsIndex }) {
    const news = getNews(newsIndex)
    const imageStyle = {
        width: '370px',
        height: '100%'
    }
  return (
      <div className='top-row-left-news'>
          <div className='image-contaier'>
              <Image
                  photo={news.photo}
                  title={news.title}
                  style={imageStyle}
              />
              {/* <img src={`${news.photo}`} alt={ `${news.title}`}/> */}
          </div>
          <div className='news-text-container'>
              <SingleNewsHeader title={news.title} />
              <SingleNewsDescription description={news.description} />
              <NewsTime time={ news.time}/>
          </div>
    </div>
  )
}

export default TopRowLeftNews