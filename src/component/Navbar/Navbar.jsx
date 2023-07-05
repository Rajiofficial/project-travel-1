import React, { useState } from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RxDragHandleDots2} from 'react-icons/rx'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [active,setActive]=useState('navBar')

    const shownav=()=>{
        setActive('navBar activeNavbar')
    }
    const removenav=()=>{
        setActive('navBar')
    }
  return (
    <section className='navbarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
            
            <Link href="" className='logo flex'>
                <h1><MdOutlineTravelExplore className='icon'/>  Travel</h1>
                </Link>
        </div>

        <div className={active}>
            <ul className='navlists flex'>
                <li className="navItem">
                    <Link href="" className='navLink'>home</Link>
                </li>
                <li className="navItem">
                <Link href="" className='navLink'>package</Link>
                </li>
                <li className="navItem">
                <Link href="" className='navLink'>shop</Link>
                </li>
                <li className="navItem">
                <Link href="" className='navLink'>about</Link>
                </li>
                <li className="navItem">
                <Link href="" className='navLink'>page</Link>
                </li>

                <li className="navItem">
                <Link href="" className='navLink'>news</Link>
                </li>

                <li className="navItem">
                    <a href="" className='navLink'>contact</a>
                </li>

                    <button className='btn'>BOOK NOW</button>

            </ul>

            <div onClick={removenav} className="closenavbar">
                <AiFillCloseCircle className='icon'/>
            </div>

        </div>

        <div onClick={shownav} className="toggleNavbar">
            <RxDragHandleDots2 className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar
