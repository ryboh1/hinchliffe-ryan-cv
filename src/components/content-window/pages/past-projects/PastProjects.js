import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

// gifs
import dkWebsite from "../../../../gifs/dk-website.gif"
import habitsApp from "../../../../gifs/habits-app.gif"
import mathsQuiz from "../../../../gifs/maths-quiz.gif"
import localBusinessWebsite from "../../../../gifs/vehicle-keys.gif"

export default class PastProjects extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pageTitle: "Past Projects",
            gifUrls: [habitsApp, dkWebsite, localBusinessWebsite, mathsQuiz],
            gifTitle: ["Atomics Habits App", "Data Krakens Website", "Vehicle Keys Website", "Maths Quiz App"],
            gifText: ["I loved the book Atomic Habits by James Clear. I had to make an app to go along with it using electron and node.js.", "Data Kraken needed a revamp of their old website. I created this with wordpress, using PHP, HTML, CSS and Javascript.", "A local business that sold “vehichle keys”. I created the front end web pages in using CSS and HTML", "A simple math quiz react.js app, I created to learn react.js."],
            gifLink: ["https://github.com/ryboh1/habitsapp", "https://www.datakraken.net", "https://www.vehiclekeyservices.com/", "https://github.com/ryboh1/Math-Quiz"],
            gifLinkName: ["Code", "Link", "Link", "Code"]
        }

        this.createGifColumns = this.createGifColumns.bind(this)
    }

    createGifColumns() {
        let columns = []
        for (let i = 0; i < this.state.gifUrls.length; i++) {
            columns.push(

                <Col
                    xs={12}
                    className="text-center"
                    key={i}
                >
                    <img src={this.state.gifUrls[i]} alt={this.state.gifText[i]} />
                    <h5 className="font-weight-bold">{this.state.gifTitle[i]}</h5>
                    <p className="p-2">{this.state.gifText[i]}</p>
                    <Button
                        target="_blank"
                        rel="noreferrer"
                        href={this.state.gifLink[i]}
                        className="font-weight-bold"
                    >{this.state.gifLinkName[i]}</Button>
                </Col>
            )
        }
        return columns
    }

    render() {
        return (
            <Row
                className="row-past-projects mb-5"
            >
                <Col xs={12} className="text-center">
                    <h4 className="header-past-project font-weight-bold mt-4 mb-4">{this.state.pageTitle}</h4>
                </Col>
                {this.createGifColumns()}
            </Row>
        )
    }
}
