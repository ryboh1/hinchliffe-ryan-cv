import React, { Component } from 'react'
import { Tab, Col, Row, Nav, Dropdown } from 'react-bootstrap'

//Components
import SkillsBar from "./SkillsBar"
import Technologies from "./Technologies"

//Helper object
import TabSync from "../../../../helper-classes/TabSync"

export default class SkillsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            languagesObject: {
                skillNames: ["Javascript", "HTML", "CSS", "Java", "PHP"],
                skillLength: ["1 year", "2 years", "2 years", "Recent", "Recent"],
                skillLevel: [90, 90, 85, 50, 50]
            },
            frameworksObject: {
                skillNames: ["React.js", "D3.js", "Sass", "Bootstrap", "jQuery"],
                skillLength: ["1 year", "1 year", "1 year", "2 years", "2 years"],
                skillLevel: [75, 75, 90, 90, 80]
            },
            technologies: ["Git", "Github", "Jira", "Wordpress", "FileZilla", "NPM", "Linux", "Figma", "VS-Code", "Intelli-J"],
            skillsClasses: ["languages-skills", "framework-skills"],
            subTabPageNames: ["languages", "frameworks", "technologies"]
        }

        this.createTabHeaders = this.createTabHeaders.bind(this)
        this.createTabContent = this.createTabContent.bind(this)
        this.createLgScreenTabHeaders = this.createLgScreenTabHeaders.bind(this)
        this.addClassToTab = this.addClassToTab.bind(this)
    }

    createTabHeaders(theSubTabPageNames) {
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
        theTabs.push(<hr key={theSubTabPageNames.length}></hr>)
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

    createLgScreenTabHeaders(theSubTabPageNames) {
        let theTabs = []
        for (let i = 0; i < theSubTabPageNames.length; i++) {
            theTabs.push(
                <Nav.Item
                    key={i}
                    className={(i === 0) ? "d-none lg-skills-tabs lg-tab-" + theSubTabPageNames[i] : "lg-skills-tabs lg-tab-" + theSubTabPageNames[i]}
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
        let theClassElements = document.getElementsByClassName("lg-skills-tabs")
        for (let i = 0; i < theClassElements.length; i++) {
            theClassElements[i].classList.remove("d-none")
        }

        //2. add d-none to current class list
        theEvent.currentTarget.parentElement.classList.add("d-none")

        //3. change text of current button
        let toggleButton = document.getElementById("skills-page-dropdown-toggle-menu-button")
        toggleButton.innerText = theEvent.currentTarget.innerText
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

    componentDidMount() {
        
        let tabClasses = []
        for(let theClass of this.state.subTabPageNames){
            tabClasses.push("tab-" + theClass)
        }

        let ts = new TabSync(tabClasses,"skills-page-dropdown-toggle-menu-button" )
        ts.syncTabs()
        ts.syncCorrespondingTabs()
    }

    render() {

        let content = [<SkillsBar skillObject={this.state.languagesObject} theClass={this.state.skillsClasses[0]} />, <SkillsBar skillObject={this.state.frameworksObject} theClass={this.state.skillsClasses[1]} />, <Technologies technologyNames={this.state.technologies} />]

        return (
            <Tab.Container
                id="sklls-page"
                defaultActiveKey={this.state.subTabPageNames[0]}
            >
                {/* Tab Headers */}
                <Row>
                    <Col className="d-none d-lg-block">
                        {this.createTabHeaders(this.state.subTabPageNames)}
                    </Col>
                    <Col className="col-lg-skills-tab d-block d-lg-none">
                        <Dropdown>
                            <Dropdown.Toggle
                                id="skills-page-dropdown-toggle-menu-button"
                                variant="success"
                            >
                                {this.state.subTabPageNames[0]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                                className={this.state.dropDownMenuClass}
                            >
                                {this.createLgScreenTabHeaders(this.state.subTabPageNames)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

                {/* Tab Content */}
                <Row>
                    <Col >
                        <Tab.Content>
                            {this.createTabContent(content, this.state.subTabPageNames)}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}