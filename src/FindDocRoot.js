import React from 'react'
import fire from "./config/firebase"
import AlreadyDoc from './alreadyDoc'
import FindDoctor from './FindDoctor'

function FindDocRoot() {
    const database=fire.database()
    const rootRef=(fire.database()).ref("doctors")
    const currentuser=fire.auth().currentUser
    var userEmail=""
    if(currentuser!=null)
    {
        userEmail=currentuser.email
        rootRef.orderByChild("doctors").equalTo(userEmail).on("value",snapshot=>{
            if(snapshot.val()!=null){return <AlreadyDoc/>}
            else if(snapshot.val()==null){
                return <FindDoctor/>
            }

            
        })
    }
    else {userEmail=""
return <FindDoctor/>}

   
}

export default FindDocRoot
