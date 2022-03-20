import React from 'react'
import SingleNewsContainer from './SingleNewsContainer'
import TopAdvertisement from './TopAdvertisement'
import {getNews} from '../functions/controllerFunctions'

function Sidepanel() {
  return (
    <div className='sidepanel'>
          <TopAdvertisement />
          <SingleNewsContainer
              news={getNews(12)}
              index={12}
              noRightBorder
              imageCover
          />
           <SingleNewsContainer
              news={getNews(13)}
              index={13}
              noRightBorder
          />
          {/* <SidpanelNews/> */}
    </div>
  )
}

export default Sidepanel
