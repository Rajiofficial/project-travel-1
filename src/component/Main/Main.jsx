import React, { useEffect } from 'react'
import './main.css'
import img from '../../assets/maldives-1993704.jpg'
import img1 from '../../assets/long-forest-path.jpg'
import img2 from '../../assets/palace-530055.jpg'
import img3 from '../../assets/alka-jha-IFdIuzKMeUc-unsplash.jpg'
import img4 from '../../assets/architecture-3095716.jpg'
import img5 from '../../assets/beach-1236581_1920.jpg'
import img6 from '../../assets/blue-4145659.jpg'
import img7 from '../../assets/barcelona,spain.jpg'
import img8 from '../../assets/brazil.jpg'
import img9 from '../../assets/dubai.jpg'
import img10 from '../../assets/eiffel tower.jpg'
import img11 from '../../assets/winter-4697776.jpg'
import img12 from '../../assets/yellowstone park.webp'
import img13 from '../../assets/japan.jpg'
// import img14 from '../../assets/woman-3640935.jpg
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillClipboard2CheckFill} from 'react-icons/bs'
import Aos from 'aos'

const Main = () => {


  const data=[
    {
    id:1,
    imgs:img,
    dectTitle:'maldives',
    location:"india",
    grade:"wonderful beach",
    fees: "$750" ,
    description:"  The Maldives are known as the tropical paradise for beauty has separated island island has pure white sandy beaches"
   
  },
     {
    id:2,
    imgs:img1,
    dectTitle:'lang forest',
    location:"newzeland",
    grade:"long tree",
    fees: "$680" ,
    description:" A forest is a large area where trees grow close together. "
   
  },

  {
    id:3,
    imgs:img2,
    dectTitle:'london bridge',
    location:"london",
    grade:"best bridge",
    fees: "$900" ,
    description:" London Bridge is the oldest river crossing in London, bringing river and road traffic together."
  },
  {
    id:4,
    imgs:img3,
    dectTitle:'egypth mommy',
    location:"egypth",
    grade:"desert",
    fees: "$1000" ,
    description:" heart of Tahrir Square, Cairo, the Egyptian Museum is a unique building designed to host the world's oldest collection of Pharaonic art and monuments. Built on an area of 13,600 sq.."
  },
  {
    id:5,
    imgs:img4,
    dectTitle:'Architecture, Neuschwanstein, Castle image',
    location:"france",
    grade:"Architecture",
    fees: "$1200" ,
    description:" originally designed into a monumental castle with a five-storey Palas in the general style of the Wartburg Palas."
  },
  {
    id:6,
    imgs:img5,
    dectTitle:'goa beach',
    location:"india",
    grade:"paradaise beach",
    fees: "$700" ,
    description:" Goa is a paradise where water is turquoise, the beaches have soft white sands and sky changes colour of different hues. "
  },
  {
    id:7,
    imgs:img6,
    dectTitle:'blue beach surf',
    location:"australia",
    grade:"water skating",
    fees: "$1600" ,
    description:" Spectacular view of the beach from the top, yet offers sensation of clear water if you go down the steps to the beach."
  },
  {
    id:8,
    imgs:img7,
    dectTitle:'barcelona beach with architechture',
    location:"barcelona",
    grade:"A ",
    fees: "$2000" ,
    description:" Barcelona is one of the most picturesque must-visit cities in the world. It is located on the eastern coastline of Spain,"
  },
  {
    id:9,
    imgs:img8,
    dectTitle:'giant Christ',
    location:"brazil",
    grade:"A",
    fees: "$1900" ,
    description:" Rio de Janeiro is one of the most visited cities in the world, famous for its Carnival, sultry bossa nova and beaches. Christ the Redeemer   giant Christ statue . The statue is 38 metres high."
  },
  {
    id:10,
    imgs:img9,
    dectTitle:'skyscrapers',
    location:"Dubai",
    grade:"A",
    fees: "$1900" ,
    description:" Dubai is the United Arab Emirates’ tourist hotspot. A city of skyscrapers and shopping malls, tourists from all over the world come here for sunlight, adventure shopping and family fun."
  },
  {
    id:11,
    imgs:img10,
    dectTitle:'eiffel tower',
    location:"paris",
    grade:"A",
    fees: "$2100" ,
    description:"The Eiffel Tower is a wrought iron tower that stands 1,063 ft (324 m) tall. It was designed for the Exposition Universelle."
  },
  {
    id:12,
    imgs:img11,
    dectTitle:'beautiful hills',
    location:"switzerland",
    grade:"A",
    fees: "$2500" ,
    description:" Switzerland is a breathtakingly beautiful land-locked country in Central Europe with France to the west."
  },
  {
    id:13,
    imgs:img12,
    dectTitle:'yellowstone park',
    location:"america",
    grade:"A",
    fees: "2900" ,
    description:"  Yellowstone became the first national park for all to enjoy the unique hydrothermal and geologic features.."
  },
  {
    id:14,
    imgs:img13,
    dectTitle:'Osaka Castle',
    location:"japan",
    grade:"A",
    fees: "$2000" ,
    description:"  famous Japanese warrior and politician Toyotomi Hideyoshi, Osaka Castle (Ōsaka-jō) was at the time the largest and most important fortress."
  },
]

useEffect(()=>{
  Aos.init({duration:2000})
},[])
  return (
   <section  className='main container section'>
    <div className="secTitle">
      <h3 className='title'>
        most view destinations
      </h3>
    </div>

    <div className="secCountent grid">
{
  data.map((d)=>{
    return(
      <div className='singledestination' key={d.id}>
      
    
      <div className="imgdiv">
      <img  data-aos="flip-down" className='imgmal' src={d.imgs} alt="" />
      </div> 

      <div className="cardinfo">
      <h3 className='desTitle'>{d.dectTitle}</h3>
   <span className='continent flex'>
    <HiLocationMarker className='icon'/>
    <span className=' name'>{d.location}</span>
   </span>

   <div className='fees flex'>
    <div className="grade">
      <span className='grade'>{d.grade}<small className='sml'>+1</small></span>




    </div>

    <div className="price">
      <span className='fees'>{d.fees}</span>
    </div>
    </div>

    <div className="desc">
      <p>{d.description}</p>
    </div>

    <button className='btn flex'>details<BsFillClipboard2CheckFill className=''/></button>
   
</div>
      
    </div>


  
      
    )
  })
}
    </div>

   </section>
  )
}

export default Main
