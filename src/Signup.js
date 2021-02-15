import React,{Component, useRef} from "react";
import "./Signup.css";
import {useAuth,AuthProvider} from './contexts/AuthContext'
import fire from './config/firebase'
import Home from './Home'
import Presignup from "./presignup";
import Signupsuccess from './Signupsuccess'
import SignUpBoth1 from "./SignUpBoth1";
import DocDetails from "./DocDetails"

var typeuser=""
typeuser=sessionStorage.getItem("typeuser")


class Signup extends Component{

  constructor(props)
  {
    super(props);
    this.state={
      user:{},
      typeuser: null,
    }
  }

  componentDidMount()
  {
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {this.setState({user})}
      else{this.setState({user:null})}
    })
  }

  render(){return(
    <div className="signuppp">
{this.state.user? (<Signupsuccess/>): (<SignUpBoth1/>)}
    </div>
  );
    

  }
}

const inputs = document.querySelectorAll(".input");
function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });

  

export default Signup;
