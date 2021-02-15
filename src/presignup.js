import React, { Component } from 'react'
import './Signup.css'
import fire from './config/firebase'

class Presignup extends Component {

    constructor(props){
        super(props)
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this)
        this.signup=this.signup.bind(this)
        this.state={
            email:"",
            password:""
        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })
    }

signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err)
    })
}

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render()
    {
    return(
        <div className="loginpg">
            
          <img
            className="wave"
            src="https://img.techpowerup.org/201111/output-onlinepngtools-4517.png"
          />
          <div className="container">
            <div className="img">
              <img
                className="contbg"
                src="https://img.techpowerup.org/201111/undraw-healthy-lifestyle-6tyl-preview-rev-1-1.png"
                alt=""
              />
            </div>
            <div className="login-content">
              <form action="/">
                <img
                  className="avatar"
                  src="https://img.techpowerup.org/201111/avatar.png"
                  alt="ujn"
                />
                <h2 className="title">Welcome</h2>
                <div className="input-div one">
                  
    
    
    <div className="body">
    
                  <div className="wrapper">
          <div className="input-data">
            <input className="intxt" type="text" required />
            <div className="underline">
    </div>
    <label>Name</label>
          </div>
    </div>
    </div>
    
    
    
    
    
                </div>
    
                <div className="body">
    
                  <div className="wrapper">
          <div className="input-data">
            <input name="email" className="intxt" onChange={this.handleChange} value={this.state.email} type="text" required/>
            <div className="underline">
    </div>
    <label>Email</label>
          </div>
    </div>
    </div>
    
    
    
                <div className="body" style={{marginTop:"-8%"}}>
    
                  <div className="wrapper">
          <div className="input-data">
            <input name="password" className="intxt" onChange={this.handleChange} value={this.state.password} type="text" required/>
            <div className="underline">
    </div>
    <label>Password</label>
          </div>
    </div>
    </div>
                
                <div className="body" style={{marginTop:"-7%"}}>
    
                  <div className="wrapper">
          <div className="input-data">
            <input className="intxt"   type="text" required/>
            <div className="underline">
    </div>
    <label>Confirm Password</label>
          </div>
     </div>
    
     
      </div>
    
    
    
    
                
                <input onClick={this.signup} type="submit" className="btn" value="Signup" />
                <a classsName="accountbutton" onClick={this.signup} style={{fontFamily:"Rubik,sans-serif",fontSize:"14px",textDecoration:"none",color:"#42bd45"}} href="login">
                  Login
                </a>
              </form>
              
            </div>
          </div>
        </div>);}
}

export default Presignup
