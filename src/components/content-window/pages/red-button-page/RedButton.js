import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

import createTheConfetti from "./confetti"

export default class RedButton extends Component {

    constructor(props){
        super(props)

        this.createConfetti = this.createConfetti.bind(this)
    }

    createConfetti(){
        let theInterval = setInterval(() => {
            createTheConfetti()
            clearInterval(theInterval)
        }, 1000)

    }

    render() {
        return (
            <Row className="red-button-row">
                <Col>
                    <div id="red-button" onClick={this.createConfetti()}>Click Me</div>
                </Col>
            </Row>
        )
    }
}
