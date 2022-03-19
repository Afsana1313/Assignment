import React, {useState, useEffect} from 'react'
import { getDateTime } from '../functions/controllerFunctions'

function NewsTime({ time }) {
    const [articlePublishedDate, setArticlePublishedDate] = useState()
     const [articlePublishedTime, setArticlePublishedTime] = useState()
    useEffect(() => {
        var publishedDateTime = getDateTime(time)
        setArticlePublishedDate(publishedDateTime[0])
        setArticlePublishedTime(publishedDateTime[1])
    }, [])
  
  return (
      <time dateTime={`${articlePublishedDate} ${articlePublishedTime}`}>{articlePublishedDate}</time>
  )
}

export default NewsTime