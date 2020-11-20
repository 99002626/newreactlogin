import React from 'react';
import './App.css'; 
import Login from './Login'; 
import Dashboard from './Dashboard'; 
import {Redirect} from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   

function App() {  

  return (    

    <Router>  
      
      <Redirect to="/Login"/> 

        <Switch>
          <Route exact path='/Login' component={Login} /> 
        </Switch>    

        <Switch>  

        <Route path='/Dashboard' component={Dashboard} />    

        </Switch>  

      

    </Router>   

  );  

}  


export default App;