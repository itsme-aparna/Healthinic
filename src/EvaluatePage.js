/*import React,{useState} from 'react'
import {browserHistory} from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css'
import './EvaluatePage.css'

const SearchbarDropdown = (props) => { 
    const { options } = props;
return (
<div className="search-bar-dropdown">
<input type="text" class="form-control" placeholder="Symptom 1"/>

<ul className="list-group">
    {options.map((option) =>{  
        return( 
        <button type="button" className="list-group-item list-group-item-action active">
           {option}
        </button>
        );
})}
  
  
  <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
  <button type="button" className="list-group-item list-group-item-action">Morbi leo risus</button>
  <button type="button" className="list-group-item list-group-item-action">Porta ac vr ac</button>
  <button type="button" className="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
</ul>
</div>
);
}

const defaultOptions=[]
for (let i=0;i<10;i++){
    defaultOptions.push('option ${i}');
    defaultOptions.push('suggestion ${i}');
    defaultOptions.push('advice ${i}');
}


function EvaluatePage() {
    const {options,setOptions}=useState([]);
    const onInputChange = (event) => {
        setOptions(
            defaultOptions.filter((option) => option.includes(event.target.value))
          );
    }
    return (
        <div className="DropDown container mt-2 mb-3" >
            <h1>search-bar-dropdown</h1>
            <SearchbarDropdown defaultOptions={defaultOptions} onInputChange={onInputChange}/>
        </div>
    )
}

export default EvaluatePage;*/

/*import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none';
    });
  }, []);
  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="Search"
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
  defaultOptions.push(`option ${i}`);
  defaultOptions.push(`suggesstion ${i}`);
  defaultOptions.push(`advice ${i}`);
}

function App() {
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    setOptions(
      defaultOptions.filter((option) => option.includes(event.target.value))
    );
  };

  return (
    <div className="App container mt-2 mb-3">
      <h1>Search Bar Dropdown</h1>
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
      <br />
      <button className="btn btn-primary">Search</button>
    </div>
  );
}

export default App;*/

import React from 'react'
import Select from 'react-select'
import "./EvaluatePage.css"

const options = [{value:"na",label:"N/A"},
    { value: 'skin_rash', label: 'Skin Rash'},   //a=["skin_rash","Skin Rash"] a[0]
    { value: 'itching', label: 'Itching' },
    { value: 'cough', label: 'Cough' },
    {value:"nodal_skin_erruptions",label:"Nodal Skin Eruptions"},
    {value:"continuous_sneezing",label:"Continuous Sneezing"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    {value:"shivering",label:"Shivering"},
    
  ];

  
//var response={};
  var sym1=null,sym2="",sym3="",sym4="",sym5="",sym6="";
   
  class EvaluatePage extends React.Component {
    
    state = {
      sel1: null,sel2:null,sel3:null,sel4:null,sel5:null,sel6:null,
    };
    //state2={sel2:null};\
    pastclear(){

    }

    handleChange = sel1 => {
      //selectedopt=document.getElementById("drop1").value;
    
     this.setState({sel1});
      //selectedopt=JSON.stringify(sel1);
      sessionStorage.setItem("selectedsymptom1",(Object.values(sel1))[0]);
      //sym1=(Object.values(sel1))[0];
      
      console.log(`Option selected:`, sel1);
    };
    handleChange2= sel2 =>{
        this.setState({sel2});
        //sym2=(Object.values(sel2))[0];
        sessionStorage.setItem("selectedsymptom2",(Object.values(sel2))[0]);
        console.log(`Option selected:`, sel2);
    }
    handleChange3 = sel3 => {
      this.setState({sel3});
      //sym3=(Object.values(sel3))[0];
      sessionStorage.setItem("selectedsymptom3",(Object.values(sel3))[0]);
      console.log(`Option selected:`, sel3);
    };
    handleChange4 = sel4 => {
      this.setState({sel4});
      //sym4=(Object.values(sel4))[0];
     sessionStorage.setItem("selectedsymptom4",(Object.values(sel4))[0]);
      console.log(`Option selected:`, sel4);
    };
    handleChange5 = sel5 => {
      this.setState({sel5});
      //sym5=(Object.values(sel5))[0];
      sessionStorage.setItem("selectedsymptom5",(Object.values(sel5))[0]);
      console.log(`Option selected:`, sel5);
    };
    handleChange6 = sel6 => {
      this.setState({sel6});
      //sym6=(Object.values(sel6))[0];
      sessionStorage.setItem("selectedsymptom6",(Object.values(sel6))[0]);
      console.log(`Option selected:`, sel6);
    };


     

    render() {
      const {sel1,sel2,sel3,sel4,sel5,sel6}= this.state;
      //const {sel2}=this.state2;
     // const api_url='https://healthinic.herokuapp.com/itching/cough';

 
      //gethealth();

        
     // async function gethealth(){
    //response=await fetch(api_url);
    //console.log(response);
    //  }
   
      return (<div className="evaluate">
      
      <svg className="app__svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor:"#42bd45", stopOpacity:"1" ,}}/>
          <stop offset="100%" style={{stopColor:"#b4fa9a",stopOpacity:"1"}} />
        </linearGradient>
      </defs>
    <path fill="url('#grad2')" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,149.3C384,149,480,203,576,208C672,213,768,171,864,149.3C960,128,1056,128,1152,160C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>

    
</svg>





<div className="eval__graphics1">
    <img className="illust1" src="https://img.techpowerup.org/201110/undraw-medical-care-movn-4-removebg-preview242.png" alt=""/>
</div>
<div className="content">
    <h2 className="eval">EVALUATE YOURSELF</h2>
    <h2 className="eval">EVALUATE YOURSELF</h2>

</div>
<div className="selector">
 <div >
  <h2 className="text"> Enter your Symptoms </h2>
   </div>


      <div className="dropdown1">
          
        <Select className="drop1"
        id="drop1"
          value={sel1}
          onChange={this.handleChange}
          options={options}
          
        />
        <Select className="drop2"
          value={sel2}
          onChange={this.handleChange2}
          options={options}
        />
        
        <Select className="drop3"
          value={sel3}
          onChange={this.handleChange3}
          options={options}
          
        />
</div>




<img className="eval__graphics" src="https://www.linkpicture.com/q/undraw_with_love_ajy1-1-3.png" alt=""/>

<div className="dropdown2">
        <Select className="drop4"
          value={sel4}
          onChange={this.handleChange4}
          options={options}
          
        />

        <Select className="drop5"
          value={sel5}
          onChange={this.handleChange5}
          options={options}
          
        />

        <Select className="drop6"
          value={sel6}
          onChange={this.handleChange6}
          options={options}
          
        />
        </div>
        
        </div>
        <div className="evalbutton">
            <a className="linkbutton" onClick="pastclear()" href="res">
                
                  SUBMIT</a>
        </div>
      


        </div>
      );
      
    }
  }


export default EvaluatePage
export {sym1,sym2,sym3,sym4,sym5,sym6}
