import React, { useState} from 'react'
import fire from './config/firebase'
import 'firebase/firestore';
import '@firebase/auth';
import Select from 'react-select'
// import "./EvaluatePage.css"


var docUsername=sessionStorage.getItem("currentreguser")

console.log("currentreguser",docUsername)

const Docdetails=() =>  {

    const [mob, setMob] = useState("");
    const [specialist, setSpecialist] = useState([]);
    const [hospital, setHospital] = useState("");
    const [bio, setBio] = useState("");
    const database=fire.database();
    const rootRef=database.ref('doctors')
    const handleSubmit=(e) => {
        e.preventDefault();
        rootRef.child(mob).set({
            mobile:mob,
            specialist:specialist,
            hospital:hospital,
            bio:bio,
        })
        .then(() => {
            alert('Profile Info Submitted!')
        })
        .catch((error) => {
            alert(error.message);

        });

        setMob("");
        setSpecialist("");
        setHospital("");
        setBio("");


    };
    const options = [{value:"na",label:"N/A"},
    { value: 'Allergist/Immunologist', label: 'Allergist/Immunologist'},   //a=["skin_rash","Skin Rash"] a[0]
    { value: 'Anesthesiologist', label: 'Anesthesiologist'}, 
    { value: 'Cardiologist', label: 'Cardiologist'}, 
    { value: 'Critical Care Medicine Specialist', label: 'Critical Care Medicine Specialist'}, 
    { value: 'Dermatologist', label: 'Dermatologist'}, 
    { value: 'Endocrinologist', label: 'Endocrinologist'}, 
    { value: 'Emergency Medicine Specialist', label: 'Emergency Medicine Specialist'}, 
    { value: 'Gastroenterologist', label: 'Gastroenterologist'}, 
    { value: 'Hematologist', label: 'Hematologist'}, 
    { value: 'Geneticist', label: 'Geneticist'}, 
    { value: 'Nephrologist', label: 'Nephrologist'}, 
    { value: 'Neurologist', label: 'Neurologist'}, 
    { value: 'Oncologist', label: 'Oncologist'}, 
    { value: 'Gynecologist', label: 'Gynecologist'},
    { value: 'Opthalmologist', label: 'Opthalmologist'},
    { value: 'Otolaryngologist', label: 'Otolaryngologist'},
     { value: 'Pediatrician', label: 'Pediatrician'}, 
     { value: 'Plastic Surgeon', label: 'Plastic Surgeon'}, 
     { value: 'Psychiatrist', label: 'Psychiatrist'}, 
     { value: 'Pulmonologist', label: 'Pulmonologist'}, 
     { value: 'Rheumatologist', label: 'Rheumatologist'}, 
     { value: 'Urologist', label: 'Urologist'}, 


    
  ];
    


    
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
              <form className="form"  onSubmit={handleSubmit} >
                <img
                  className="avatar"
                  src="https://img.techpowerup.org/201111/avatar.png"
                  alt="ujn"
                />
                <h2 className="title">Profile Info</h2>
                <div className="input-div one">
                  
    
    
    <div className="body">
    
                  <div className="wrapper">
          <div className="input-data">
            <input className="intxt" value={mob} onChange={(e)=> setMob(e.target.value) } type="text" required />
            <div className="underline">
    </div>
    <label>Phone No.</label>
          </div>
    </div>
    </div>

   
    
    
    
                
</div>
    
                <div className="body">
    
                  <div className="wrapper">
          <div className="input-data">
          
            {/* {options.map((item) => (
              <Select value={item.value}
               onChange={(e)=> setSpecialist(e.target.value) }
                placeholder="Specialist" className="drop" 
                options={options}>
              
            
            </Select>))} */}

<select 
    onChange={(e)=> setSpecialist(e.target.value) }
    placeholder="Specialist" className="drop" >
    {options.map((item) => (
        <option value={item.value}>{item.label}</option>
    ))}

</select>

            {/* <input name="email" value={specialist} onChange={(e)=> setSpecialist(e.target.value) } className="intxt" type="text" required/> */}
            <div className="underline">
    </div>
    {/* <label>Specialist</label> */}
          </div>
    </div>
    </div>
    
    
    
                <div className="body" style={{marginTop:"-8%"}}>
    
                  <div className="wrapper">
          <div className="input-data">
            <input name="password" value={hospital} onChange={(e)=> setHospital(e.target.value) }className="intxt"  type="text" required/>
            <div className="underline">
    </div>
    <label>Hospital</label>
          </div>
    </div>
    </div>
                
                <div className="body" style={{marginTop:"-7%"}}>
    
                  <div className="wrapper">
          <div className="input-data">
            <input className="intxt" value={bio} onChange={(e)=> setBio(e.target.value) }  type="text" required/>
            <div className="underline">
    </div>
    <label>Bio</label>
          </div>
     </div>
    
     
      </div>
    
    
    
    
                
                <input  type="submit" className="btn" value="Submit" />
                <a classsName="accountbutton"  style={{fontFamily:"Rubik,sans-serif",fontSize:"14px",textDecoration:"none",color:"#42bd45"}} href="login">
                  Login
                </a>
              </form>
              
            </div>
          </div>
        </div>);}


export default Docdetails
