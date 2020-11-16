import React, { Component } from 'react'
import { Col, Row,  Tab, Dropdown } from 'react-bootstrap'

//Components 
import TrainingTab from "./TrainingTab"
import ExperienceTab from "./ExperienceTab"
import TabHeaders from "../TabHeaders"
import TabContent from "../TabContent"

//Helper object
import TabSync from "../../../../helper-classes/TabSync"
import LgViewTabHeaders from '../LgViewTabHeaders'

export default class ExperiencePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pageName:"skills",
            subTabPageNames: ["Experience", "Training"]
        }
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
                        <TabHeaders 
                            tabPageNames={this.state.subTabPageNames}
                        />
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

                            <LgViewTabHeaders 
                                pageName={this.state.pageName}
                                tabPageNames={this.state.subTabPageNames}
                            />
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <TabContent
                            tabPageNames={this.state.subTabPageNames}
                            theContent={content}
                        />
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}