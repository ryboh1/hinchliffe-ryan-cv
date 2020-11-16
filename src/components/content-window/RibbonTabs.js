import {React, Component } from 'react'
import { Nav } from 'react-bootstrap'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faBriefcase, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default class RibbonTabs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            redIcons: [faTools, faBriefcase, faArchive, faUserCircle]
        }

        this.createRedTabs = this.createRedTabs.bind(this)
        this.addActiveTabClass = this.addActiveTabClass.bind(this)
    }

    createRedTabs(arrayOfTabs, classNames) {
        //Loops over tabs and adds eventKey, className and value
        let theTabs = []
        for (let i = 0; i < (arrayOfTabs.length - 1); i++) {
            theTabs.push(
            <Nav.Item 
                className={
                    (i === 0) ? "active-tab individual-ribbon " + classNames[i]:"tab-active individual-ribbon " + classNames[i] 
                } 
                key={i}
            >
                <Nav.Link onClick={(e) => this.addActiveTabClass(e)} eventKey={classNames[i]}>
                    {arrayOfTabs[i]}
                    <span className="fa-li">
                        <FontAwesomeIcon icon={this.props.redIcons[i]} />
                    </span>
                </Nav.Link>
            </Nav.Item>
            )
        }
        return theTabs
    }

    addActiveTabClass(theEvent){
        //1. loop through all tabs and remove any active-tab classes
        let theRibbons = document.getElementsByClassName("individual-ribbon")
        for(let i = 0; i < theRibbons.length; i++){
            theRibbons[i].classList.remove("active-tab")
        }

        //2. add class to current parent element
        theEvent.currentTarget.parentElement.classList.add("active-tab")
    }


    render() {
        return (
            <Nav className="ribbon-tabs">
                
                {/*Red Tabs */
                    this.createRedTabs(this.props.pageNames, this.props.classNames)
                }

                {/*Yellow Tab - Confetti */}
                <Nav.Item className={"individual-ribbon " + this.props.classNames[4]}>
                    <Nav.Link onClick={(e) => this.addActiveTabClass(e)} eventKey={this.props.classNames[4]}>
                        {this.props.pageNames[4]}
                        <span className="fa-li">
                            <img className="icon-red-button" src={this.props.redButtonIcon} alt="red button icon" />
                        </span>
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        )
    }
}
