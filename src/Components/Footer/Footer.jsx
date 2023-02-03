import React from "react";
import "./Footer.css";
import Wave from "react-wavify";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='f-container'>
        <Wave
          fill='var(--seccolor)'
          paused={false}
          options={{
            height: 0,
            amplitude: 40,
            speed: 0.2,
            points: 4,
          }}
        />
      </div>
      <div className='f-content'>
        <span>gulilatamanuel@gmail.com</span>
        <div className='f-icons'>
          <a href='http://instagram.com/amanuelgulelat2575/'>
            <Insta color='white' size={"3rem"} />
          </a>
          <a href='https://www.facebook.com/amanuelgulelatdeveloper/'>
            <Facebook color='white' size={"3rem"} />
          </a>
          <a href='https://github.com/amanuelongithub'>
            <Gitub color='white' size={"3rem"} />
          </a>

          <a href='https://twitter.com/amanuel_gulela'>
            <Twitter color='white' size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
