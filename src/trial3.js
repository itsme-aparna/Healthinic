import React, { useState } from 'react'
import Modal from 'react-modal'
import "./trial3.css"
import Button from "./Button"

function Trial3() {const [modalIsOpen, setModalIsOpen]=useState(false);
    return (
        <div className="modalmain" style={{}}>
            <button onClick={()=>setModalIsOpen(true)}>Open modal</button>
            <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}><h2>TEXT</h2><div><button onClick={()=>setModalIsOpen(false)}>Close</button></div></Modal>
            <Button/>
        </div>
    )
}

export default Trial3
