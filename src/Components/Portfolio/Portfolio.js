import React from 'react';
import './Portfolio.css';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Amazon_Clone from '../../img/Amazon_Clone.png';
import Excel_Clone from '../../img/Excel_Clone.png';
import Netflix_Clone from '../../img/Netflix_Clone.png';
import Sorting_Visualizer from '../../img/Sorting_Visualizer.png';
import Slack from '../../img/Slack.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';



function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
        {/* Heading */}
        <span style={{ color : darkMode ? 'white' : '' }} >Recent Projects</span>
        <span>Portfolio</span>
        <p> Slide Right → click to see  </p>
        
        {/* Slider */}
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
        >
            <SwiperSlide>
              <a href='https://shubham-sati.github.io/Excel_Clone/' target="_blank" rel="noopener noreferrer">  
                <img  src={Excel_Clone} alt=''/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href='https://netflix-clone-67476.web.app' target="_blank" rel="noopener noreferrer">
                <img src={Netflix_Clone} alt=''/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href='https://slack-clone-99f24.web.app' target="_blank" rel="noopener noreferrer">
                <img src={Slack} alt=''/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href='https://clone-dd7e5.web.app' target="_blank" rel="noopener noreferrer">
                <img src={Amazon_Clone} alt=''/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href='https://shubham-sati.github.io/Sorting-Visualizer/' target="_blank" rel="noopener noreferrer">
                <img src={Sorting_Visualizer} alt=''/>
              </a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio


