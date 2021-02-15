import React, { Component } from 'react'
import fire from './config/firebase'
import './Signup.css'
import {usernametxt} from "./SignUpBoth1"

var userrr=""
var name=""



class Signupsuccess extends Component {

    constructor(props){userrr=fire.auth().currentUser;
        if(userrr!=null)
{name=userrr.email;
localStorage.setItem("email",name)}
        super(props)
        this.state={
            username:"",
            userss:null,
            emailCurrent:""
        }
        
    }

    componentDidMount(){if(fire.auth().currentUser!=null)
        {this.setState({emailCurrent: fire.auth().currentUser.email})}
        const database=fire.database()
        const refRoot=database.ref("users");
        refRoot.orderByChild("email_save").on('value',snapshot=>{
            /*const users=[]
            snapshot.forEach(doc=>{
                const data=doc.data()
                users.push(data)
            })
            this.setState({userss:users})*/

       //console.log(snapshot.val().[{usernametxt}].["email_save"])
            
        })

    }

    /*componentDidMount(){const database=fire.database();
        const rootRef= database.ref("users")
        const rootRef1=database.ref("doctors")
        
        rootRef.orderByChild("email_save").equalTo({usernametxt}).on

    }*/

    logout(){ 
        fire.auth().signOut();
    }

    

    render()
    {const {classes}=this.props
    const user=fire.auth().currentUser
    return(

        <div style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center", height:"50vh"}}>
            <h1 style={{fontFamily:"Rubik,sans-serif", marginTop:"10%"}}>You are logged in as: {this.state.emailCurrent} </h1>
            <button style={{backgroundColor:"#42bd45",margin:"30px", color:"white", outline:"none", height:"40px",width:"100px",borderRadius:"10px",border:"none",cursor:"pointer",fontFamily:"Rubik,sans-serif"}} onClick={this.logout}>Logout</button>
            <button style={{backgroundColor:"#42bd45",marginTop:"10px", color:"white", outline:"none", height:"40px",width:"200px",borderRadius:"10px",border:"none",cursor:"pointer",fontFamily:"Rubik,sans-serif"}} href="home">Continue to Home Page!</button>
           
        </div>
        );}
}

export default Signupsuccess
export {name}
