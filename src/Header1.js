import React, { useState } from "react";

import "./App.css";
import fire from './config/firebase'

function NavBar() {var abc="SIGN IN | SIGN UP"
  const [open, setOpen] = useState(false);

  const authLogOut=()=>{
    fire.auth().signOut();
  }


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

        <div className="searchBar">
          <input
            className="searchtxt"
            type="text"
            name=""
            placeholder="Type to search" 
          />
        
          <a className="searchButton" href="search">
            <i className="searchimg" class="fas fa-search"></i>
          </a>
        </div>

        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
        >


          <li>
            <a id="navbtn" href="/">HOME</a>
          </li>
          <li>
            <a id="navbtn" href="about">ABOUT US</a>
          </li>
          <li>
            <a id="navbtn" href="finddoctor">FIND DOCTOR</a>
          </li>
          <li>
            <a id="navbtn" href="contact">CONTACT US</a>
          </li>
          <li>
            <a id="navbtn" className="signinbtn" href="signup">SIGN IN | SIGN UP</a>
          </li>

          <li>
            <a id="navbtn" className="signinbtn" onClick={authLogOut}>LOG OUT</a>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default NavBar;

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
