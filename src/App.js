/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Mynavbar from "./components/Navbar/mynavbar.component";
import Mycarousal from "./components/carousel/mycarousel.components";
import TitleMessage from "./components/my-title/my-title.components";
import About from "./pages/about/about.component";
import { Parallax , Background } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Flip from "react-reveal/Flip";
import Skills from "./pages/skills/skills.component";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import Contact from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Particles from 'react-particles-js';
import { particlesOptions } from "./particleOptions";



import "./App.css";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
    <Mynavbar />
     <Mycarousal />
     <TitleMessage />
     
     {/*  <Particles
        className="particles particles-box"
        params={particlesOptions}
        /> */}
       <div>
      <Parallax strength={500}>
        <Background >
            <img src="https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80" alt="bg-1" />
            <hr></hr>
        </Background>
    
            <Container className="container-box rounded">
              <Fade left>
                <About />
              </Fade>
            </Container>
            
          
        </Parallax>
      </div>
      
        <Slide bottom duration={500}>
         
          <Skills />
        </Slide>
        <div>
        <Container className="container-box rounded">
        <Slide bottom duration={500}>
                  <TimeLine />
        </Slide>
      </Container>
      
        <Flip left>
          <hr />
          <Contact/>
        </Flip>
     
        </div>
        <FooterPanel />
     
      
      </div>
  );
};

export default App;
