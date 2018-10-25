import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class MenuComponent extends Component {

    render() {
        return (
          <div className="MenuComponent">
            <ul>
                <li>
                    <Link to="/list/50"><Button variant="outlined" color="primary">List 50 persons</Button></Link>
                </li>
                <li>
                    <Link to="/list/100"><Button variant="outlined" color="primary">List 100 persons</Button></Link>
                </li>
                <li>
                    <Link to="/list/500"><Button variant="outlined" color="primary">List 500 persons</Button></Link>
                </li>
                <li>
                    <Link to="/list/5000"><Button variant="outlined" color="primary">List 5000 persons</Button></Link>
                </li>
                <li>
                    <Link to="/map/10"><Button variant="outlined" color="primary">Map 10 points</Button></Link>
                </li>
                <li>
                    <Link to="/map/100"><Button variant="outlined" color="primary">Map 100 points</Button></Link>
                </li>
                <li>
                    <Link to="/map/500"><Button variant="outlined" color="primary">Map 500 points</Button></Link>
                </li>
              
            </ul>
                
                
                
                
          </div>
        );
    }
}

export default MenuComponent;