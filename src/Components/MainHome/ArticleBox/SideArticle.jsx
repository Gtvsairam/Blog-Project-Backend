import React from 'react'
import { NavLink } from 'react-router-dom'

const SideArticle = (props) => {
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
    <div className='sidearticle'>
        <h3 style={{marginLeft:'20px'}}>{props.title}</h3>
        <img src={props.img} alt=''></img>
        <p style={{marginLeft:'30px' }}>{props.content}</p> 
    </div>
    </NavLink>
    </>
  )
}

export default SideArticle