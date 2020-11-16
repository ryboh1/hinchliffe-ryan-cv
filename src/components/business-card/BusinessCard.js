import React from 'react'

//Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap"

export default class BusinessCard extends React.Component {
    render() {
        return (
            <div className="business-card position-relative pt-3 m-auto mr-lg-0 text-color">
                <BusinessCardTop
                    image={this.props.image}
                    name={this.props.name}
                    title={this.props.title}
                />
                <hr />
                <BusinessCardBottom
                    github={this.props.github}
                    email={this.props.email}
                    phone={this.props.phone}
                    linkedin={this.props.linkedin}
                    location={this.props.location}
                />

                <a href={this.props.staticCv} download>
                    <Button className="w-100 rounded-0" variant="dark">
                        Download CV
                    </Button>
                </a>
            </div>
        )
    }
}

function BusinessCardTop(prop) {
    return (
        <span className="business-card-top">
            <img
                src={prop.image}
                alt={prop.name}
                className="image-center"
            />
            <h3 className="font-weight-bold text-center">{prop.name}</h3>
            <h5 className="text-center">{prop.title}</h5>
        </span>
    )
}

function BusinessCardBottom(prop) {
    return (
        <ul className="fa-ul business-card-bottom p-3">

            {prop.github ?
                <li>
                    <span className="fa-li">
                        <FontAwesomeIcon icon={faGithub} />
                    </span>
                    <a href={prop.github} target="_blank" rel="noreferrer">
                        {prop.github}
                    </a>
                </li>
                : null}

            {prop.email ?
                <li>
                    <span className="fa-li">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <a href={"mailto:" + prop.email}>
                        {prop.email}
                    </a>
                </li>
                : null}

            {prop.phone ?
                <li>
                    <span className="fa-li">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>
                    <a href={"tel:" + prop.phone}>
                        {prop.phone}
                    </a>
                </li>
                : null}

            {prop.linkedin ?
                <li>
                    <span className="fa-li">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </span>
                    <a href={prop.linkedin} target="_blank" rel="noreferrer">
                        {prop.linkedin}
                    </a>
                </li>
                : null}

            {prop.location ?
                <li>
                    <span className="fa-li">
                        <FontAwesomeIcon icon={faHome} />
                    </span>
                    {prop.location}
                </li>
                : null}

        </ul>
    )
}