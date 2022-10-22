import React from 'react'
const LatestStories = (props) => {
  const date = new Date().toLocaleDateString();
  return (
    <>
     <div className='lateststorydiv'>
        <div className='storycontent'>
          <h1 style={{ margin:'0px 0 0 10px' }}>{props.title}</h1>
          <img src={props.img} alt=''></img>
          </div>
          <p style={{ }}>{props.content}</p>
          <h1 style={{ }}>{props.fullcontent}</h1>
          <p><strong>{date}</strong></p>
      </div>
 
    </>
  )
}

export default LatestStories