import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[100px] bg-black/50 z-20 w-screen text-gray-400 font-semibold fixed top-0 flex gap-10 justify-center items-center'>
        <p className='text-red-500'>Home</p>
        <p>Services</p>
        <p>Shop</p>
        <p>Prices</p>
        <p>Testimonials</p>
        <p>Contact</p>
    </div>
  )
}

export default Navbar