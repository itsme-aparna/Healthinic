import React, { useEffect } from 'react';
import styled from 'styled-components';
import './Modal.css'

/*const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .8);

  .modal {
    width: 390px;
    height: 180px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    background-color: #fff;
    border-radius: 2px;
    position: relative;
    padding: 10px;

    animation-name: grow-modal;
    animation-duration: .4s;
    animation-timing-function: ease-in-out;

    @keyframes grow-modal {
      0% { opacity: .2; }
      25% { opacity: .4; }
      50% { opacity: .6; }
      75% { opacity: .8; }
      100% { width: 410px; height: 190px; opacity: .9; }
    }

    h4 {
      text-align: center;
      color: #444;
      font-size: 1.5rem;
    }

    .modal-btns {
      display: flex;
      justify-content: center;
    }
  }
`;*/

const Modal = ({ closeModal }) => {
  let modalRef;

  const hideModal = (e) => {
    if (modalRef && !modalRef.contains(e.target)) {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener('click', hideModal)
    return () => {
      document.removeEventListener('click', hideModal);
    }
  }, []);
  
  return (
    <div className="modalaround">
      <div ref={(node) => modalRef = node} className="modal">
        <h4 className="signintxt" style={{fontFamily:"Rubik,sans-serif",fontSize:"40px"}}>WELCOME! SIGN IN TO HEALTHINIC</h4>
        <div className="signIn">
        
        <div className="signuser" style={{}}>
          <img className="signuserillust" src="https://img.techpowerup.org/201114/undraw-healthy-options-sdo3-2-removebg-preview.png" alt=""/>
          <h2 style={{fontFamily:"Rubik,sans-serif",paddingLeft:"10px",paddingRight:"10px",marginBottom:"40px",textAlign:"center"}}>FOR USER SIGN IN PRESS HERE!</h2>
          
          <div class="outer button">
        <button className="signuserbtn" href="" style={{fontFamily:"Rubik,sans-serif"}}>USER SIGN-IN</button>
        <span></span>
        <span></span>
      </div>

        </div>
        <div className="midbar" style={{backgroundColor:"black",width:"2px",height:"380px",marginTop:"15px"}}>


        </div>
        <div className="signdoctor">
          <img className="signdoctorillust" src="https://img.techpowerup.org/201114/undraw-doctors-hwty.png" alt="" />
        <h2 style={{fontFamily:"Rubik,sans-serif",paddingLeft:"10px",paddingRight:"10px",marginBottom:"40px",textAlign:"center"}}><span>FOR DOCTOR SIGN IN PRESS HERE!</span></h2>
        <div class="outer button">
        <button className="signuserbtn" href="" style={{fontFamily:"Rubik,sans-serif"}}>DOCTOR SIGN-IN</button>
        <span></span>
        <span></span>
      </div>
        </div>
        
        
        </div>
        <div className="modal-btns">
          <a href="#" className="modalClose" style={{height:"40px",width:"40px",borderRadius:'50%',marginTop:"20px",color:"#ededed",outlineColor:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={closeModal}>X</a>
        </div>
      </div>
    
    
    </div>
  )
}

export default Modal;
