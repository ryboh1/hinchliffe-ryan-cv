import React, { Component } from 'react'
import { Tab, Col, Row, Dropdown } from 'react-bootstrap'

//Components
import SkillsBar from "./SkillsBar"
import Technologies from "./Technologies"
import TabHeaders from "../TabHeaders"
import LgViewTabHeaders from "../LgViewTabHeaders"
import TabContent from "../TabContent"

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

        let content = [
        <SkillsBar skillObject={this.state.languagesObject} theClass={this.state.skillsClasses[0]} />, 
        <SkillsBar skillObject={this.state.frameworksObject} theClass={this.state.skillsClasses[1]} />, 
        <Technologies technologyNames={this.state.technologies} />
        ]

        return (
            <Tab.Container
                id="skllspage"
                defaultActiveKey={this.state.subTabPageNames[0]}
            >
                {/* Tab Headers */}
                <Row
                    className="skills-page__tab-header-row"
                >
                    <TabHeaders 
                        tabPageNames={this.state.subTabPageNames}
                    />

                    <Col className="col-lg-skills-tab d-block d-lg-none">
                        <Dropdown>

                            <Dropdown.Toggle
                                id="skills-page-dropdown-toggle-menu-button"
                                variant="success"
                            >
                                {this.state.subTabPageNames[0]}
                            </Dropdown.Toggle>

                            <LgViewTabHeaders 
                                tabPageNames={this.state.subTabPageNames}
                            />

                        </Dropdown>
                    </Col>
                </Row>
                {/* End of Tab Headers */}

                {/* Tab Content */}
                <Row>
                    <Col >

                        <TabContent
                            theContent={content}
                            tabPageNames={this.state.subTabPageNames}
                        />

                    </Col>
                </Row>
                {/* End of Tab Content */}
            </Tab.Container>
        )
    }
}