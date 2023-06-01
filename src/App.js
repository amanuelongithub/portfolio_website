import "./App.css";
import "./font/Foundry-Font.ttf";
import "./font/HandoSoft-Medium.ttf";
import Nav from "./Components/Nav";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Service from "./Components/Service/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Experiance from "./Components/Experiance/Experiance";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Devtool from "./Components/Devtool/Devtool";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const header = document.querySelector(".n-nav");
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <div
      className='App'
      style={{
        background: darkMode ? "var(--black)" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Nav />
      <Intro />
      <About />
      <Service />
      <Portfolio />
      <Experiance />
      <Devtool />
      <Contact />
      <Footer />
      
    </div>
    
  );
}
export default App;
