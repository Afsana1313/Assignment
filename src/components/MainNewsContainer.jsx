import React from 'react'
import { getNews } from '../functions/controllerFunctions'
import SingleNewsContainer from './SingleNewsContainer'
import TopRowNews from './TopRowNews'
import { Link } from "react-router-dom";
import Sidepanel from './Sidepanel';


function MainNewsContainer() {
    const centerNewsList = [2, 3, 4, 5, 7, 8, 9, 10, 11]
  return (
      <div className='container-wrapper'>
          <div className='container'>
          <TopRowNews
              newsLeft={3}
              newsRight={1}
          />
          <div className='middle-section-news'>
              {
                  centerNewsList.map((i, index) => <a href='#'
                  key={i}>
                  <SingleNewsContainer
                  news={getNews(i)}
                  
                  index={index}
              />
              </a>)
          } 
           </div>
          
          </div>
          <Sidepanel/>
      </div>
  )
}

export default MainNewsContainer