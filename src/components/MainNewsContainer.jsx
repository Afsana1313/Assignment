import React,{useEffect, useState} from 'react'
import { getSortList, getNews } from '../functions/controllerFunctions.js'
import { newsData } from '../static/newsData.js'
import SingleNewsContainer from './SingleNewsContainer.jsx'


function MainNewsContainer() {
    const [sortList, setSortList] = useState([])
    useEffect(() => {
        setSortList(getSortList())
    },[])
  return (
      <div className='container'>
          {
              sortList.map((i) => <SingleNewsContainer
                  news={getNews(i)}
                  key={i}
              />)
          }
    </div>
  )
}

export default MainNewsContainer