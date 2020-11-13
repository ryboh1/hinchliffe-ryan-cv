import React, { Component } from 'react'
import { Row, Col } from "react-bootstrap"

export default class SkillsBar extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            skillLevels:this.props.skillObject.skillLevel,
            skillClass:this.props.theClass
        }
        this.createSkillBars = this.createSkillBars.bind(this)
    }

    createSkillBars(theSkillObject){
        let theSkillBars = [], 
        skillNames = theSkillObject.skillNames,
        skillLengths = theSkillObject.skillLength
        
        for(let i = 0; i < skillNames.length; i++){
            if(i === 0){
                theSkillBars.push(
                    <Row 
                        className="row-skills-languages"
                        key={i}
                    >
                        <Col className="col-skills-title" sm={ 7 }>
                            <p>
                                {skillNames[i]} - <small>{skillLengths[i]}</small>
                            </p>
                        </Col>
    
                        <Col className="col-comfort-level" sm={5}>
                            <small className="comfort-level">
                                Comfort Level
                            </small>
                        </Col>
    
                        <Col>
                            <div className="skills-bar">
                                <div className={this.state.skillClass}>
    
                                </div>
                            </div>
                        </Col>
                    </Row>
                )
            }
            else{
                theSkillBars.push(
                    <Row
                        className="row-skills-languages"
                        key={i}
                    >
                        <Col className="col-skills-title" xs={ 12 }>
                            <p>
                                {skillNames[i]} - <small>{skillLengths[i]}</small>
                            </p>
                        </Col>
    
                        <Col>
                            <div className="skills-bar">
                                <div 
                                    className={this.state.skillClass} >
                                </div>
                            </div>
                        </Col>
                    </Row>
                )
            }
        }

        return theSkillBars
    }

    componentDidMount(){
        let theSkillLevels = this.state.skillLevels
        let skillClass = this.state.skillClass

        let theBars = document.getElementsByClassName(skillClass)

        
        let theInterval = setInterval(() => {
            for(let i = 0; i < theBars.length; i++){
                //Make Bar length
                theBars[i].style.width = `${theSkillLevels[i]}%`
            }
            clearInterval(theInterval)
        }, 1500)
    }

    render() {

        return (
            <div className="skills-languages-container">
                {this.createSkillBars(this.props.skillObject)}
            </div>
        )
    }
}
