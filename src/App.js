import React from "react";
import "./App.css";
import NavBar from "./Header1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import EvaluatePage from "./EvaluatePage";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import ContactUs from "./ContactUs";
import Signup from "./Signup"

import Trial3 from "./trial3"
import Result from "./Result"
import trial4 from "./trial4"
import Presignup from './presignup'
import Header from './Header2'
import fire from './config/firebase'
import SignUpBoth1 from './SignUpBoth1'
import SearchResults from './SearchResults'
import FindDoctor from "./FindDoctor";
import DocDetails from './DocDetails'
import DocPortal from './DocPortal'
//import ChatDoctor from './chatDoctor'



function App() {var email1=""              
  
var user=fire.auth().currentUser
if(user==null){email1="SIGN IN | SIGN UP"}
else if(user!=null){email1=user.email}

  return (                                                          
    <Router>
      <div className="app">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/evaluate" exact component={EvaluatePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/contact" exact component={ContactUs}/>
          <Route path="/res" exact component={Result}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/trial" exact component={Trial3}/>
          <Route path="/trial4" exact component={SignUpBoth1}/>
          <Route path="/finddoctor" exact component={FindDoctor}/>
          <Route path="/docdetails" exact component={DocDetails}/>
          <Route path="/docportal" exact component={DocPortal}/>
          
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
