import React from 'react'
import './App.css'
import Select from 'react-select'
import fire from './config/firebase'
import DoctorLeaf from './DoctorLeaf'

var spl=""
var spl1=""

var i=0
const options = [{value:"na",label:"N/A"},
    { value: 'pediatrician', label: 'Pediatrician'},   //a=["skin_rash","Skin Rash"] a[0]
    { value: 'dietician', label: 'Dietician' },
    { value: 'babycian', label: 'Babycian' },
    
  ];

  const database=fire.database()
  const refRoot=database.ref("doctors")


class FindDoctor extends React.Component {

    state = {
        spl:null,
        nameDoc:null,
        emailDoc:null,
        specialityDoc:null,
      };

    handleChange= spl =>{
        this.setState({spl});
        spl1=spl
       // console.log("jhbjhb",(Object.values({spl})))
        refRoot.orderByChild("speciality").equalTo(((Object.values({spl}))[0]).value).on("value",snapshot=>{
          console.log("jhbjhb",Object.values(snapshot.val()).length)
          for(var i=1;i<=Object.values(snapshot.val()).length;i++)
          {
           this.state.nameDoc=((Object.values(snapshot.val()))[i-1])["name"]
           this.state.emailDoc=((Object.values(snapshot.val()))[i-1])["email_save"]
           this.state.specialityDoc=((Object.values(snapshot.val()))[i-1])["speciality"]

           console.log("abc",i.toString())
           document.querySelector('.docname'+i.toString()).innerHTML=this.state.nameDoc
           document.querySelector('.docemail'+i.toString()).innerHTML=this.state.emailDoc
           document.querySelector('.docspec'+i.toString()).innerHTML=this.state.specialityDoc
           document.querySelector('.contlink'+i.toString()).innerHTML="CHAT NOW"
          }

          const len=Object.values(snapshot.val()).length
          if(len<4)
          {var i=0
            for(i=len+1;i<=4;i++)
            {
              document.querySelector('.docname'+i.toString()).innerHTML=""
               document.querySelector('.docemail'+i.toString()).innerHTML=""
              document.querySelector('.docspec'+i.toString()).innerHTML=""
              document.querySelector('.contlink'+i.toString()).innerHTML=""
              
            }
          }
        })
        //document.getElementById("abcdf").innerHTML=((Object.values({spl1}))[0]).value

        //sym2=(Object.values(sel2))[0];
    }

    componentDidMount(){

    }

    

      render(){const {spl}=this.state
    return (
        <div className="body__finddoctor">
         
         <div className="findDoctor__left">
          <div className="findDoctorHeader">
           <h1 style={{fontFamily:"Rubik,sans-serif"}}>FIND A DOCTOR</h1>
         </div>

         
            <Select className="drop"
        id="drop"
          value={spl}
          onChange={this.handleChange}
          options={options}
         />


        <div className="docresults">


         
           <div className="cont1">

           <div className="docImg1"></div> 
                <h1 className="docname1" style={{marginTop:"50px"}}></h1>
                <h2 className="docemail1"></h2>
                <h2 className="docspec1" style={{marginBottom:"10px"}}></h2>
           <a href="docportal" className="contlink1" style={{paddingBottom:"60px"}}></a>
           </div>




           <div className="cont2">

             <div className="docImg2"></div>
           <h1 className="docname2" style={{marginTop:"10px"}}></h1>
                <h2 className="docemail2"></h2>
                <h2 className="docspec2" style={{marginBottom:"10px"}}></h2>
                <a href="docportal" className="contlink2" style={{paddingBottom:"20px"}}></a>
           </div>



           <div className="cont3">
           <div className="docImg2"></div>
           <h1 className="docname3" style={{marginTop:"10px"}}></h1>
                <h2 className="docemail3"></h2>
                <h2 className="docspec3" style={{marginBottom:"10px"}}></h2>
                <a href="docportal" className="contlink3" style={{marginBottom:"20px"}}></a>
           </div>



           <div className="cont4">
           <div className="docImg4"></div>
           <h1 className="docname4"style={{marginTop:"10px"}}></h1>
                <h2 className="docemail4"></h2>
                <h2 className="docspec4" style={{marginBottom:"10px"}}></h2>
                <a href="docportal" className="contlink4" style={{marginBottom:"20px"}} ></a>

           </div>

           <div className="cont4">
           <div className="docImg4"></div>
           <h1 className="docname4"style={{marginTop:"10px"}}></h1>
                <h2 className="docemail4"></h2>
                <h2 className="docspec4" style={{marginBottom:"10px"}}></h2>
                <a href="docportal" className="contlink4" style={{marginBottom:"20px"}} ></a>

           </div>

           <div className="cont4">
           <div className="docImg4"></div>
           <h1 className="docname4"style={{marginTop:"10px"}}></h1>
                <h2 className="docemail4"></h2>
                <h2 className="docspec4" style={{marginBottom:"10px"}}></h2>
                <a href="docportal" className="contlink4" style={{marginBottom:"20px"}} ></a>

           </div>

           <div className="cont4">
           <div className="docImg4"></div>
           <h1 className="docname4"style={{marginTop:"10px"}}></h1>
                <h2 className="docemail4"></h2>
                <h2 className="docspec4" style={{marginBottom:"10px"}}></h2>
                <a  href="docportal" className="contlink4" ></a>

           </div>

        </div>
        </div>
        

       
        </div>

       
    )}
}

export default FindDoctor
