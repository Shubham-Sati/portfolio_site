import React from 'react';
import './Works.css';
import Pepcoding from "../../img/pepcoding.png";
import Cognizant from "../../img/cognizant.jpeg";
import Ensino from "../../img/ensino.png";
import Graphic from "../../img/graphic.webp"; 
import { themeContext } from '../../Context';
import { useContext } from 'react';



function Works() { 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>
        {/* Left side */}
        <div className='skills-left'>
            <span style={{ color : darkMode ? 'white' : '' }}>Work and Learn under </span>
            <span>Companies ...</span>
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
                {/* The only reason I am looking for a change in my job is for a compensation  */}
                <br />
                {/* per market standards. */}
            </spane>
            <div className='blur skills-left-blur' style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* Right side */}
        <div className='works-right'>
          <div className='works-right-mainCircle'>

            {/* Graphic icon */}
            <div className='works-right-secCircle'>
              <img className='graphic' src={Graphic} alt='' />
            </div>

            {/* Pepcoding icon */}
            <div className='works-right-secCircle'>
              <img className='pepcoding' src={Pepcoding} alt='' />
            </div>

            {/* cognizant icon */}
            <div className='works-right-secCircle'>
              <img className='cognizant' src={Cognizant} alt='' />
            </div>

            {/* Ensino icon */}
            <div className='works-right-secCircle'>
              <img className='ensino' src={Ensino} alt='' />
            </div>

            {/* Facebook icon */}
            {/* <div className='works-right-secCircle'>
              <img  src={''} alt='' />
            </div> */}
            
            {/* Background blue and yellow Circle */}
            <div className='works-right-backCircle blueCircle'></div>
            <div className='works-right-backCircle yellowCircle'></div>

          </div>
        </div> 
    </div>
  )
}

export default Works