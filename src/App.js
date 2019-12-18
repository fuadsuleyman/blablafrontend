import React from 'react';
import Navi from "./components/Navi"
import Login from "./components/Login";
import Register from "./components/Register"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (

      <Router>
      <div>
        <Navi/>
        <Route path="/home" exact component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Footer/>
      </div>
      </Router>
  );
}

export default App;
