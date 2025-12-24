import React from 'react'
import me from '../assets/me.jpg'
const Hero = () => {
  return (
    <div className='flex flex-col items-center p-10'>
      <img src={me} alt="" className='rounded-full h-40 mb-10 font-extrabold' />
      <h1 className='text-white text-5xl'>I'm Vishal Gautam, frontend developer</h1>
      <p className='text-white mt-6 text-2xl text-center'>Frontend developer based in India, currently pursuing university studies. I specialize in creating user-friendly and visually appealing websites, combining practical skills with academic knowledge.</p>
    </div>
  )
}

export default Hero
