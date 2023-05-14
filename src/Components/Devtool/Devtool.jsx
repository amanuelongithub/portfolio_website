import React from "react";
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
import "./Devtool.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
const Devtool = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className='devtool'
      style={{
        background: darkMode ? "var(--black)" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <img src={flutter} alt='' srcSet='' />
      <img src={react} alt='' srcSet='' />
      <img src={html} alt='' srcSet='' />
      <img src={css} alt='' srcSet='' />
      <img src={js} alt='' srcSet='' />
      <img src={java} alt='' srcSet='' />
      <img src={mongodb} alt='' srcSet='' />
      <img src={firebase} alt='' srcSet='' />
      <img src={node} alt='' srcSet='' />
      <img src={git} alt='' srcSet='' />
      <img src={illustrator} alt='' srcSet='' />
      <img src={photoshop} alt='' srcSet='' />
      <img src={xd} alt='' srcSet='' />
    </div>
  );
};

export default Devtool;
