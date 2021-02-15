import React from 'react'
import { act } from 'react-dom/test-utils'
import fire from "./config/firebase"

export const initialState={
    email:"",
    password:"",
}
var user1=fire.auth().currentUser;
const reducer=(state,action)=>{
    switch(action.type){
        case "FETCH_EMAIL": {if(user1==null)
                        {return{
                         ...state,
                             email: "",
                             }}
                        else if (user1!=null)
                        {
                          return{
                        ...state,
                        email: user1.email
                        }
                        }}
        default: return state;
    
    }
}

export default reducer; ///Kahan hai???