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
import background from "./assets/img/background/background.jpg";
import sample from "./assets/img/background/sample.mp4";


import "./App.css";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
    <Mynavbar />
    {/*<Particles
        className="particles particles-box"
        params={particlesOptions}
        />*/} 
    
     <Mycarousal />
     <TitleMessage />
     
     
       
       <div>

       <Parallax
        blur={{ min: -2, max: 2 }}
        bgImage={background}
        bgImageAlt="parallax"
        bgImageSize="100*100"
        
      
            
        
    >
          <Container className="container-box rounded">
              <Fade left>
                <About />
              </Fade>
            </Container>
                   
                   <Slide bottom duration={3000}>
                      
                        <Skills />
                      
                    </Slide>
        
        {<div style={{ height: '200px' }} />}
    </Parallax>


     {/* <Parallax strength={600}>
        <Background >
            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80" alt="bg-1" />
            <hr></hr>
        </Background>
    
           
            
          
        </Parallax>*/}
      </div>
      
 
        <div>
        
     
        <Container className="container-box rounded">
        
        
         <video autoPlay loop muted
         style={{
           position : "absolute",
           width : "141%",
           left : "46%",
           top : "49%",
           height : "105%",
           objectFit : "cover",
           transform : "translate(-50% , -50%)",
           zIndex: "-1"

         }}>
         <source src={sample} type="video/mp4"/>
          </video>
          
                  <TimeLine />
        
         

        
        
       
       
        </Container>
      
      
        
      
          <Contact/>
        
     
        </div>
        <FooterPanel />
     
      
      </div>
  );
};

export default App;
