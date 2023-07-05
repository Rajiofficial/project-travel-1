import React, { useEffect } from 'react'
import './home.css'
import video1 from '../../videos/video (2160p).mp4'
import {FaSearchLocation} from 'react-icons/fa'
import {FaFilter} from 'react-icons/fa'
import {TfiFacebook} from 'react-icons/tfi'
import {BsInstagram} from 'react-icons/bs'
import {SiTripadvisor} from 'react-icons/si'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {TbApps} from 'react-icons/tb'
import Aos from 'aos'




const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section   className='home'>
      <div className="overlay"></div>
      <video src={video1} muted autoPlay loop type='video/mp4'></video>
    <div   className="homeContent container">
      <div className="textDiv">
        <span className="smalltext">
          our package</span>

          <h1  className='homeTitle'>
            search your hollydays
          </h1>
      </div>
      <div className="cardDiv grid">

        <div className="destinationInput">
          <label htmlFor='city'>   
            serach your destination
          </label>
          <div className="input flex">
         
          <input type='text' placeholder='enter name here.........'/>
          <FaSearchLocation/>
          </div>
        </div>

        <div className="dateInput">
          <label htmlFor='date'>
            serach your date
          </label>
          <div className="input flex">
          <input type='date' />
          
          </div>
        </div>
        

       
        <div className="priceInput">
          <div className='lable_total flex'>
            <label htmlFor='price'> max price</label>
          <h3 className='total'>$5000</h3>
          </div>
          <div className="input flex">
          <input type='range' max="5000" min='1000' />
          
          </div>
        </div>

<div className="searchObtion flex">
  <FaFilter className='icon'/> <span>more filters</span>
</div>

      </div>

      <div className="homefooterIcons">
        <div className="rightIcons">
   <TfiFacebook className='icon'/>
   <BsInstagram className='icon'/>
   <SiTripadvisor className='icon'/>
        </div>

        <div className="leftIcons">
<AiOutlineUnorderedList  className='icon'/>
<TbApps className='icon'/>

       </div>

      </div>
    </div>
    </section>
  )
}

export default Home