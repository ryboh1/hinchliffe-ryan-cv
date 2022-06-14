import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

//Images
import pictureOfMe from "../../../../images/before-and-after.jpg"
import rockWall from "../../../../images/rock-wall.jpg"
import toastMasters from "../../../../images/toast-masters.jpeg"

export default class AboutMe extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pageHeader: "About Me",
            aboutMeText: ["I’m a coffee shop employee turned web developer, I moved from Chesterfield to Oxford then to Nottingham again.",
                "I went from making coffees to making websites, web apps, data visualisations and API’s. When I’m not working you can find me climbing, baking, or shamelessly supporting Manchester United !",
                "I’m always looking to learn new skills whether it’s in web development or elsewhere; recently I’ve joined a toast masters club for public speaking.",
                "Want to work together? I’d love to hear from you."],
            aboutMeImages: [pictureOfMe, rockWall, toastMasters],
            aboutMeImagesAlt:["Ryan Hinchliffe before and after",
                            "Rock Climbing Wall",
                            "Toast Masters Logo"]
        }

        this.createTextAndImages = this.createTextAndImages.bind(this)
    }

    createTextAndImages() {
        let textAndImages = []
        for (let i = 0; i < this.state.aboutMeText.length; i++) {
            textAndImages.push(
                <Row key={i} className="m-auto">
                    <Col xs={12} className={(i === (this.state.aboutMeText.length - 1)) ? "text-center font-weight-bold" : "text-center"}>
                        <p>{this.state.aboutMeText[i]}</p>
                    </Col>
                    <Col className="text-center">
                        {(this.state.aboutMeImages !== undefined) ? <img src={this.state.aboutMeImages[i]} alt={this.state.aboutMeImagesAlt[i]} />:null}
                    </Col>
                </Row>

            )
        }

        return textAndImages
    }

    render() {
        return (
            <Row className="about-me-page-container">
                <Col xs={12} className="text-center mt-4 mb-2">
                    <h4 className="font-weight-bold">{this.state.pageHeader}</h4>
                </Col>
                {this.createTextAndImages()}
            </Row>
        )
    }
}
