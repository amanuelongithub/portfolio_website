import React from "react";
import "./Intro.css";
import glassesimoji from "../../img/glassesimoji.png";
import Github from "../../img/github.svg";
import Githubw from "../../img/githubw.svg";
import Instagram from "../../img/instagram.svg";
import Instagramw from "../../img/instagramw.svg";
import FaceBook from "../../img/fb.svg";
import FaceBookw from "../../img/fbw.svg";
import Twitter from "../../img/twitter.svg";
import Twitterw from "../../img/twitterw.svg";
import { motion } from "framer-motion";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Programming_bro from "../../img/Hand coding.svg";
import { Link } from "react-scroll";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };
  var openbrace = "{";
  var closebrace = "}";

  return (
    <div
      className='intro'
      id='intro'
      style={{
        background: darkMode
          ? " linear-gradient(300deg, rgb(96, 149, 149) 0.00%, rgb(34, 36, 74) 50.00%)"
          : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div
        className='i-icons'
        style={{
          color: darkMode ? "white" : "",
        }}
      >
        <a href='https://github.com/amanuelongithub'>
          <img
            src={Github}
            style={{ display: darkMode ? "none" : "" }}
            alt=''
            srcSet=''
          />
        </a>

        <a href='https://github.com/amanuelongithub'>
          <img
            src={Githubw}
            style={{ display: darkMode ? "" : "none" }}
            alt=''
            srcSet=''
          />
        </a>

        <a href='http://instagram.com/amanuelgulelat2575/'>
          <img
            src={Instagram}
            style={{ display: darkMode ? "none" : "" }}
            alt=''
            srcSet=''
          />
        </a>
        <a href='http://instagram.com/amanuelgulelat2575/'>
          {" "}
          <img
            src={Instagramw}
            style={{ display: darkMode ? "" : "none" }}
            alt=''
            srcSet=''
          />
        </a>

        <a href='https://www.facebook.com/amanuelgulelatdeveloper/'>
          <img
            src={FaceBook}
            style={{ display: darkMode ? "none" : "" }}
            alt=''
            srcSet=''
          />
        </a>

        <a href='https://www.facebook.com/amanuelgulelatdeveloper/'>
          <img
            src={FaceBookw}
            style={{ display: darkMode ? "" : "none" }}
            alt=''
            srcSet=''
          />
        </a>

        <a href='https://twitter.com/amanuel_gulela'>
          <img
            src={Twitterw}
            style={{ display: darkMode ? "" : "none" }}
            alt=''
            srcSet=''
          />
        </a>

        <a href='https://twitter.com/amanuel_gulela'>
          <img
            src={Twitter}
            style={{ display: darkMode ? "none" : "" }}
            alt=''
            srcSet=''
          />
        </a>
      </div>
      <div className='i-box'>
        <div className='i-left'>
          <div className='introduce'>
            <span>Hi,I am</span>
            <span className='name'>
              <p>Amanuel&nbsp;</p>
              <p>Gulelat</p>
            </span>
            <span>
              {openbrace}Developer{closebrace}
            </span>
            <span>
              Full Stack Developer with high level of experience in Mobile App
              and website design & development. produce the Quality work.
            </span>
          </div>

          <Link to='Contact' spy={true} smooth={true}>
            <div className='button i-button'>Hire me</div>
          </Link>
        </div>

        <div className='i-right'>
          <img src={Programming_bro} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Intro;
