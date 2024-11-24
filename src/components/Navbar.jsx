import React, { useState } from 'react';
import logo from '../pics/logo.png';
// to move to different webpages
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Destination from '../pages/Destination';
import Hotel from '../pages/Hotel';
import Dining from '../pages/Dining';
import Membership from '../pages/Membership';
import More from '../pages/More';


function Navbar() {
  
  return (
    <nav className={`navbar-container sticky top-0 z-50 flex text-center justify-between   max-w-full bg-colordark text-colorlight`}>

        <div className="container mx-auto flex justify-between items-center"> 
          <div >
              <img src={logo} alt="logo" className='max-h-20 ml-7 rounded-full border-x-copperrose border-2 hover:border-copperrose' />
              
          </div>
          <div className="flex-grow">
              <ul className='flex justify-center gap-16 text-lg items-end mt-6'>

                <li>   <Link to="/Home" className={ 'hover:text-colormedium text-lightviolet font-medium text-lg '}>HOME</Link></li>
                <li>   <Link to="/Destination" className={ 'hover:text-colormedium text-lightviolet font-medium text-lg '}>DESTINATION</Link></li>
                <li>  <Link to="/hotel" className={ 'hover:text-colormedium  text-lightviolet font-medium text-lg'}>HOTEL</Link></li>
                <li>  <Link to="/Dining" className={ 'hover:text-colormedium  text-lightviolet font-medium text-lg'}>DINING</Link></li>
                <li>  <Link to="/Membership" className={'hover:text-colormedium  text-lightviolet font-medium text-lg'}>MEMBERSHIP</Link></li>
                <li>  <Link to="/More" className={'hover:text-colormedium  text-lightviolet font-medium text-lg'}>MORE</Link></li>
              </ul>
          </div>
          <div className='flex items-start mt-6'> {/* Flex container for buttons */}
            <button className={' hover:text-newpinkviolet text-lightviolet max-h-10 bg-footer border-2 p-2 rounded-md font-normal'}>
              BOOK-STAY
            </button>
            <button className="ml-5  hover:text-newpinkviolet text-lightviolet bg-footer max-h-10  border-2 p-2 rounded-md font-normal"> {/* Adjust margin between buttons */}
            LOGIN-IN
            </button>
          </div>

        </div>
      
    </nav>
  )
}

export default Navbar;
