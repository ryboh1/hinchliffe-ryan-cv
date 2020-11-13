import React, { Component } from 'react'
import { Col, Row, Nav, Tab, Dropdown } from 'react-bootstrap'

//Components 
import TrainingTab from "./TrainingTab"
import ExperienceTab from "./ExperienceTab"

//Helper object
import TabSync from "../../../../helper-classes/TabSync"

export default class ExperiencePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            subTabPageNames: ["Experience", "Training"]
        }

        this.createTabHeaders = this.createTabHeaders.bind(this)
        this.createTabContent = this.createTabContent.bind(this)
        this.addClassToTab = this.addClassToTab.bind(this)
        this.createLgScreenTabHeaders = this.createLgScreenTabHeaders.bind(this)
        this.changeDropDownMenuName = this.changeDropDownMenuName.bind(this)
    }

    createTabHeaders(theSubTabPageNames, wantHrElement) {
        let theTabs = []
        for (let i = 0; i < theSubTabPageNames.length; i++) {
            theTabs.push(
                <Nav.Item
                    key={i}
                    className={(i === 0) ? "currently-active tab-" + theSubTabPageNames[i] : "tab-" + theSubTabPageNames[i]}
                >
                    <Nav.Link
                        eventKey={theSubTabPageNames[i]}
                        onClick={e => this.addClassToTab(e, "currently-active", theSubTabPageNames)}
                    >
                        {theSubTabPageNames[i]}
                    </Nav.Link>
                </Nav.Item>
            )
        }
        if (wantHrElement !== undefined && wantHrElement === true) {
            theTabs.push(<hr key={theSubTabPageNames.length}></hr>)
        }
        return theTabs
    }

    createTabContent(theContent, theSubTabPageNames) {
        let theTabContent = []

        for (let i = 0; i < theSubTabPageNames.length; i++) {
            theTabContent.push(
                <Tab.Pane
                    eventKey={theSubTabPageNames[i]}
                    key={i}
                >
                    {(theContent[i] !== undefined) ? theContent[i] : null}
                </Tab.Pane>
            )
        }

        return theTabContent
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

    createLgScreenTabHeaders(theSubTabPageNames) {
        let theTabs = []
        for (let i = 0; i < theSubTabPageNames.length; i++) {
            theTabs.push(
                <Nav.Item
                    key={i}
                    className={(i === 0) ? "d-none lg-experience-tabs lg-tab-" + theSubTabPageNames[i] : "lg-experience-tabs lg-tab-" + theSubTabPageNames[i]}
                >
                    <Nav.Link
                        eventKey={theSubTabPageNames[i]}
                        onClick={e => this.changeDropDownMenuName(e)}
                    >
                        {theSubTabPageNames[i]}
                    </Nav.Link>
                </Nav.Item>
            )
        }
        return theTabs
    }

    changeDropDownMenuName(theEvent) {
        //1. loop through all tabs and remove any d-none classes
        let theClassElements = document.getElementsByClassName("lg-experience-tabs")
        for (let i = 0; i < theClassElements.length; i++) {
            theClassElements[i].classList.remove("d-none")
        }

        //2. add d-none to current class list
        theEvent.currentTarget.parentElement.classList.add("d-none")

        //3. change text of current button
        let toggleButton = document.getElementById("experience-page-dropdown-toggle-menu-button")
        toggleButton.innerText = theEvent.currentTarget.innerText
    }

    componentDidMount() {
        let tabClasses = []
        for (let theClass of this.state.subTabPageNames) {
            tabClasses.push("tab-" + theClass)
        }

        let ts = new TabSync(tabClasses, "experience-page-dropdown-toggle-menu-button")
        ts.syncTabs()
        ts.syncCorrespondingTabs()
    }

    render() {
        const content = [<ExperienceTab />, <TrainingTab />]
        return (
            <Tab.Container
                id="experience-page"
                defaultActiveKey={this.state.subTabPageNames[0]}
            >
                <Row
                    className="experience-page-content-row"
                >
                    <Col
                        className="mt-3 mb-3 text-center d-none d-lg-block"
                        xs={12}
                    >
                        {/**link this */}
                        {this.createTabHeaders(this.state.subTabPageNames)}
                    </Col>
                    <Col
                        xs={12}
                        className="d-block d-lg-none"
                    >
                        <Dropdown>
                            <Dropdown.Toggle
                                id="experience-page-dropdown-toggle-menu-button"
                            >
                                {this.state.subTabPageNames[0]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {this.createLgScreenTabHeaders(this.state.subTabPageNames)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Tab.Content>
                            {this.createTabContent(content, this.state.subTabPageNames)}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}
