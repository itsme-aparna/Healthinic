import React, { useEffect } from 'react';
import {useState} from "react";

const style1={
    height: "100%",
    width:"50%",
    position:"absolute",
};

const style2={position:"relative",
    left: "100%",
    paddingLeft:"50%",
    listStyle:"none"
    
};

const style3={position:"absolute",
right:"5px",
top:"8%",listStyle:"none"};

const listStyle={textAlign:"center",
background:'white',borderRadius:"8px",marginBottom:"8px",padding:"5px",}

const List=(style)=>{
return(
    <ul style={style}>
        <li style={listStyle}>HOME</li>
        <li style={listStyle}>ABOUT US</li>
        <li style={listStyle}>SERVICES</li>
        <li style={listStyle}>CONTACT US</li> 
        <li style={listStyle}>SIGN IN/ SIGN UP</li>

    </ul>
);
};

const MobileList=()=>{
    const[active,setActive]=useState(false)
    return(<>
    <button style={{
        width:"50%",
        justifySelf:"end",
    }}
    onClick={()=>{
setActive(!active);
    }}>{active?"Close":"Show"}Menu</button>
    {active && (<><List style={style3}/></>)}
    </>
);
}



const Navbar=()=>{
    const[isMobile,setIsMobile]=useState(window.matchMedia("(max-width:768px)").matches);
    
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setIsMobile(window.matchMedia("(max-width:768px)").matches);
        });
    });
    return(
        <nav style={{
            display:"grid",
            gridTemplateColumns:"50% 50%",
            alignItems:"center",marginLeft:"auto"
        }}> 
            <h1>Brand Logo</h1>
            {isMobile? <MobileList/> :(<List style=
                {{
                    display:"flex",
                    justifyContent:"space-between",
                    flexDirection:"column",
                    listStyle:"none",
                    paddingBottom:"10px",
                    width:"100%",
                    marginLeft:"100%",
                    
                }} />)}

            
            
        </nav>
    );
}

export default Navbar;
