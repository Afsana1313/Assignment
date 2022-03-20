import React from 'react'
import SingleNewsHeader from './SingleNewsHeader'
import SingleNewsDescription from './SingleNewsDescription'
import Image from './Image'
import NewsTime from './NewsTime'
function SingleNewsContainer({ news, index, noRightBorder , imageCover}) {
    const imageContainerStyle = {
        flexDirection: imageCover ? 'column' : null
    }
    const imageStyle = {
        width: imageCover ? '100%' : null,
    }
  return (
      <div
          className='single-news-container'
          style={{borderRight: noRightBorder ? 0 : null}}
      >
          <div className='single-news-container-top' style={imageContainerStyle}>
              {index>2 && <Image
                  photo={news.photo}
                  alt={news.title}
                  style={imageStyle}
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
         {!imageCover &&  <NewsTime
            time={news.time}
          />}
      </div>
  )
}

export default SingleNewsContainer