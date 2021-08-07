/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../contact-form/contact-form.styles.css";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

const Contact =()=> {
    return(
        <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3 glow"> 
        <Flip left duration={3000}>
        Feel free to contact me anytime :)
        </Flip>
        </h1>
        <br/>
      
      
        
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
              <Zoom durartion={5000}> 
                <a href="mailto:ghumraaman2@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="danger" title="ghumraaman2@gmail.com">
                    <i className="fas fa-envelope-square"></i>My E-mail
                  </Button>
                </a>
                </Zoom>
              </div>
              <div>
                    <Zoom durartion={5100}>
                    <a href="https://www.linkedin.com/in/aman-ghumra-491031205/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="primary"><i class="fab fa-linkedin"></i>&nbsp;
                      
                        LinkedIn
                        
                      </Button>
                    </a>
                    </Zoom>
                  </div>
              
                  <div>
                  <Zoom durartion={5200}>
                    <a href="https://github.com/Aman7127" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="dark"><i class="fab fa-github"></i>&nbsp;
                        
                        GitHub
                        </Button>
                    </a>
                    </Zoom>
                  </div>
             
            </Col>
          </Row>
          <br />
          <br />
          <br />       
      </div>
   

    );
};

export default Contact;

