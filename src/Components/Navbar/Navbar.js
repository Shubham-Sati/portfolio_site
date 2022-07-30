import React from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <div className='navbar-left-name'>
                Shubham Sati
            </div>
            <Toggle />
        </div>
        <div className='navbar-right'>
            <div className='navbar-right-list'>
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>

                    <Link spy={true} to='Skills' smooth={true} >
                        <li>Skills</li>
                    </Link>

                    <Link spy={true} to='Experience' smooth={true} >
                        <li>Experience</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true} >
                        <li>Portfolio</li>
                    </Link>

                    <Link spy={true} to='Testimonials' smooth={true} >
                        <li>Testimonials</li>
                    </Link> 
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