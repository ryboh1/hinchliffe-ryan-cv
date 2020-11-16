import React, { Component } from 'react'
import { Nav, Dropdown } from 'react-bootstrap'

export default class LgViewTabHeaders extends Component {

    constructor(props){
        super(props)

        this.createLgScreenTabHeaders = this.createLgScreenTabHeaders.bind(this)
        this.changeDropDownMenuName = this.changeDropDownMenuName.bind(this)
    }

    createLgScreenTabHeaders() {
        let theTabs = []
        for (let i = 0; i < this.props.tabPageNames.length; i++) {
            theTabs.push(
                <Nav.Item
                    key={i}
                    className={(i === 0) ? "d-none lg-" + this.props.pageName + "-tabs lg-tab-" + this.props.tabPageNames[i] : "lg-" + this.props.pageName + "-tabs lg-tab-" + this.props.tabPageNames[i]}
                >
                    <Nav.Link
                        eventKey={this.props.tabPageNames[i]}
                        onClick={e => this.changeDropDownMenuName(e)}
                    >
                        {this.props.tabPageNames[i]}
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


    render() {
        return (
            <Dropdown.Menu>
                {this.createLgScreenTabHeaders()}
            </Dropdown.Menu>
        )
    }
}
