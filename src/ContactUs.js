import React from 'react'
import "./ContactUs.css"

function ContactUs() {
    return (
    
        <div className="container1">
            <div className="contact__box">
                 <div className="left"></div>
                     
                     <div className="right">
                     <h2 className="contitle"> Contact Us</h2>
                     <input type="text" class="field" placeholder="Your Name"></input>
                     <input type="email" class="field" placeholder="Your Email"></input>
                     <input type="text" class="field" placeholder="Your Phone"></input>
                     <textarea class="field" placeholder="Message"></textarea>
                     </div>

                     
                     <a className="ContactUs__button" href="#" style={{textDecoration:"none"}}>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     SUBMIT</a>
                     
                     
                     

                     </div>
        </div>
    )
}

export default ContactUs
