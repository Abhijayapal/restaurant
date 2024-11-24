import React from 'react'
import logo from '../pics/newsletter.jpg'
import { Link } from 'react-router-dom';
import logoimg from '../pics/logo.png';

import con1 from '../pics/connections/1.svg'
import con2 from '../pics/connections/2.svg'
import con3 from '../pics/connections/3.svg'
import con4 from '../pics/connections/4.svg'
import con5 from '../pics/connections/5.svg'

import b1 from '../pics/brands/1.svg'
import b2 from '../pics/brands/2.svg'
import b3 from '../pics/brands/3.svg'
import b4 from '../pics/brands/4.svg'
import b5 from '../pics/brands/5.svg'
import b6 from '../pics/brands/6.svg'
import b7 from '../pics/brands/7.svg'
import b8 from '../pics/brands/8.svg'


function Footer() {
  return (
    <>
      <div className='bg-colordark text-last1 '>
        <div className='flex '>
            <div className='w-96 h-96 mt-14 ml-20 ' >
                <img src={logo} alt="" className='rounded-3xl shadow-2xl' ></img>

            </div>
            <div className='flex flex-col mt-20 ml-20 '>
                <div >
                    <p className='p-2'>Get the latest updates</p>
                    <p  className='p-2'>Sign up for newsletter</p>
                </div>

                {/* <!-- form --> */}
                <form  >
                    <input placeholder="Email" className='rounded-xl'/>
                    <button  className=' border-2 bg-colordark m-4 rounded-xl p-2'>
                        Send

                    </button>
                </form>

                <div >
                    by signing to our newsltter you agree to get
                    <a href="#" >Terms and services</a>
                    and
                    <a href="#" >privacy policy</a>
                </div>

            </div>
          </div>
          <div>
            <h1 className='text-2xl ml-10 text-center text-textcolorwhite'>Our brands</h1>
          </div>
          <div className='flex gap-11 ml-10'>
            <img src={b1} alt="" />
            <img src={b2} alt="" />
            <img src={b3} alt="" />
            <img src={b4} alt="" />
            <img src={b5} alt="" />
            <img src={b6} alt="" />
            <img src={b7} alt="" />
            <img src={b8} alt="" />
          </div>
      </div>
      <hr className='border-t-last2' />
      {/* ======================================================================================================= */}
      <div className='bg-colordark' >
          <footer className='flex'>
              <div className='' >
                  <div >  
                          <img className='ml-16 rounded-full' src={logoimg}/>
                  </div>
                  
                  <div className='flex gap-8 ml-16' >
                          <img src={con1} alt="" className='h-4 w-4'/>
                          <img src={con2} alt="" className='h-4 w-4'/>
                          <img src={con3} alt="" className='h-4 w-4'/>
                          <img src={con4} alt="" className='h-4 w-4'/>
                          <img src={con5} alt="" className='h-4 w-4'/>
                  </div>
              </div>
                {/* <!-- right box --> */}
              <div className='flex gap-20 ml-96 items-end text-centre' >

                  {/* <!-- for different colums-different grids --> */}

                          {/* <!-- column 1 --> */}
                  <div className='text-colorgold' >
                              <div className='text-lg text-last2'>
                              QUICK LINKS
                              </div>
                              <ul >
                                  <li>
                                      <a href="#" >Wellness</a>
                                  </li>
                                  <li>
                                      <a href="#" >Timeless weddings</a>
                                  </li>
                                  <li>
                                      <a href="#" >Event Venues</a>
                                  </li>
                                  <li>
                                      <a href="#" >Empire Magazine</a>
                                  </li>
                                  <li>
                                      <a href="#" >Site Map</a>
                                  </li>
                                  <li>
                                      <a href="#" >Contact Us</a>
                                  </li>
                              </ul>
                  </div>
                          {/* <!-- column 2 --> */}
                  <div className='text-colorgold'>
                              <div className='text-last2 text-lg'>
                                  Quick Start
                              </div>
                              <ul>
                                  <li>
                                      <a href="#" >About Empire</a>
                                  </li>
                                  <li>
                                      <a href="#" >Holidays</a>
                                  </li>
                                  <li>
                                      <a href="#" >Offers</a>
                                  </li>
                                  <li>
                                      <a href="#" >Gifting</a>
                                  </li>
                                  <li>
                                      <a href="#" >Neupaas</a>
                                  </li>
                                  <li>
                                      <a href="#" >Epicure</a>
                                  </li>
                                  
                              </ul>
                  </div>


              </div>
          </footer>
           <hr className='m-16 border-3 border-t-last2' />
          <div className='ml-24 mb-5 text-colorgold' >
           @2024 The Indian Hotels Company Limited. All Rights Reserved.
          </div>
      </div>
      
    </>
  )
}

export default Footer
