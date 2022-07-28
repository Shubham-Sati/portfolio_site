
import React from 'react'
import './Projects.css';
import Card from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './resume8b.pdf';

function Projects() {
  return (
    <div className='projects'>
        {/* Left side */}

        <div className='projects-left'>
            <span>My Awesome</span>
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
            <div className='blur projects-left-blur' style={{background: "#ABF1FF94"}}></div>
        </div>



        {/* right side */}
        <div className='projects-right'>

            {/* first card */}
            <div style={{left: '14rem', top:''}}>
              <Card 
                  emoji = {HeartEmoji}
                  heading = {'Certificates'}
                  detail = {'Udemy Web Developer , NCC "C" , Ensino Web Development '}
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

          <div className='blur projects-right-blur' style={{ background: '#var(--purple)' }}></div>
        </div>
    </div>
  )
}

export default Projects

