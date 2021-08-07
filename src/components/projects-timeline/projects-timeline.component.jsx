/* eslint-disable no-unused-vars */
import React from "react";
import { Timeline, Events,  ImageEvent } from "@merc/react-timeline";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
// projects
import L_simon from "../../assets/img/projects/simon.png";
import L_todo from "../../assets/img/projects/todolist.png";

import L_secrets from "../../assets/img/projects/secrets.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import L_keep from "../../assets/img/projects/keep-clone.png";
import L_lanze from "../../assets/img/projects/lanze.png";
import L_prison from "../../assets/img/projects/prison.png";
import L_http from "../../assets/img/projects/http.png";
import L_sdp from "../../assets/img/projects/sdp.png";
import L_sort from "../../assets/img/projects/sort.png";
// skills
import L_REACT from "../../assets/img/skills/react.svg";


import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";

import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_c from "../../assets/img/skills/c.svg";
import L_java from "../../assets/img/skills/java.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
    <Bounce  duration={3500}>
      <h1 className=" text-center font-details glow title " style={{
        fontWeight: 'bold',
        paddingBottom : "100px"
      }}> Here are few of my  Projects</h1>
    </Bounce>  
      <Timeline>
        <Events>
      
        {/* Project: secrets */}

          <ImageEvent
            date="14/01/2020"
            className="text-center bord1"
            text="ANONYMO"
            src={L_secrets}
            alt="Secrets"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows to
                        submit secrets as an anonymous identity using authenticataion.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Advanced 128bit AES encryption up to to 5 salting and hashing rounds to save user data in MongoDB</li>
                          <li>Uses passport.js for authenticating users</li>
                          <li>Data is safely protected with bcrypt</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              
                              EJS template
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                             
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                            
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              
                              MongoDB , Passport.js with Oauth2.0
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center extra">
              <a href="https://github.com/Aman7127/secrets-app" target="_blank" rel="noopener noreferrer">
                      <center><Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button></center>
                    </a>
               
              </div>
            </div>
          </ImageEvent>
        

        {/* Project: HTTP-server */}
          <ImageEvent
            date="16/09/2020"
            className="text-center bord1"
            text="HTTP-SERVER"
            src={L_http}
            alt="HTTP-SERVER"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main button1"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Implemented our own version of HTTP stateless server and tested it using any standard browser.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It can support any local web browsing service application.</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                           
                              Java
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              Socket programming
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              TCP/UDP protocols
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center extra">
              <a href="https://github.com/Aman7127/Http-Server" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button>
                    </a>
                     
              </div>
            </div>
          </ImageEvent>

          {/* Project: Pentagon DBMS */}
          <ImageEvent
            date="10/07/2019"
            className="text-center bord1"
            text="Pentagon prison server"
            src={L_prison}
            alt="Pentagon prison server"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                      <strong>Description:</strong> DescriptionThe Head of Department would use this software to manage the data of a Prison all by his own.👮<br/>
Fork, clone, play with the code and feel free to PR for any issues or new versions! 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It uses FileHandling Concepts as well as different String Functions of C to manipulate data.</li>
                          <li>It has a basic CRUD Functionality and the data is stored in a .txt format file.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              
                              C
                            </span>
                          </li>
                         
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center extra">
              <a href="https://github.com/Aman7127/PENTAGON-PRISONER-DATABASE-SERVER" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button>
                    </a>
             
              </div>
            </div>
          </ImageEvent>

          {/* Project: Google keep clone */}
          <ImageEvent
            date="21/01/2020"
            className="text-center "
            text="Google keep-clone"
            src={L_keep}
            alt="Google keep-clone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div >
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main other "
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> google keep type clone created in react using framework material UI
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>completely responisve</li>
                          <li>added extrnal libraries for additional visualisation</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                            
                              React
                            </span>
                          </li>
                      
                        </ul>
                     
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center extra">
              <a href="https://github.com/Aman7127/Keep-clone" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button>
                    </a>
                    
              </div>
            </div>
          </ImageEvent>

          

          {/* Project: Lanze 

          <ImageEvent
            date="15/12/2019"
            className="text-center"
            text="Lanze"
            src={L_lanze}
            alt="lanze"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>A simple blog website using node.js and express.js and mongoDB
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It is a mini project created to develop test cases used in Software engineering techniques   </li>
                         
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                       
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="mongodbb"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center extra">
              <a href=" https://github.com/Aman7127/lanze " target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button>
                    </a> 
              </div>
            </div>
          </ImageEvent>*/}
          
          {/* Project: SDP */}
          <ImageEvent
            date="07/12/2019"
            className="text-center bord1"
            text="remote desktop control"
            src={L_sdp}
            alt="HUCKDESK"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Local network based remote desktop access program written completely in java. It is similar to Anydesk platform but completely written in Java.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li><strong>SUMMER DESIGN PROJECT</strong> for helping people connect around the world amidst this pandemic</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                            
                              java
                            </span>
                          </li>
                           <li>
                            <span className="p-2">
                            
                              socket programming
                            </span>
                          </li>
                         </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center extra">
              <a href="https://github.com/Aman7127/Summer-Design-Project" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button>
                      </a>
              </div>
            </div>
          </ImageEvent>

                      
          {/* Project: Sorting visualiser */}
          <ImageEvent
            date="07/12/2019"
            className="text-center bord1"
            text="Sorting-Visualiser"
            src={L_sort}
            alt="sorting"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Implementing all type of sorting techniques in an innovative way. Its a fun project  to integrate frontend library react.js along with sorting algorithm.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Innovative way of pictorial representation of algorithms.</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                            
                              React.js
                            </span>
                          </li>
                           <li>
                            <span className="p-2">
                            
                             Material ui
                            </span>
                          </li>
                            <li>
                            <span className="p-2">
                            
                            Sorting algorithms
                            </span>
                          </li>
                         </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center extra">
              <a href="https://github.com/Aman7127/sorting-visualiser" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button>
                      </a>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
