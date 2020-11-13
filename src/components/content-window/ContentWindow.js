import React from 'react'

//Libraries
import { Row, Col, Tab, } from "react-bootstrap"
import { faArchive, faBriefcase, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons'

//Components
import Window from "./Window"
import RibbonTabs from './RibbonTabs'

//Helper Object
import TabSync from "../../helper-classes/TabSync"

export default class ContentWindow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pageNames: ["skills", "experience", "past projects", "about me", "red button"],
            classNames: ["tab-skills", "tab-experience", "tab-past-projects", "tab-about-me", "tab-red-button"],
            redIcons: [faTools, faBriefcase, faArchive, faUserCircle]
        }
    }

    componentDidMount() {

        let ts = new TabSync(this.state.classNames, "dropdown-toggle-menu-button")
        ts.syncTabs()
        ts.syncCorrespondingTabs()      
    }

    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey={this.state.classNames[0]}>
                <Row className="content-window">
                    <Col className="col-content-window" lg={8}>
                        <Window
                            pageNames={this.state.pageNames}
                            classNames={this.state.classNames}
                        />
                    </Col>
                    <Col className="col-ribbons-tab d-none d-lg-block">
                        {/**Ribbon Tabs */}
                        <RibbonTabs
                            pageNames={this.state.pageNames}
                            classNames={this.state.classNames}
                            redIcons={this.state.redIcons}
                            redButtonIcon={this.props.redButtonIcon}
                        />
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}