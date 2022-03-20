import React from 'react'
import { getNews } from '../functions/controllerFunctions'
import SingleNewsContainer from './SingleNewsContainer'
function TopRowRightNews({news}) {
  return (
    <div>
         <SingleNewsContainer
              news={getNews(news) }
              index={news}
          /> 
    </div>
  )
}

export default TopRowRightNews
