import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css'
import {
  BrowserRouter,
  HashRouter ,
  Route
} from 'react-router-dom';
import MenuComponent from './pages/MenuComponent';
import ListComponent from './pages/ListComponent';
import MapComponent from './pages/MapComponent';
import DetailsComponent from './pages/DetailsComponent';


class App extends Component {


  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>                  
              <Typography variant="h6" color="inherit" noWrap>
                  Performance testing app
              </Typography>
            </Toolbar>
          </AppBar>      
          <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className="main-container">
            <Grid item xs={12}>
              <Paper className="main-paper">
                <Route exact path="/" component={MenuComponent} />
                <Route path="/list/:count" component={ListComponent} />
                <Route path="/map/:count?" component={MapComponent} />                
                <Route path="/details" component={DetailsComponent} />                
              </Paper>
            </Grid>
          </Grid>
          
        </div>
        </HashRouter>            
    );
  }
}

export default App;
