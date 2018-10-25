import React, { Component } from 'react';
import axios from 'axios';
import PersonItem from './../components/PersonItem';
import BackButton from './../components/BackButton';
import List from '@material-ui/core/List';

class ListComponent extends Component {
    state= {
        persons: []
    }
    componentDidMount() {     
        const count =this.props.match.params.count;       
        axios.get(`https://randomuser.me/api/?results=${count}`)
        .then(response =>{           
            this.setState({persons:response.data.results})
        })                 
    }
    componentWillMount(){
        console.time("Render List");
    }
    componentDidUpdate(){
        console.timeEnd("Render List")
    }
  
    render() {
        return (
          <div className="ListComponent">
            <BackButton goBack={this.props.history.goBack}/>
            <div>
                <List>
                    {this.state.persons.map((person,key)=>{
                    return (
                        <PersonItem key={key} person={person}/>                    
                    );               
                    })}               
                    
                </List>
            </div>
          
          </div>
        );
    }
}

export default ListComponent;