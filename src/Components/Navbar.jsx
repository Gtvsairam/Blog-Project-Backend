import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Tourism'>Tourism</Link></li>
      <li><Link to='/Tollywood'>Tollywood</Link></li>
      <li><Link to='/Hollywood'>Hollywood</Link></li>
      <li><Link to='/Technology'>Technology</Link></li>
      <li><Link to='/Fitness'>Fitness</Link></li>
      <li><Link to='/Food'>Food</Link></li>
      </ul>
    </div>
    {/* <hr style={{width:'95%',height:'1px',backgroundColor:'grey'}}/> */}
    </>
    
  )
}

export default Navbar;