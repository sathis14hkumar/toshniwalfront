import Modal from 'react-bootstrap/Modal';

function CommonModal({ 
  handleClose, 
  show, 
  children, 
  customDialogClass = "", 
  customContentClass = "" 
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName={customDialogClass}
      contentClassName={customContentClass}
    >
      {children}
    </Modal>
  )
}

export default CommonModal