import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
  return (
    <header className=' nav bg-blue-800 min-w-screen'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink 
            to="/" 
            className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest' 
          >
            Home
          </NavLink>
          <NavLink 
            to="/post"
            className='inline-flex items-center py-3 px-3 my-6 rounded text-pink-300 hover:text-green-800'
          >
            Blog Post
          </NavLink>
          <NavLink 
            to="/project"
            className='inline-flex items-center py-3 px-3 my-6 rounded text-pink-300 hover:text-green-800'
          >
            Projects
          </NavLink>
          <NavLink 
            to="/about"
            className='inline-flex items-center py-3 px-3 my-6 rounded text-pink-300 hover:text-green-800'
          >
            About Me!
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon 
            url='https://www.linkedin.com/in/jalielrandle' 
            className='mr-4' 
            target='_blank' 
            fgColor='#fff'
            style={{height: 35, width: 35}}
          />
          <SocialIcon
            url='https://github.com/Jrandle10'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{height: 35, width: 35}}
          />
        </div>
      </div>
    </header>
  )
  
}