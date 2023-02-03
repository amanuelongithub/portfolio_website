import React from 'react'
import './Nav.css'
import Toggle from './Toggle/Toggle'
import Resume from '../Components/Service/Resume.pdf';
import { Link } from "react-scroll";
import { useContext } from "react";
import { themeContext } from "../Context";
const Nav = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  var open = '<';
  var close = '/>';
  return (
    <div className='n-nav'
    style={{
      background: darkMode ? "var(--black)" : "",
      color: darkMode ? "white" : "",
    }}
    >
       <div className='n-left'>
        <span
         style={{
          display: 'flex',
          gap: '5px',
          color: darkMode ? "var(--seccolor2)" : "var(--seccolor2)",
        }}>
          {open}<h5 style={{color: 'var(--maincolor)'}}>Amanuel</h5>{close}
          
          </span>
        <Toggle/>
       </div>
       
       <div className='n-right'>
        <div className="n-list">
        <ul className='navlist'>
            <li>
              <Link activeClass="active" to="intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
          <li>
          <Link to="services" spy={true} smooth={true}>
                Service
              </Link>
          </li>
          <li>
          <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
          </Link>
          </li>
          <li>
          <Link to="Contact" spy={true} smooth={true}>
          Contact
              </Link>
          </li>
        </ul>
        </div>
        <a href={Resume} download>
        <button className="button n-button"
           style={{
            color: darkMode ? "white" : "",
          }}
          >Download CV</button>
        
        </a>
          
        </div>

    </div>
  )
}

export default Nav
