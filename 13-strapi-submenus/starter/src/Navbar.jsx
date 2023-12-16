import React from 'react'
import {useGlobalContext} from './Context'
import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';

const Navbar = () => {
  const{openSidebar,setpageId}=useGlobalContext();

  const handleSubmenu =(e)=>{
    
  }
  
  return (
    <nav onMouseOver={handleSubmenu} >
      <div className="nav-center">
      <h3 className='logo'>strapi</h3>
      <button className='toggle-btn' onClick={openSidebar}> <FaBars/></button>
      <NavLinks/>
      </div>
    </nav>

  )
} 

export default Navbar 