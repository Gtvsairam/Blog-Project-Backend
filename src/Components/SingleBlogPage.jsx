import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleBlogPage = (props) => {
    const mapLocation = useLocation();
    console.log(mapLocation);
    return (
    <>
      <h1 className='singleBlogTitle'>{mapLocation.state.title}</h1>
    <div className='singlrBlogpagecon'>
        <img src={mapLocation.state.img} alt=''></img>
        {/* <p>{mapLocation.state.content}</p> */}
        <p>{mapLocation.state.fullcontent}
        </p>

    </div>
    </>
  )
}

export default SingleBlogPage;