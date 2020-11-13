import React, { Component } from 'react'
import {Tab} from "react-bootstrap"

//Components
import LargeViewRibbonTabs from "./LargeViewRibbonTabs"
import SkillsPage from "./pages/skills-page/SkillsPage"
import ExperiencePage from "./pages/experience-page/ExperiencePage"
import PastProjects from './pages/past-projects/PastProjects'
import AboutMe from './pages/about-me-page/AboutMe'
import RedButton from './pages/red-button-page/RedButton'


export default class Window extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pages:[<SkillsPage />, <ExperiencePage />, <PastProjects />, <AboutMe />, <RedButton />]
        }
        
        this.createTabPanes = this.createTabPanes.bind(this)
    }

    createTabPanes(theClassNames, thePages){
        let tabPanes = []
        for (let i = 0; i < theClassNames.length; i++) {
            tabPanes.push(<Tab.Pane className={"tab-pane-" +theClassNames[i]} eventKey={theClassNames[i]} key={i}>
                {(thePages[i]) ? thePages[i]: null }
            </Tab.Pane>
            )
        }
        return tabPanes
    }

    render() {
        return (
            <div className="window">

                {/**Button Ribbon Tabs */}
                <div className="lg-ribbon-tabs d-block d-lg-none">
                    <LargeViewRibbonTabs 
                        pageNames={this.props.pageNames}
                        classNames={this.props.classNames}
                    />
                </div>

                <Tab.Content>
                    {this.createTabPanes(this.props.classNames, this.state.pages)}
                 </Tab.Content>
            </div>
        )
    }
}
