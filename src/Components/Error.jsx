import React from 'react'
import Header from '../Layout/Header'
import "../Style/Carousel.css"

const Error = () => {
  return (
    // <div className='error'>Error 404</div>
    <Header>
      <div className='Products-header' >
        <h2 style={{fontWeight:"400",textAlign:"center"}}>Error,wrong page visited</h2>
      </div>
    </Header>
  )
}

export default Error