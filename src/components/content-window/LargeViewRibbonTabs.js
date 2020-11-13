import React, { Component } from 'react'

//Libraries
import {Dropdown, Nav} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSortDown} from "@fortawesome/free-solid-svg-icons"

export default class LargeViewRibbonTabs extends Component {

    constructor(props) {
        super(props)
    
        this.changeDropDownMenuName = this.changeDropDownMenuName.bind(this)
        this.createTabs = this.createTabs.bind(this)
    }

    changeDropDownMenuName(theEvent){
        //1. loop through all tabs and remove any d-none classes
        let theRibbons = document.getElementsByClassName("lg-individual-ribbon")
        for(let i = 0; i < theRibbons.length; i++){
            theRibbons[i].children[0].classList.remove("d-none")
        }

        //2. add d-none to current class list
        theEvent.currentTarget.classList.add("d-none")
        
        //3. change text of dropdown toggle while keeping strong element
        let strongElement = document.createElement("STRONG")
        strongElement.className = "ribbon-shadow"
        strongElement.innerText = theEvent.currentTarget.text

        let toggleButton = document.getElementsByClassName("dropdown-toggle")[0]
        toggleButton.replaceChild(strongElement,toggleButton.childNodes[0])

        //4. If Red Button add alt ribbon class
        let button = document.getElementById("dropdown-toggle-menu-button")
        if(theEvent.currentTarget.text === "red button"){
            button.classList.add("alt-ribbon-colour")
        }
        else{
            button.classList.remove("alt-ribbon-colour")
        }
    }

    createTabs(arrayOfTabs, classNames){
        let theTabs = []
        for (let i = 0; i < arrayOfTabs.length ; i++) {
            theTabs.push(
                <Nav.Item className={"lg-individual-ribbon lg-" + classNames[i]} key={i}>
                    <Nav.Link className={(i === 0) ? "d-none": ""} onClick={(e) => this.changeDropDownMenuName(e)}  eventKey={classNames[i]}>
                        {arrayOfTabs[i]}
                    </Nav.Link>
                </Nav.Item>
            )
        }
        return theTabs
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle id="dropdown-toggle-menu-button" variant="success">
                    <strong className="ribbon-shadow">{this.props.pageNames[0]}</strong>
                    <FontAwesomeIcon icon={faSortDown} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {this.createTabs(this.props.pageNames, this.props.classNames)}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
