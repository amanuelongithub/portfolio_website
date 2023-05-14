import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

// import { themeContext } from "../../Context";
import Resume from "./Resume.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <div
      className='services'
      style={{
        background: darkMode ? "var(--black)" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {/* left */}

      <div className='left'>
        <div className='awesome'>
          {/* dark mode */}
          <span>My Awesome</span>
          <span>services</span>
          <span
            style={{
              color: darkMode ? "white" : "",
            }}
          >
            Design, Front & Backend developement for web and mobile
            applications.
          </span>

          <a href={Resume} download>
            <button
              className='button s-button'
              style={{
                color: darkMode ? "white" : "",
              }}
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
      {/* right */}

      <div className='s-right'>
        {/* first card */}
        <div className='s-item-1'>
          <motion.Card
            initial={{ left: "-36%" }}
            whileInView={{ right: "-24%" }}
            transition={transition}
          >
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            />
          </motion.Card>
        </div>
        {/* second card */}
        <div className='s-item-2'>
          <motion.div
            initial={{ right: "5rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
          >
            <Card
              emoji={Glasses}
              heading={"Frontend"}
              detail={"Flutter, HtML, CSS, js, React, Java, Vb"}
            />
          </motion.div>
        </div>

        {/* 3rd card */}
        <div className='s-item-3'>
          <motion.div
            initial={{ right: "5rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
          >
            <Card
              emoji={Humble}
              heading={"Backend"}
              detail={"Firebase, Nodejs, SQL, MongoDB"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
