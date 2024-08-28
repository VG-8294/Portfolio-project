import React from 'react'
import logo from '../assets/coding.png'
const Navbar = () => {
  return (
    <div className='Navbar flex justify-between items-center p-5'>
      <img src={logo} alt="" className='h-16'/>
      <ul className='text-white flex gap-8 cursor-pointer'>
        <li>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      {/* <div className="nav-connect w-40 text-center cursor-pointer bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 text-white py-4 px-4 rounded-3xl transition-transform duration-500 ease-out hover:scale-110">Connect with me</div> */}
    </div>
  )
}

export default Navbar
