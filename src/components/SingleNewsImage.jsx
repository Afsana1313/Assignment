import React from 'react'

function SingleNewsImage({photo, title}) {
  return (
      <img src={photo } alt={title}/>
  )
}

export default SingleNewsImage