import React from "react";
import "./About.css";
import Man from "../../img/Hand coding-bro.svg";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className='about'
      style={{
        background: darkMode ? "var(--black)" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {/* top */}
      <div className='top'>
        <span id='abt'>Biography.</span>
      </div>
      {/* center */}
      <div
        className='container'
        style={{
          background: darkMode ? "var(--black)" : "",
          color: darkMode ? "white" : "",
        }}
      >
        {/* left */}
        <div className='left'>
          <img src={Man} id='p-img' alt='' />
        </div>
        {/* right */}
        <div className='right'>
          <div className='txt'>Hello,</div>
          <div
            className='des'
            style={{
              color: darkMode ? "var(--txtbcolor)" : "",
            }}
          >
            Currently working full time as a graphic designer at Arc
            Advertisment company and for two companies on mobile applications
            development.
            <br />
            My interests mostly includes Mobile & Web Application development
            Web Design and programme matter.
            <br />
            <br />
            In my free time, i like communicating with people, travling reading
            and play game. Feel free to react out to my social channel or ping
            me using form bellow
          </div>
          <Link to='contact' spy={true} smooth={true}>
            <div className='button a-button'>Contact Me</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
