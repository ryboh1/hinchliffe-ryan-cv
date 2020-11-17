import React, { Component } from 'react'

export default class Technologies extends Component {

    constructor(props){
        super(props)

        this.createButtons = this.createButtons.bind(this)
    }

    createButtons(theTechnologyNames){
        let theButtons = []

        for(let i = 0; i < theTechnologyNames.length; i++){
            theButtons.push(
                <h5 className="technology-buttons" key={i}>
                    {theTechnologyNames[i]}
                </h5>
            )
        }

        return theButtons
    }

    render() {
        return (
            <div className="skills-page__technology-container">
                {this.createButtons(this.props.technologyNames)}         
            </div>
        )
    }
}
