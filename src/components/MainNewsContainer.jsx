import React,{useEffect, useState} from 'react'
import { getSortList, getNews } from '../functions/controllerFunctions.js'
import { newsData } from '../static/newsData.js'
import SingleNewsContainer from './SingleNewsContainer.jsx'


function MainNewsContainer() {
    const [sortList, setSortList] = useState([])
    useEffect(() => {
        setSortList(getSortList())
    }, [])
    const centerNewsList = [2, 3, 4, 5, 7, 8, 9, 10, 11]
    const getProps = (index) => {
        if (index >= 0 && index < 3) return 'description'
    }
  return (
      <div className='container'>
           {
              centerNewsList.map((i, index) => <SingleNewsContainer
                  news={getNews(i)}
                  key={i}
                  index={index}
              />)
          } 
          {/* <SingleNewsContainer
              news={getNews(2)}
              description
          />
          <SingleNewsContainer
              news={getNews(3)}
              description
          />
          <SingleNewsContainer
              news={getNews(4)}
              description
          />
          <SingleNewsContainer
                  news={getNews(5)}
          />
          <SingleNewsContainer
                  news={getNews(7)}
          />
          <SingleNewsContainer
                  news={getNews(8)}
          />
           <SingleNewsContainer
                  news={getNews(9)}
          />
           <SingleNewsContainer
                  news={getNews(8)}
          />
           <SingleNewsContainer
                  news={getNews(8)}
        /> */}
    </div>
  )
}

export default MainNewsContainer