import { useState, useRef } from "react";
import {logo, menu} from '../../assets'
import './Header.css'
// Responsive header with a mini modal mobile menu. Click event listener to close modal after outside clicks.

const Header = () => {  
  const [slidingMenu, setSlidingMenu] = useState('');
  const menuRef = useRef(null);

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {      
      setSlidingMenu('');     
      document.removeEventListener("click", handleClickOutside, true);                 
    }
  };

  const handleMenu = () => {
    setSlidingMenu((prevState) => {
      let newVal;
      if(prevState === ''){        
        newVal= 'show';           
        document.addEventListener("click", handleClickOutside, true);
      }else{
        newVal='';              
      }
      return newVal;
    });    
  };
    
  return (
    <>
      <nav className='app__header'>
        <div className='app__header-logo'>
          <img src={logo} alt= 'HooBank Logo'/>
        </div>
        {/* Links are just for reference. They don't point anywhere yet. */}        
        <ul className='app__header-navlinks'>
          <li className='app__header-link'> <a href="404"> Home</a> </li>
          <li className='app__header-link'> <a href="404"> About Us</a> </li>
          <li className='app__header-link'> <a href="404"> Features</a> </li>
          <li className='app__header-link'> <a href="404"> Solution</a> </li>
        </ul>
        {/* small screen */}
        <div className='app__header-mobile' >
          <img id="trouble" src={menu} alt= 'Menu button' className= 'mobile__hamburger' onClick={handleMenu} ref={menuRef} />          
        </div>
      </nav>
      {/* Sliding Menu on one side of the screen */}      
      <ul id='mobile__hamburger--menu' className={slidingMenu} >
        <li className='mobile__hamburger-link'> <a href="404" style={{fontSize:'18px'}}> Home</a> </li>
        <li className='mobile__hamburger-link'> <a href="404" style={{fontSize:'18px'}}> About Us</a> </li>
        <li className='mobile__hamburger-link'> <a href="404" style={{fontSize:'18px'}}> Features</a> </li>
        <li className='mobile__hamburger-link'> <a href="404" style={{fontSize:'18px'}}> Solution</a> </li>
      </ul>  
    </>    
  )
}

export default Header


