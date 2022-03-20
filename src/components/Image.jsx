import React from 'react'

function Image({ photo, title, style }) {
  return (
    <img
      style={style}
      src={photo}
      alt={title} />
  )
}

export default Image