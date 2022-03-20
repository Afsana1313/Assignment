import React from 'react'
import { getNews } from '../functions/controllerFunctions'
import SingleNewsContainer from './SingleNewsContainer'
import { Link } from "react-router-dom";
import Sidepanel from './Sidepanel';
import TopRowLeftNews from './TopRowLeftNews';


function MainNewsContainer() {
    const centerNewsList = [1,2, 3, 4, 5, 7, 8, 9, 10, 11]
  return (
      <div className='container-wrapper'>
          <div className='container'>
         
              <div className='middle-section-news'>
                  <TopRowLeftNews
                    newsIndex={3}
                    /> 
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
          <div className='sidepanel-container'>
              <Sidepanel />
          </div>
      </div>
  )
}

export default MainNewsContainer