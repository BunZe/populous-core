import React, { Component } from 'react'
import DeviceInfo from "./deviceInfo";

export default class appContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             devices: [],
             data: []
        }
    }
    
    
    render() {

        const elements = [];
        this.state.devices.forEach(device => {
            elements.push(<DeviceInfo label={device.label} lastUpdated={"5 minutes ago"}/>)
        });
    
        return (
            <div style={{display: "flex", flexDirection: "row"}}>
                {elements}
            </div>
        )
    }

    componentDidMount() {
        let comp = this

        fetch("api/devices")
        .then((response) => {
            if(response.status !== 200){
                console.log("Looks like there was a problem getting the data")
                return;
            } else {
                response.json().then((data) => {
                    comp.setState({devices: data});
                });
            }
        });


        fetch("api/data")
        .then(
          function (response) {
            if(response.status !== 200){
              console.log("Looks like there was a problem getting the data")
              return;
            }
    
            response.json().then((data) => {
              comp.setState({data: data});
            }
    
        );
      });
    }
}