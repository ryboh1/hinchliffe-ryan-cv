import React, { Component } from 'react'

//Bootstrap 
import {Tab} from "react-bootstrap"

export default class TabContent extends Component {

    constructor(props){
        super(props)

        this.createTabPanes = this.createTabPanes.bind(this)
    }

    createTabPanes() {
        let theTabPanes = []
        for (let i = 0; i < this.props.tabPageNames.length; i++) {
            theTabPanes.push(
                <Tab.Pane
                    eventKey={this.props.tabPageNames[i]}
                    key={i}
                >
                    {(this.props.theContent[i] !== undefined) ? this.props.theContent[i] : null}
                </Tab.Pane>
            )
        }

        return theTabPanes
    }

    render() {
        return (
            <Tab.Content>
                {this.createTabPanes()}
            </Tab.Content>
        )
    }
}
