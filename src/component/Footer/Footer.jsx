import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../videos/pexels_videos_2257010 (2160p).mp4'
import {IoIosSend} from 'react-icons/io'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      <div className="videoDiv">
      <video className='videos' src={video2} muted autoPlay loop type='video/mp4'></video>
      
<div className="setContent container">
  <div className="contactDiv flex">
    <div data-aos="zoom-in-up" className="text">
      <small className='sml'>KEEP IN TOUCH</small>
      <h2 className='h'>tarvel with us</h2>
    </div>
    <div data-aos="zoom-in-up" className="inputDiv flex">
      <div className='inp'>
      <input className='inputs' type="text" placeholder='enter Email Address' />
     
      <button type='submit' className="btns flex">send<IoIosSend/></button>
      <div className="footerCard flex">
    <div className="footerIntro flex">
      <div className="logoDiv">
        
      </div>
    </div>
  </div>
  <div  data-aos="zoom-in-down" className="footerparagraph">
  <a href="" className='logo flex'>
           <MdTravelExplore className='icon'/> travel.
          </a>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem.
   
    <div className="footersocials">
    <AiFillFacebook />
    <AiFillTwitterCircle/>
    <AiFillInstagram/>

  </div>
  <div className="footerLinks">
    <div className="linkgroup">
      <span>our agency</span>
    </div>
    <div>
    <li><FiChevronRight className='icon'/> services</li>
    <li><FiChevronRight className='icon'/> insurence</li>
    <li><FiChevronRight className='icon'/> agency</li>
    <li><FiChevronRight className='icon'/> tourisam</li>
    </div>


  </div>

  </div>

 

      </div>
      
    </div>
    
   
  </div>


 
</div>
</div>
    </section>
  )
}

export default Footer
