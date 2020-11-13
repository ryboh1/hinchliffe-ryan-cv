import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

//Content
import imageOfMe from "./images/ryan-hinchliffe.jpeg"
import staticCv from "./static-cv/ryan-hinchliffe-cv.pdf"
import redButtonIcon from "./images/icon-red-button.png"
import reactLogo from "./images/react-logo.png"

//Components
import BusinessCard from "./components/business-card/BusinessCard"
import ContentWindow from './components/content-window/ContentWindow';
import ReactSign from './components/react-sign/ReactSign';

class App extends React.Component {
  
  render(){
    return(
      <div className="app">
        <canvas id="confetti"></canvas>
        <Container className="app-container">
          <Row>
            {/* Content */}
            <Col lg={4} className="business-card-column">
              <BusinessCard 
                image={imageOfMe}
                name="Ryan Hinchliffe"
                title="Web Developer"
                github="https://www.github.com/ryboh1"
                email="ryanhinchliffe1@gmail.com"
                phone="07951261599"
                linkedin="https://www.linkedin.com/in/ryan-hinchliffe-403314183"
                location="Oxford/Chesterfield"
                staticCv={staticCv}
              />
            </Col>

            <Col className="content-window-column">
              <ContentWindow 
                redButtonIcon={redButtonIcon}
              />
            </Col>
          </Row>

          <Row id="react-sign-footer">
            {/*Made in react sign */}
            <Col>
              <ReactSign 
                reactLogo={reactLogo}
              />
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}

export default App;
