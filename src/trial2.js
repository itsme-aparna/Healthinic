import React, { useEffect } from 'react'
import axios from "axios";

import {useState} from "react"


var sym1=sessionStorage.getItem("selectedsymptom1");
var sym2=sessionStorage.getItem("selectedsymptom2");
var sym3=sessionStorage.getItem("selectedsymptom3");
var sym4=sessionStorage.getItem("selectedsymptom4");
var sym5=sessionStorage.getItem("selectedsymptom5");
var sym6=sessionStorage.getItem("selectedsymptom6");
sessionStorage.clear();



var api_url="";
var arr=[sym1,sym2,sym3,sym4,sym5,sym6];
for(var i=0;i<arr.length;i++)
{
    if(arr[i]!="" && arr[i]!=null)
    {var temp="/"+arr[i]
api_url+=temp;}
else if(arr[i]=="")
{continue;}
}


    

    
      /*  fetch(api_url).then((response)=>{
            disease=response.text();
            console.log("resp:",response)
            console.log("dis",disease)
        }
        )*/
        var postt=""
        var disss=""
        var dat=""

        function abcdef(dis1){
        disss=localStorage.getItem("predicteddis");
        }
        //var store=[]
        function awaitTime(ms){
          return new Promise(resolve=>setTimeout(resolve,ms));
        }
        
        async function api_call(){
            const response=await axios.get(api_url);
            
            dat=response.data;
            
            console.log("resp",(dat));
        //this.setState({values:dat})
            //var nowtime=new Date().getTime(); 
            //dat={value: response.data,expiry: new Date().getTime()+10000}
            //if((new Date().getTime())-(localStorage.getItem("ptime"))>15000)
            //{localStorage.clear();localStorage.setItem("predicteddis",dat);
           /// localStorage.setItem("ptime",new Date().getTime());
           // }
           // else {
           //     localStorage.clear();
           // }
           localStorage.setItem("predicteddis",dat);
           
           document.cookie='predicted='+dat;
           
           localStorage.setItem("ptime",new Date().getTime());
           //abcdef()
            //store.unshift(dat)
            
            //disss=dat;
            return dat
        }

        console.log("abcdef",dat)

    var disease=api_call()

    function Abcd(){const [post,setPost]=useState(null);
        useEffect(()=>{
            fetch(api_url).then(respons=>{
                const {tempo}=respons
                setPost(tempo)
            })
        },[])
      //  })
console.log("post",post)

        //axios.get(api_url).then(response=>{disease=response.data;disease=JSON.stringify(response);})
//const response=axios.get(api_url);
       
    
     

    
    disss=localStorage.getItem("predicteddis")
    var disss2=localStorage.getItem("predicteddis")

    //disss=disss?disss.split(','):[];
    //    disss.push(disss2)


    //disease.then(value=>{dis=value;})
//var dis=Promise.resolve(disease)
    var dis=disease;
    console.log("array:",disss)

    //var dis=(Object.values(disease))[1]
    console.log("retvalue",dis)
    
    //var myArr=Object.values(avcc);
    //var avcc=selectedopt;
        return{
            __html: disss};
    }
       // document.getElementById("displaytrial").innerHTML="hvhvgvhgvg";
    


function trial2() {
    
    
    return (
        <div>
           
            <h2 style={{fontFamily:"Rubik,sans-serif"}}>The predicted disease is: <span dangerouslySetInnerHTML={Abcd()}></span></h2>
            
        </div>

    )
}

export default trial2
export {disss}