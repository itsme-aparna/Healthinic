import React from "react";
import "./Signup.css";



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

  
function LoginPage() {
  
  return (
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
        <input className="intxt" type="text" required/>
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
        <input className="intxt" type="text" required/>
        <div className="underline">
</div>
<label>Mobile</label>
      </div>
</div>
</div>



            <div className="body" style={{marginTop:"-8%"}}>

              <div className="wrapper">
      <div className="input-data">
        <input className="intxt" type="text" required/>
        <div className="underline">
</div>
<label>Email</label>
      </div>
</div>
</div>
            
            <div className="body" style={{marginTop:"-7%"}}>

              <div className="wrapper">
      <div className="input-data">
        <input className="intxt" type="text" required/>
        <div className="underline">
</div>
<label>Password</label>
      </div>
 </div>

 
  </div>




            
            <input type="submit" className="btn" value="Signup" />
            <a classsName="accountbutton" style={{fontFamily:"Rubik,sans-serif",fontSize:"14px",textDecoration:"none",color:"#42bd45"}} href="login">
              Already have an account?/Sign-In
            </a>
          </form>
          
        </div>
      </div>
    </div>



  );
}

export default LoginPage;
