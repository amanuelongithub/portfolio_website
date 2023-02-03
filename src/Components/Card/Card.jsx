import React from "react";
import "./Card.css";
import { useContext } from "react";
import { themeContext } from "../../Context";


const Card = ({emoji, heading, detail, color}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span className="heading"
       style={{
        color: darkMode ? "white" : "",
      }}
      >{heading}</span>
      <span
        style={{
          color: darkMode ? "var(--txtbcolor)" : "",
        }}
      >{detail}</span>
    </div>
  );
};

export default Card;
