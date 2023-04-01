import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { AiOutlineBars } from 'react-icons/ai';


import "./css/navbar.css";
function Navbar() {
  return (
    <div className='header'>
        <div className='header_left'>
            <div className='header_logo'>
            <img src="https://minio.codingblocks.com/hiring-blocks/ae43996d-d603-4a08-a50c-9be6a3cf6222download1.jpeg"></img>
            </div>
            <div className='logo_name'>WASSERSTOFF</div>
        <div className='header_search'>
        <input type="text"></input>
        <AiOutlineSearch/>
            
            </div>
        </div>
        <div className='header_right'>
        
        <div className='name_right'>Statistics</div>
        <div className='name_right'>Overview</div>
          <div className='name_right'>Dashboard</div>
          <div className='name_right'>Analytics</div>
          <div className='sign_up'><RxPerson/></div>
          <div className='bars'><AiOutlineBars/></div>
        </div>
        
        
    </div>
  )
}

export default Navbar
