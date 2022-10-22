import React from 'react'
import { NavLink } from 'react-router-dom'

const LatestArticles = (props) => {
  const date = new Date().toLocaleDateString();
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
      <div className='latestArticlediv'>
        <div className='lowerBox'>
          <img src={props.img} alt=''></img>
          </div>
          <div className='contentdata'>
          <h1 style={{ margin:'0px 0 0 10px'}}>{props.title}</h1>
          <p style={{  }}>{props.content}</p>
          <p><strong>{date}</strong></p>
          {/* <hr style={{ width: '100%', margin: '5px', height: '1px', backgroundColor: 'grey' }} /> */}
          </div>
      </div>
      </NavLink>
    </>
  )
}

export default LatestArticles