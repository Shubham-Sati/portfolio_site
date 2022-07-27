import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Leetcode from '../../img/leetcode.jpeg';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';




function Intro() {
  return (
    <div className='intro'>
        <div className='intro-left'>
            <div className='intro-left-name'>
                <span>Hy! I Am </span>
                <span>Shubham Sati </span>
                <span>Frontend Developer with high level of experience in web designing and development, productive and Quality work.</span>
            </div>
            <button className='button intro-left-button'>
                Hire me
            </button>
            <div className='intro-left-icons'>
              <a href='https://github.com/Shubham-Sati/portfolio_site'>
                  <img src={Github} alt='' />
              </a>
              <a href='https://www.linkedin.com/in/shubham-sati19/'>
                  <img src={LinkedIn} alt='' />
              </a>
              <a href=''>
                  <img src={Instagram} alt='' />
              </a>
            </div>
        </div>
        <div className='intro-right'>
          <img src={Vector1} alt='' />
          <img src={Vector2} alt='' />
          <img src={boy} alt='' />
          <img src={glassesimoji} alt='' />

          <div style={{top:'-4%',left:'68%'}}>
              <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
          </div>
          <div style={{top:'18rem',left:'0rem'}}>
              <FloatingDiv image={thumbup} text1='Best Design' text2='Award'/>
          </div>

          {/* blur divs */}
          <div className='blur' style={{background: "rgb(236 210 255)"}}>
          </div>
          <div className='blur' style={{background: '#C1F5FF', top: '17rem', left: '-9rem', width: '21rem', height: '11rem'}}>
          </div>

        </div>
    </div>
  )
}

export default Intro