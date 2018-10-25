import React, { Component } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import Button from '@material-ui/core/Button';

class BackButton extends Component {
    click = () => {
        this.props.goBack();
    }
    render() {      
        return (  
            <div className="button-back-container">
                <Button variant="outlined" onClick={this.click}  color="primary"><ReplyIcon/>  Back </Button>
            </div>        
                    
        );
    }
}

export default BackButton; 