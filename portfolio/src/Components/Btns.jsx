import React from 'react'

const Btns = () => {
  return (
    <div className='flex justify-center gap-8'>
      <div className="nav-connect w-40 text-center cursor-pointer bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 text-white py-4 px-4 rounded-3xl transition-transform duration-500 ease-out border-transparent hover:border-white">Connect with me</div>
      <div className="nav-connect w-40 text-center cursor-pointer border border-white text-white py-4 px-4 rounded-3xl transition-transform duration-500 ease-out hover:border-violet-600 bg-transparent">
        My Resume
      </div>
    </div>
  )
}

export default Btns
