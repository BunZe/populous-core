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
            let numProbed = 0;
            let lastUpdated = null
            this.state.data.forEach(element => {
                if(element._id === device.deviceID){
                    numProbed = element.value;
                    lastUpdated = element.timestamp;
                }
            });

            elements.push(<DeviceInfo key={device.deviceID} label={device.label} numProbed={numProbed} lastUpdated={lastUpdated}/>)
        });
    
        return (
            <div style={{display: "flex", flexDirection: "row"}}>
                {elements}
            </div>
        )
    }

    componentDidMount() {
        let comp = this

        console.log("hey");
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


        fetch("api/data/last")
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