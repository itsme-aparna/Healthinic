import React, { Component, useEffect } from 'react'
import fire from "./config/firebase"







class SearchResults extends Component {
constructor(props){
    super(props)
    this.state={
        emaildoc:"",
      
    }
}




componentDidMount(){const selectspl=sessionStorage.getItem("selectedspl")
console.log("sel",selectspl)

    //console.log("passed value",{})
    const database=fire.database();
    const rootRef=database.ref("doctors")

    database.ref("doctors").orderByChild("speciality").equalTo(selectspl).on('value',snapshot=>{
        console.log("speciality_doc",snapshot.val())
        
        for(var i=1;i<4;i++)
       {
        this.state.emaildoc=((Object.values(snapshot.val()))[i-1])["name"]
        console.log("abc",i.toString())
        document.getElementById('emaildoc'+i.toString()).innerHTML=this.state.emaildoc}
})}




    render(){return (<>
        < div className="cont1">
            <h2 id="emaildoc1"></h2>
            </ div>
            < div className="cont2">
            <h2 id="emaildoc2"></h2>
            </ div>
            < div className="cont2">
            <h2 id="emaildoc3"></h2>
            </ div>
        </>
    )}
}



export default SearchResults
