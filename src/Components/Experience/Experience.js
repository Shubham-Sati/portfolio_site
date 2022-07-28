
import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className='experience'>
        {/* first Acchievement */}
        <div className='achievement'>
            <div className='circle'>1</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        {/* second Acchievement */}
        <div className='achievement'>
            <div className='circle'>5+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        {/* third Acchievement */}
        <div className='achievement'>
            <div className='circle'>1</div>
            <span>Companies</span>
            <span>Work</span>
        </div>
    </div>
  )
}

export default Experience



