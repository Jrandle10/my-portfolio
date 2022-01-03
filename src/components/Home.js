import React from 'react'
import image from "../homebackground.png"

export default function Home() {
  return (
    <main>
      <img 
      src={image} 
      alt='laptop background' 
      className='sm:absolute sm:object-cover sm:w-full sm:h-full absolute w-full' 
      />
      <section 
        className='sm:relative  sm:justify-center     sm:min-h-screen sm:pt-12 lg:pt-64 px-8 relative'
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