import React from 'react'
import About from './About'
import Work from './Work'
import Contact from './Contact'


const Navbar = () => {
  return (

    <div className='navbar'>
        <About/>
        <Work/>
        <Contact/>
    </div>
  )
}

export default Navbar