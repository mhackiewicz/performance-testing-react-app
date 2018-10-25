import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import BackButton from './../components/BackButton';
import Grid from '@material-ui/core/Grid';

class DetailsComponent extends Component {
    componentWillMount(){
        console.timeEnd("Render details");
    }
    componentDidMount() {
        console.time("Render details");
    }
    render() {
        const person = this.props.location.state.person;
        return (
          <div className="DetailsComponent">
          <BackButton  goBack={this.props.history.goBack}/>
          <Grid container spacing={16}>
            <Grid item xs={4} className="details-image">
                <Avatar
                alt="Adelle Charles"
                src={person.picture.large} />  
            </Grid>
            <Grid item xs={8} className="detail-form">
                <div className="details-pool">
                    <span className="label">First name:</span>
                    <span className="text">{person.name.first}</span>
                </div>
                <div className="details-pool">
                    <span className="label">Last name:</span>
                    <span className="text">{person.name.last}</span>
                </div>
                <div className="details-pool">
                    <span className="label">Adress:</span>
                    <span className="text">{`${person.location.state}, ${person.location.city}, ${person.location.street}`}</span>
                </div>
                <div className="details-pool">
                    <span className="label">Phone number</span>
                    <span className="text">{person.cell}</span>
                </div>
                <div className="details-pool">
                    <span className="label">Email:</span>
                    <span className="text">{person.email}</span>
                </div>
                
            </Grid>
          </Grid>
          </div>
        );
    }
}

export default DetailsComponent;