import React from 'react'
import { NavLink } from 'react-router-dom';

const LatestPost = (props) => {
  return (
    <>
       <NavLink 
      state={{
        title:props.title,
        img:props.img,
        content:props.content,
        fullcontent:props.fullcontent
      }}
      to='/blog'
      >
      <div className='LatestPostContainer'>
      <div className='postTitle'>
      <h1 style={{margin:'0px 0 0 10px'}}>{props.title}</h1>
      </div>
        <img src={props.img} alt=''></img>
        <p style={{}}>{props.content}</p>
        <hr style={{width:'100%',margin:'5px', height:'1px',backgroundColor:'grey'}}/>
      </div>
      </NavLink>
    </>

  )
}

export default LatestPost;