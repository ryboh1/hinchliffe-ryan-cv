import React from 'react'

export default class ReactSign extends React.Component{
    render(){
        return(
            <div>
                <p>Made In</p>
                <img src={this.props.reactLogo} />
            </div>
        )
    }
}