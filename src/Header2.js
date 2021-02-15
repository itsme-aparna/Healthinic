import React, { useState, useEffect, Component} from "react";
import fire from './config/firebase'
import "./App.css";
import Select from 'react-select'


var emailuser=""

var userrr=""
var name=""
var spltxt=""



/*function Emailset(){var userrr=fire.auth().currentUser
    if(userrr!=null)
    {//return{__html:userrr.email}
    abc=userrr.email
}

    else if(userrr==null)
    {
        //return{__html: "SIGN IN | SIGN UP"}
        abc="SIGN IN | SIGN UP"
    }
}*/
const options = [{value:"na",label:"N/A"},
    { value: 'pediatrician', label: 'Pediatrician'},   //a=["skin_rash","Skin Rash"] a[0]
    { value: 'dietician', label: 'Dietician' },
    { value: 'babycian', label: 'Babycian' },
    
  ];


class Header extends Component {
/* constructor(props){
    super(props);
    this.state={email:"",abc:""}
   //const [open, setOpen] = useState(false);

  }*/
constructor(props){userrr=fire.auth().currentUser;
    if(userrr!=null)
{name=userrr.email;
}
else if(userrr==null){name="SIGN IN | SIGN UP"}
    super(props)
    this.state={
        spl: null
    }
}



pastclear(){

}

handleChange= spl =>{
  this.setState({spl});
  //sym2=(Object.values(sel2))[0];
  spltxt=spl
var arr=[]
arr.push((Object.values(spl))[0])
  sessionStorage.setItem("selectedspl",arr);
  console.log(`selected spl:`,sessionStorage.getItem("selectedspl"));

}



  /*  async function getEmail(){
            var a=fire.auth().currentUser
            if(a!=null){localStorage.setItem("curruser",a.email)}
            else if(a==null){localStorage.setItem("curruser","SIGN IN")}
            return
    }*/
    /*var userrr=(fire.auth().currentUser);
    if(userrr!=null)
    {abc=userrr.email}
    else if(userrr==null)
    {abc="SIGN IN | SIGN UP"}*/
    
   /* constructor(props){
        super(props);
        this.state={
            open: false
        }

    }*/

  componentDidMount(){

    
    /*const searchInput = document.querySelector('.searchtxt');
    const suggestionsPanel = document.querySelector('.suggestions');
    
    searchInput.addEventListener('keyup', function() {
      const input = searchInput.value;
      suggestionsPanel.innerHTML = '';
      const suggestions = specialities.filter(function(speciality) {
        return speciality.name.toLowerCase().startsWith(input);
      });
      suggestions.forEach(function(suggested) {
        const div = document.createElement('div');
        div.innerHTML = suggested.name;
        suggestionsPanel.appendChild(div);
      });
      if (input === '') {
        suggestionsPanel.innerHTML = '';  
      }
    })*/
    /*var user=fire.auth().currentUser
    if(user==null)
    {document.querySelector('.signinbtn').innerHTML="SIGN IN | SIGN UP"}
    else if(user!=null)
  { document.querySelector('.signinbtn').innerHTML=localStorage.getItem("email")}*/
}
 

 // var user=fire.auth().currentUser;
/*useEffect(()=>{
    var user=fire.auth().currentUser;
    if(user!=null){abc=user.email}
    else if (user==null){abc="SIGN IN"}
})*/
    
  /*  if(user!=null)
    {
            isEmail(user.email)

            
        
           document.querySelector(".signinbtn").innerHTML=user.email;

    }
    else if(user==null){
        isEmail(null)
        document.querySelector(".signinbtn").innerHTML="SIGN IN";
    }*/


 /* const emailse=()=>{var userr=fire.auth().currentUser
        if(userr!=null){isEmail(true)
        abc=userr.email
    return abc}

    
        if(userr==null){return("SIGN IN")}
*/


render(){
  
  return (
    

    <div className="app__logo">
      <nav>
        <div className="logo">
          <img
            className="app__logoImg"
            src="https://drive.google.com/uc?export=download&id=1A4jKLpG64ARhn9SdurjGrgHKNtW8X_RZ"
            alt=""
          />
        </div>

    

        <ul
          className="nav-links"
          //style={{ transform: open? "translateX(0px)" : "" }}
        >
          <li>
            <a id="navbtn" href="/">HOME</a>
          </li>
          <li>
            <a id="navbtn" href="about">ABOUT US</a>
          </li>
          <li>
            <a id="navbtn" href="services">SERVICES</a>
          </li>
          <li>
            <a id="navbtn" href="contact">CONTACT US</a>
          </li>
          
          <li>
            
            <a id="navbtn" className="signinbtn" href="signup" >{name}</a>
          </li>
        </ul>
        
      </nav>
    </div>
  );}
//<i onClick={() =>{ setOpen(!open) }} className="fas fa-bars burger"></i>
  
}




export {spltxt}
export default Header;

/* function Header() {
    return (<div className="header">
        
        <div className="header__logo">
            <img className="header__logoImg" src="https://drive.google.com/uc?export=download&id=1A4jKLpG64ARhn9SdurjGrgHKNtW8X_RZ" alt="" />

            </div>

        

            <div className="header__searchBar">
                  <input className="header__searchIn" placeholder="search"/>

            </div>



            <div className="header__menu">
                <div className='header__option'>
                    <span
                    classNme='header__optionName'>HOME</span>
                    </div>

                    <div className='header__option'>
                    <span
                    className='header__optionName'>ABOUT US</span>
                    </div>

                    <div className='header__option'>
                    <span
                    className='header__optionName'>CONTACT US</span>
                    </div>

                    <div className='header__option'>
                    <span
                    className='header__optionName'>SERVICES</span>
                    </div>

                    <div className='header__option'>
                    <span
                    className='header__optionName'>SIGN IN/SIGN UP</span>
                    </div>  
            </div>
            </div>
    );
}

export default Header 
*/
