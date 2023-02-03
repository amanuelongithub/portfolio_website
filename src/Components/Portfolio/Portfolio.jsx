import React from 'react'
import './Portfolio.css'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import FoodDelivery from '../../img/f-d.jpg'
import { useContext } from "react";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className='portfolio'
    style={{
      background: darkMode ? "var(--black)" : "",
      color: darkMode ? "white" : "",
    }}
    >
      {/* top */}
        <div className="p-top">
        <span className='p-text'>Recent Project</span>
        <span className='p-sub-text'>portfolio</span>
        </div>
      {/* bottom */}
      <div className='sizedbox'></div>
      
      <section className="sub-survice">
          <div className="items">
            <div className="sub-box"
                       style={{
                        background: darkMode ? "var(--black)" : "",
                        color: darkMode ? "white" : "",
                      }}
            
            >
                <div className="sub-img">
                    <img src="img/target.svg" alt=""/>
                </div>
                <h3 className='appname'>Food Delevery</h3>
                <p>e-commerce home food delivery online FD service as they enable the ordering of food through mobile application.</p>
         <a href='https://github.com/amanuelongithub/FoodDelivery'>
         <div 
         style={{
          color: darkMode ? "white" : "",
        }}
         className="button btngitlink" >Github link</div>

         </a>
          
            </div>

              <div className="sub-box"
                style={{
                  background: darkMode ? "var(--black)" : "",
                  color: darkMode ? "white" : "",
                }}
              >
                  <div className="sub-img">
                      {/* <img src="img/brush.svg" alt=""/> */}
                  </div>
                  <h3 className='appname'>E-shopper</h3>
                  <p
                   style={{
                    color: darkMode ? "white" : "",
                  }}
                  >it is Online shoping service, where customers directly buy producs by using smart phones , and also  there is a platform for sallers they can salle products for customsrs</p>
           <a href='https://github.com/amanuelongithub/eshopper_public'>
           <div 
           style={{
            color: darkMode ? "white" : "",
          }}
           className="button btngitlink" >Github link</div>
            
           </a>
                
                </div>
                <div className="sub-box"
                style={{
                  background: darkMode ? "var(--black)" : "",
                  color: darkMode ? "white" : "",
                }}
              >
                  <div className="sub-img">
                      {/* <img src="img/brush.svg" alt=""/> */}
                  </div>
                  <h3 className='appname'>Tour App</h3>
                  <p
                   style={{
                    color: darkMode ? "white" : "",
                  }}
                  > You want to see places out of the boring tourist brochures, feel domestic life and pure emotion of living? To meet new people, have fun, learn something new</p>
             <a href='https://github.com/amanuelongithub/flutterTest'>
             <div
             style={{
              color: darkMode ? "white" : "",
            }}
             className="button btngitlink" >Github link</div>
             </a>
                
                </div>
              <div className="sub-box"
                style={{
                  background: darkMode ? "var(--black)" : "",
                  color: darkMode ? "white" : "",
                }}
              >
                <div className="sub-img">
                    {/* <img src="img/energy.svg" alt=""> */}
                </div>
                <h3 className='appname'>Food_Delevery Admin</h3>
                <p>admin dashbord for food delivery applicatio function:- post food , generate report, manage order...</p>
        <a href='https://github.com/amanuelongithub/AdminFoodDelivery'>
        <div 
         style={{
          color: darkMode ? "white" : "",
        }}
        className="button btngitlink" >Github link</div>
        </a>
              
              </div>

           
          </div>
      </section>

    </div>
  )
}

export default Portfolio
