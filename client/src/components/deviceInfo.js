import React, { Component } from 'react'

export default class deviceInfo extends Component {
    render() {
        let numProbed = 0;
        if(this.props.numProbed != null){
            numProbed = this.props.numProbed;
        }
        return (
            <div style={{padding: "50px"}}>
                <h2>{this.props.label}</h2>
                <h1 style={{fontSize: 72, marginBottom: "10px"}}>{numProbed}</h1>
                <h5 style={{marginTop: "10px"}}>People</h5>
                <p style={{fontSize: 18}}>Last Updated {this.props.lastUpdated}</p>
            </div>
        )
    }
}

