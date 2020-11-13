import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap"
export default class TrainingTab extends Component {

    constructor(props) {
        super(props)

        this.state = {
            introduction: "All courses completed have been online.",
            courses: {
                names: ["Harvards Introduction to Computer Science", "Code Academy", "Microsofts Introduction to React.js", "Programming Foundations Object Oriented Design"],
                information: ["Edx (300 hours)", "Javascript, HTML, CSS, Java, Express.js, Node.js (100 hours +)", "Edx (20 hours)", "Linkedin Learning (20 hours)"]
            }

        }
    }

    render() {

        let courseElements = []
        let course = this.state.courses

        for (let i = 0; i < course.names.length; i++) {
            courseElements.push(
                <Row key={i} className="mt-2">
                    <Col>
                        <h6 className="font-weight-bold">{course.names[i]}</h6>
                        <p>{course.information[i]}</p>
                    </Col>
                </Row>
            )
        }

        return (
            <div className="training-container m-2">
                <Row>
                    <Col>
                        <h5 className="text-center mt-4 mb-4">{this.state.introduction}</h5>
                    </Col>
                </Row>
                {courseElements}
            </div>
        )
    }
}
