import React from 'react'
import Header from './Header'
import MainNewsContainer from './MainNewsContainer'
import Advertisement from './Advertisement'
import Footer from './Footer'

function FrontPage() {
  return (
    <>
      {' '}
      <Header />
      <div className="main-page-container">
        <MainNewsContainer />
        <Advertisement />
        <Footer />
      </div>
    </>
  )
}

export default FrontPage
