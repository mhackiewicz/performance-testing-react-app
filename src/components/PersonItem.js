import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItem,ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';

class PersonItem extends Component {

    render() {
        const person = this.props.person;
        const location = [person.location.coordinates]
        return (
          <ListItem>  
               <Avatar
                alt="Adelle Charles"
                src={person.picture.medium} />           
              <ListItemText primary={`${person.name.last} ${person.name.first}`} secondary={`${person.location.state}, ${person.location.city}, ${person.location.street}`} />
              <ListItemSecondaryAction>
                <Link to={{ pathname: '/map', state: {location} }}>
                    <IconButton aria-label="location">
                        <LocationOnIcon />
                    </IconButton>     
                </Link>   
                <Link to={{ pathname: '/details', state: {person} }}>
                    <IconButton aria-label="location">
                        <PersonIcon />
                    </IconButton>     
                </Link>         
              </ListItemSecondaryAction>
          </ListItem>
        );
    }
}

export default PersonItem;