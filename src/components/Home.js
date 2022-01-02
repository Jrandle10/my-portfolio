import React from 'react'
import image from "../homebackground.png"

export default function Home() {
  return (
    <main>
      <img 
      src={image} 
      alt='city background' 
      className='absolute object-cover w-full h-full' 
      />
      <section 
        className='relative flex justify-center     min-h-screen pt-12 lg:pt-64 px-8'
      >
        <h1 
          className='text-6xl text-blue-500 font-bold cursive leading-none lg:leading-snug home-name'
        >
        Welcome to Ja's Portfolio
        </h1>
      </section>
    </main>
  )
}