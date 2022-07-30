import React from 'react';
import './Testimonial.css';
import {Swiper , SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/organized.jpeg";
import profilePic2 from "../../img/character.jpeg";
import profilePic3 from "../../img/passionate.png";
import profilePic4 from "../../img/socialPerson.jpeg";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'; 
 
function Testimonial() { 

  const clients =[
    {
      img: profilePic1,
      review:
        "I am highly organised. I always take notes, and I use a series of tools to help myself stay on top of deadlines. I like to keep a clean workspace and create a logical filing method so I am always able to find what I need. I find this increases efficiency and also helps the rest of the team stay on track.",
      
      },
    {
      img: profilePic2,
      review:
        "NCC aims at developing character, discipline, comradeship, a secular outlook and ideals of selfless service amongst young citizens like us. I believe in Prove once identity , involvement and Existence in any project.",
      
      },
    {
      img: profilePic3,
      review:
        "Highly passionate about programming and development. What fascinates me the most is the idea that whatever you we thinking can be beautifully implemented on the screen with proper skills and just a laptop and internet connection. This ability of programming to impact the world on such a large scale with your imagination and creativeness excites me to goosebumps. And thus, I steered my life in this direction. ",
    
      },
    {
      img: profilePic4,
      review:
        "I am a people person. I love meeting new people and learning about their lives and their backgrounds. I can almost always find common ground with strangers, and I like making people feel comfortable in my presence. I find this skill is especially helpful when kicking off projects with new clients.",
    
      },
  ];




  return (
    <div className='testimonial' id='Testimonials'>
        <div className='testimonial-heading'>
            <span>What Clients can </span>
            <span>Expect </span>
            <span>from me.....</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination]}
          slidesPerView = {1}
          pagination={{clickable: true}}
        >
            { clients.map((client , index) => {
                return (
                  <SwiperSlide key={index}> 
                    <div className='testimonial-swiper'>
                      <img  src={client.img} alt='' />
                      <span>{client.review}</span>
                    </div>
                  </SwiperSlide>
                )
            })}

        </Swiper>
    </div>
  )
}

export default Testimonial