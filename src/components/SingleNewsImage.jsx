import React from 'react'

function SingleNewsImage({ photo, title, style }) {
  console.log(style)
  return (
    <img
      style={style}
      src={photo}
      alt={title} />
  )
}

export default SingleNewsImage