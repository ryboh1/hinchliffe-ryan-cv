import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

//images
import rotatingEarth from "../../../../gifs/rotating-earth.gif"
import vehicleKeys from "../../../../gifs/vehicle-keys.gif"
import codeWeaversPlugin from "../../../../gifs/codeweavers-plugin.gif"

export default class ExperienceTab extends Component {

    constructor(props) {
        super(props)

        this.state = {

            companies: ["codeWeavers","dataKraken", "seoCapital"],

            codeWeavers: {
                company: "Code Weavers",
                location: "Remote",
                jobTitle: "Web App Developer",
                timeInPosition: "Jan 2021 - Present",
                jobHours: "Full Time",
                roleIncluded: [
                    `Using the Angular Framework and RXJS built and maintained custom car 
                    finance plugins and journeys for major car companies`,
                    "Handled customer support tickets",
                    "Wrote unit and end to end tests for angular components"
                ],
                gif: [codeWeaversPlugin, "A Finance Calculator"]
            },

            dataKraken: {
                company: "Data Kraken",
                location: "Oxford",
                jobTitle: "Web Developer",
                timeInPosition: "Mar 2020 - Nov 2020",
                jobHours: "Full Time",
                roleIncluded: [ "Created Interactive Data Visualisations", "Created Data Krakens Entire Website from design to code",
                    "Created A backend API for a major telephone company"],
                gif: [rotatingEarth, "Rotating Earth"]
            },

            seoCapital: {
                company: "SEO Capital",
                location: "Chesterfield",
                jobTitle: "Front End Developer",
                timeInPosition: "Feb 2019 - Jun 2019",
                jobHours: "Work Experience - Part Time",
                roleIncluded: ["Created Website pages for local business's"],
                gif: [vehicleKeys, "Vehicle Keys Website"]
            }
        }
    }


    render() {
        let jobPositions = []

        for (let company of this.state.companies) {

            let companyInfo = this.state[company]
            let jobRoles = []

            for (let jobRole of companyInfo.roleIncluded) {
                jobRoles.push(
                    <li
                        key={jobRole}
                    >
                        {jobRole}
                    </li>
                )
            }

            jobPositions.push(
                <div
                    className="job-description-container"
                    key={company}
                >
                    <Row
                        className="job-description-row text-center text-xl-left"
                    >
                        <Col xl={8}>
                            <h5>
                                {companyInfo.company} {companyInfo.location ? "- " + companyInfo.location : null}
                            </h5>
                            <h6>
                                {companyInfo.jobTitle}
                            </h6>
                            <h6>
                                {companyInfo.timeInPosition}
                            </h6>
                            <h6>
                                {companyInfo.jobHours}
                            </h6>
                        </Col>
                        <Col xl={4}>
                            <img
                                className="m-4 m-xl-0"
                                src={companyInfo.gif[0]}
                                alt={companyInfo.gif[1]}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <ul>
                            {jobRoles}
                        </ul>
                    </Row>
                </div>
            )
        }

        return (
            <div>
                {jobPositions}
            </div>
        )
    }
}