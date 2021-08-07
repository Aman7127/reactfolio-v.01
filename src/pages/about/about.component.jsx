/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../../assets/img/profile/profile.jpg";
import "../about/about.styles.css";
import Button from "react-bootstrap/Button";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";


const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text font-details pb-4 font title" style={{
          paddingLeft : "70px",
          fontWeight : "bold",
          }}>ABOUT ME</h1><br></br>
       
        <Container fluid>
          <Row className="pt-3 pb-5 align-items-center">
            {/* profile pic*/}
            <Col xs={12} md={12}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <div  ><Flip duration="3000">
                      <div>
                        <img src={profile} alt="profile" className="profile glow3 bord " />
                      </div>  
                      </Flip>
                </div>
                
              </Row>
            </Col>
            <br></br>
            <br></br>

            {/* profile description*/}

            <Col xs={12} md={12}>
              <Row className=" align-items-start p-2 my-details rounded glow2 font extra1"> {/* description */}
              <h2><strong>Hello viewers !  I am currently a final year undergraduate at Indian Institute of Information Technology,Vadodara.
              I am an enthusiastic young developer with proffesional work experience during my studies @MyDos,Turkey. This portfoliowebsite is one of my side projects.
              Few more projects are listed below.</strong>  </h2>


              
                <Col className="d-flex justify-content-center flex-wrap space">
                  <div>
                    <a href="#contact">
                      <Button className="m-2 glow1" variant="primary"><i class="fab fa-tumblr"></i>&nbsp;
                        Let's talk
                      </Button>
                    </a>
                  </div>
                 
                  <div>
                    <a href="https://github.com/Aman7127" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2 glow1" variant="dark"><i class="fab fa-github"></i>&nbsp;
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/aman-ghumra-491031205/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2 glow1" variant="info"><i class="fab fa-linkedin"></i>&nbsp;
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;