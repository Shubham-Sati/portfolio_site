import React from 'react';
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png"; 
import { themeContext } from '../../Context';
import { useContext } from 'react';



function Works() { 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>
        {/* Left side */}
        <div className='skills-left'>
            <span style={{ color : darkMode ? 'white' : '' }}>Works with All these</span>
            <span>Brands & Clients</span>
            <spane>
                I started off my career with Cognizant and right from day one 
                <br />
                I have had something new to learn. 
                <br /><br />
                The best thing about Cognizant is the focus on client satisfaction.
                <br />
                Being Cognizant, I am working with Centrica ( Bord Gas Energy ).
                <br />
                <br />
                The only reason I am looking for a change in my job is for a compensation 
                <br />
                per market standards.
            </spane>
            <button className='button resume-button'>
              Hire me
            </button>
            <div className='blur skills-left-blur' style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* Right side */}
        <div className='works-right'>
          <div className='works-right-mainCircle'>
            {/* upwork icon */}
            <div className='works-right-secCircle'>
              <img src={Upwork} alt='' />
            </div>

            {/* Fiverr icon */}
            <div className='works-right-secCircle'>
              <img src={Fiverr} alt='' />
            </div>

            {/* Amazon icon */}
            <div className='works-right-secCircle'>
              <img src={Amazon} alt='' />
            </div>

            {/* Shopify icon */}
            <div className='works-right-secCircle'>
              <img src={Shopify} alt='' />
            </div>

            {/* Facebook icon */}
            <div className='works-right-secCircle'>
              <img src={Facebook} alt='' />
            </div>
            
            {/* Background blue and yellow Circle */}
            <div className='works-right-backCircle blueCircle'></div>
            <div className='works-right-backCircle yellowCircle'></div>

          </div>
        </div>
    </div>
  )
}

export default Works