/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */

import React from "react";
import Typewriter from 'typewriter-effect';
import styled from "styled-components";


const MyTitleMessage = styled.h1`
  position: relative;
  width: 100%;
  top: -18rem;
  z-index: 1;
  margin-top: -260px;
  text-align: center;
  strong {
    font-size: 2em;
  }
  div {
    color: #87FF2A;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 1);
    font-weight: 100; 
    letter-spacing: 7px;
    .main {
      font-size: 50px;
      font-family: 'Anton', sans-serif; 
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  

  }
`;


const TitleMessage = () => (
    <MyTitleMessage>
      <div className="titleMessage ">
        <div className="heading">
          <div className="main text-center mb-3 ">
           
            <br />
            <span >
              <strong >Aman Ghumra</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Software Engineer","Blockchain connoisseur","Gamer", "Sports Enthusiast",],
                autoStart: true,
                loop: true,
                delay: 70
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );

export default TitleMessage;
