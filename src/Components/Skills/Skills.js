
import React from 'react'
import './Skills.css';
import Card from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './resume8b.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';

 
function Skills() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='skills' id='Skills'>
        {/* Left side */}

        <div className='skills-left'>
            <span style={{ color : darkMode ? 'white' : '' }} >My Awesome</span>
            <span>Skills & Achievements</span>
            <spane>
                These are some Skills I gained in my Academic Year.
                <br />
                Still Learning and soon going to add More and More.....
            </spane>
            <a href={ Resume } download>
              <button className='button resume-button'>
                Download Resume
              </button>
            </a>
            <div className='blur skills-left-blur' style={{background: "#ABF1FF94"}}></div>
        </div>


  
        {/* right side */}
        <div className='skills-right'>

            {/* first card */}
            <div style={{left: '14rem', top:''}}>
              <Card 
                  emoji = {HeartEmoji}
                  heading = {'Certificates'}
                  detail = {'Udemy Web Developer , Ensino Web Development , NCC "C" '}
              />
            </div>

            {/* second card */}
            <div style={{left: '-4rem', top:'12rem'}}>
              <Card 
                  emoji = {Glasses}
                  heading = {'Developer'}
                  detail = {' HTML , CSS , JavaScript , Java , React JS, Data Structures , Algorithms '}
              />
            </div>

            {/* third card */}
            <div style={{top: '19rem' , left: '12rem'}}>
              <Card 
                  emoji = {Humble}
                  heading = {'NCC'}
                  detail = {'The National Cadet Corps(NCC), explorative inquisitiveness , determination, comradeship , leadership '}
              />
            </div>

          <div className='blur skills-right-blur' style={{ background: '#var(--purple)' }}></div>
        </div>
    </div>
  )
}

export default Skills

