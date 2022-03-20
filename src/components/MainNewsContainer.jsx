import React from 'react'
import { getNews } from '../functions/controllerFunctions'
import SingleNewsContainer from './SingleNewsContainer'
import TopRowNews from './TopRowNews'

function MainNewsContainer() {
    const centerNewsList = [2, 3, 4, 5, 7, 8, 9, 10, 11]
  return (
      <div className='container'>
          <TopRowNews
              newsLeft={3}
              newsRight={1}
          />
          <div className='middle-section-news'>
              {
              centerNewsList.map((i, index) => <SingleNewsContainer
                  news={getNews(i)}
                  key={i}
                  index={index}
              />)
          } 
           </div>
          
    </div>
  )
}

export default MainNewsContainer