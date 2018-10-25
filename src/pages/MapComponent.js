import React, { Component } from 'react';
import ReactMapboxGl, {  Marker } from "react-mapbox-gl";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import moke10 from "./data/moke10.json";
import moke100 from "./data/moke100.json";
import moke500 from "./data/moke500.json";
import BackButton from './../components/BackButton';
const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibWhhY2tpZXdpY3oiLCJhIjoiY2poZzRyZ3VsMDdsZTM2cHRjdGhqOTM1biJ9.MXgY2Vvcp1FzwwTgK54oWA"
});

class MapComponent extends Component {
    state = {
        location: [{
            longitude: 23.16884030,
            latitude:53.13248859
        }]
    }
   
    componentWillMount(){
        console.time("Render map");     
    }
    renderMapEnd =() => {        
        console.timeEnd("Render map");
    }
    componentDidMount(){
        const count =this.props.match.params.count;
       
        if(count !== undefined){
           if(count === '10'){
            this.setState({location: moke10.data}) 
           }else if(count === '100') {
            this.setState({location: moke100.data}) 
           }else if(count === '500') {
            this.setState({location: moke500.data}) 
           }
          
        }else{            
            if(this.props.location.state){
                this.setState({location: this.props.location.state.location}) 
            }
           
        }

    }
    render() {
        return (
          <div className="MapComponent">
            <BackButton goBack={this.props.history.goBack}/>
            <div>
                <Map
                    style={"mapbox://styles/mapbox/streets-v8"}
                    center={[this.state.location[0].longitude, this.state.location[0].latitude]}
                    zoom={[6]}
                    onStyleLoad={this.renderMapEnd}
                    containerStyle={{
                        height: "65vh",
                        width: "100%",
                        textAlign: "left"                   
                    }}>
                    {this.state.location.map((location, index)=>{
                        return (
                            <Marker
                            key={index}
                            coordinates={[location.longitude, location.latitude]}
                            anchor="bottom">
                                <LocationOnIcon />
                            </Marker>
                        );
                    })}
                    
                        
                </Map>
            </div>
          </div>
        );
    }
}

export default MapComponent;