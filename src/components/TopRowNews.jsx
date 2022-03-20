import React from 'react'
import TopRowLeftNews from './TopRowLeftNews'
import TopRowRightNews from './TopRowRightNews'
function TopRowNews({ newsLeft, newsRight }) {
    console.log(newsRight)
  return (
      <div className='top-row-news-container'>
          <TopRowLeftNews
              newsIndex={newsLeft}  
          />
          <TopRowRightNews
             news={newsRight}
          />
      </div>
  )
}

export default TopRowNews