import React from 'react'
import flutter from "../../img/flutter.svg";
import react from "../../img/react.svg";
import html from "../../img/html.svg";
import css from "../../img/css.svg";
import js from "../../img/javascript.svg";
import java from "../../img/java.svg";
import firebase from "../../img/firebase.svg";
import mongodb from "../../img/mongodb.svg";
import node from "../../img/nodejs.svg";
import git from "../../img/git.svg";
import illustrator from "../../img/illustrator.svg";
import photoshop from "../../img/photoshop.svg";
import xd from "../../img/xd.svg";
import "./Devtool.css"
import { useContext } from "react";
import { themeContext } from "../../Context";
const Devtool = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
 
          <div className="devtool"
          style={{
            background: darkMode ? "var(--black)" : "",
            color: darkMode ? "white" : "",
          }}
          >
          <img src={flutter} alt=""  srcset="" />
          <img src={react} alt="" srcset="" />
          <img src={html} alt="" srcset="" />
          <img src={css} alt="" srcset="" />
          <img src={js} alt="" srcset="" />
          <img src={java} alt="" srcset="" />
          <img src={mongodb} alt="" srcset="" />
          <img src={firebase} alt="" srcset="" />
          <img src={node} alt="" srcset="" />
          <img src={git} alt="" srcset="" />
          <img src={illustrator} alt="" srcset="" />
          <img src={photoshop} alt="" srcset="" />
          <img src={xd} alt="" srcset="" />
   
    </div>
  )
}

export default Devtool
