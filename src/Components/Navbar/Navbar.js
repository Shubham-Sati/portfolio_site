import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <div className='navbar-left-name'>
                Shubham Sati
            </div>
            <span>toggle</span>
        </div>
        <div className='navbar-right'>
            <div className='navbar-right-list'>
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='button navbar-button'>
                Contact 
            </button>
        </div>
    </div>
  )
}

export default Navbar