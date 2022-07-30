import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

function Footer() {
  return (
    <div className='footer'>
        <img src={Wave} alt='' style={{width: '100%'}} />
        <div className='footer-content'>
            <span>shubham.sati8b@gmail.com</span>
            <div className='footer-icons'>
                <Insta color='black' size='3rem' />
                <Facebook color='black' size='3rem' />
                <Github color='black' size='3rem' />
            </div>
        </div>
    </div>
  )
}

export default Footer