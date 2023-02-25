import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='app_navbar'>
        <div className='navbar flex justify-around my-2 mx-5'>
            <h1 className='text-green-500'>Todo</h1>
            <ul>
               <button className='w-20 h-10 bg-teal-500 rounded-xl'>Login</button>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar