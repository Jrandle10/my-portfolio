import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  return (
    <header className=' bg-blue-800 -mr-5'>
      <div className='sm:container sm:mx-auto sm:flex sm:justify-between flex justify-between container h-20 ml-1  '>
        <nav className='sm:flex flex space-x-2 '>
          <NavLink 
            to="/" 
            className='sm:inflex-flex sm:items-center sm:py-6 sm:px-3 sm:mr-4 text-red-100 hover:text-green-800 sm:text-4xl sm:font-bold cursive sm:tracking-widest text-3xl flex items-center' 
          >
            Home
          </NavLink>
          <NavLink 
            to="/post"
            className='sm:inline-flex sm:items-center sm:py-3 sm:px-3 sm:my-6 sm:rounded rounded     text-pink-300 hover:text-green-800 flex items-center'
          >
            Blog Post
          </NavLink>
          <NavLink 
            to="/project"
            className='sm:inline-flex sm:items-center sm:py-3 sm:px-3 sm:my-6 rounded text-pink-300 hover:text-green-800 flex items-center' 
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about"
            className='sm:inline-flex sm:items-center sm:py-3 sm:px-3 sm:my-6 rounded text-pink-300 hover:text-green-800 flex items-center'
          >
            About Me!
          </NavLink>
        </nav>
        <div className='sm:inline-flex sm:py-3 sm:px-3 sm:my-6 flex items-center mr-8 ' >
          <SocialIcon 
            url='https://www.linkedin.com/in/jalielrandle' 
            className='mr-4' 
            target='_blank' 
            fgColor='#fff'
            style={{height: 30, width: 30}}
          />
          <SocialIcon
            url='https://github.com/Jrandle10'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{height: 30, width: 30}}
          />
        </div>
      </div>
    </header>
  )
  
}