import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full md:w-[1400px] px-4 flex justify-between items-center pt-5'>
        <h3 className='uppercase text-xl lg:text-2xl font-bold text-primary'>
            Prime <span className='text-secondary'>Shoes</span>
        </h3>    

        <ul className=''>
            <li className='li'> <a href="/">Home</a></li>
            <li className='li'><a href="/productos">Productos</a></li>
        </ul>
    </nav>
  )
}

export default Navbar