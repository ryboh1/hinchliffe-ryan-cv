import React, { Component } from 'react'

//Bootstrap 
import {Nav, Col} from "react-bootstrap"

export default class TabHeaders extends Component {
    
    constructor(props){
        super(props)

        this.createTabHeaders = this.createTabHeaders.bind(this)
        this.addClassToTab = this.addClassToTab.bind(this)
    }

    createTabHeaders() {
        let theTabs = []
        for (let i = 0; i < this.props.tabPageNames.length; i++) {
            theTabs.push(
                <Nav.Item
                    key={i}
                    className={(i === 0) ? " skills-page__tab-item currently-active tab-" + this.props.tabPageNames[i] : "tab-" + this.props.tabPageNames[i]}
                >
                    <Nav.Link
                        eventKey={this.props.tabPageNames[i]}
                        onClick={e => this.addClassToTab(e, "currently-active", this.props.tabPageNames)}
                    >
                        {this.props.tabPageNames[i]}
                    </Nav.Link>
                </Nav.Item>
            )
        }
        theTabs.push(<hr className="ribbon-background-color position-absolute" key={this.props.tabPageNames.length}></hr>)
        return theTabs
    }

    addClassToTab(theEvent, theClass, theSubTabs) {
        //1. remove currently active from previous tabs
        for (let i = 0; i < theSubTabs.length; i++) {
            let theTab = document.getElementsByClassName(`tab-${theSubTabs[i]}`)
            theTab[0].classList.remove(theClass)
        }

        //2. add class to parent element 
        theEvent.currentTarget.parentElement.classList.add(theClass)
    }
    
    render() {
        return (
            <Col className="d-none d-lg-block skills-page__tab-header-col">
                { this.createTabHeaders( this.props.tabPageNames ) }
            </Col>
        )
    }
}
