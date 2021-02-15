import React from 'react'
import "./Home.css"
import {Route,Switch} from "react-router-dom";
import EvaluatePage from "./EvaluatePage"



function Home() {
    return (<div className="app__body">
        <div class="app__bodyWave">
<svg className="app__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor:"#42bd45", stopOpacity:"1" ,}}/>
          <stop offset="100%" style={{stopColor:"#b4fa9a",stopOpacity:"1"}} />
        </linearGradient>
      </defs>
    <path fill="url('#grad2')" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,149.3C384,149,480,203,576,208C672,213,768,171,864,149.3C960,128,1056,128,1152,160C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>

    
</svg>
<div className="body__evaluateBox" style={{borderRadius:"5px"}}>
<h1 className="homeText" style={{}}> Too worried about your  <span className="flashtext" style={{color:"#42bd45"}}>health<span style={{color:"black"}}> ?</span></span> </h1>
<p>Get to know about serious health issues you might be having!</p>
<a className="app__evaluateButton" href="evaluate" style={{textDecoration:"none", fontWeight:"lighter", fontFamily: 'Rubik, sans-serif', fontSize: '24px'}}>EVALUATE</a>
</div>

</div>

<img class="app__graphics1" src="https://drive.google.com/uc?export=download&id=1fcyzJ4UZKRcGclMMnxOuTk0btf5b7_Bw" alt=""/>

</div> 


    );
}


export default Home


