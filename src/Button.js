import React, { useState } from 'react'
import Modal from './Modal'

const Button = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  )
}

export default Button
