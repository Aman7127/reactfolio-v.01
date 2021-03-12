import React from "react";
import { Timeline, Events,  ImageEvent } from "@merc/react-timeline";

// projects
import L_simon from "../../assets/img/projects/simon.png";
import L_todo from "../../assets/img/projects/todolist.png";

import L_secrets from "../../assets/img/projects/secrets.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import L_keep from "../../assets/img/projects/keep-clone.png";
import L_lanze from "../../assets/img/projects/lanze.png";
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
      <h1 className=" text-center font-details-b glow"> Here are few of my  Projects</h1>
      
      <Timeline>
        <Events>
        {/* Project: simon game */}
         <ImageEvent
            date="28/07/2020"
            className="text-center"
            text="Simon Game"
            src={L_simon}
            alt="Simon"
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
                        <strong>Description:</strong> This is a simple simon game based on javascript. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>Fun game that can be played for passingtime</li>
                        <li>Uses sound cues</li> 
                          
                        
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>
                             Javascript
                            </span>
                          </li>
                         
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center button1">
              
                
              <a href="https://github.com/Aman7127/simon-game" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button>
                    </a>
                    <a href="https://simonwebgame.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">&nbsp;
                        Website
                      </Button>
                    </a>      
               
              </div>
            </div>
          </ImageEvent>


        {/* Project: todolist */}
          <ImageEvent
            date="16/09/2020"
            className="text-center"
            text="Todolist"
            src={L_todo}
            alt="todolist"
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
                        <strong>Description:</strong> This app is a basic todolist app created with the help of React.js
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Enter amount upto your desire</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center ">
              <a href="https://github.com/Aman7127/todolist" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button>
                    </a>
                    <a href="https://to-dolistinreact.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">&nbsp;
                        Website
                      </Button>
                    </a>    
              </div>
            </div>
          </ImageEvent>

          {/* Project: Pentagon DBMS */}
          <ImageEvent
            date="10/07/2019"
            className="text-center"
            text="Pentagon prison server"
            src={L_todo}
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
                              <Image
                                src={L_c}
                                alt="C"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
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
            className="text-center"
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
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
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

          {/* Project: secrets */}

          <ImageEvent
            date="14/01/2020"
            className="text-center"
            text="SECRETS"
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
                          <li>Registers users before submitting or viewing any secrets</li>
                          <li>Uses passport.js for authenticating users</li>
                          <li>Data is safely protected with bcrypt</li>
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
                                alt="mongoDB"
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
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <a href="https://github.com/Aman7127/secrets-app" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        Github 
                      </Button>
                    </a>
               
              </div>
            </div>
          </ImageEvent>

          {/* Project: Lanze */}

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
          </ImageEvent>
          
          {/* Project: SDP */}
          <ImageEvent
            date="07/12/2019"
            className="text-center"
            text="remote desktop control"
            src={L_todo}
            alt="remote desktop control"
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
                        <strong>Description:</strong>Local network based remote desktop access programm written completely in java 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>This is a java written application which can remotely access another device with the help of ip and admin generated otp .</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_java}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              java
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
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
