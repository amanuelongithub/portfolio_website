import React from 'react'
import './Experiance.css'
import { useContext } from "react";
import { themeContext } from "../../Context";

const Experiance = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className='experiance'
    style={{
      background: darkMode ? "var(--black)" : "",
      color: darkMode ? "white" : "",
    }}
    >
             <div className='sizedbox'></div>

       <h1 className='e-text'>I can do Everything you  want.</h1>
       

    <div className="cta-box" style={{marginTop: '6rem'}} >
      <div className="wrap one"
       style={{
        color: darkMode ? "black" : "",
      }}
      >
         <h3>0</h3>
         <p>Years of Experiace(new energy)</p>
   </div>
   
   <div className="wrap two"
         style={{
          color: darkMode ? "black" : "",
        }}
   >
     <h3>0</h3>
     <p>Finished Projects</p>
 </div>


 <div className="wrap three"
       style={{
        color: darkMode ? "black" : "",
      }}
 >
     <h3>1</h3>
     <p>Company</p>
 </div>

</div>
    </div>
  )
}

export default Experiance
