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
          
    </div>
  )
}

export default MainNewsContainer