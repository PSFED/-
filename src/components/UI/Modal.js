import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = ({ onHideCart }) => {
  return <div className={styles.backdrop} onClick={onHideCart}></div>
}

const ModalWindow = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

const Modal = ({ children, onHideCart }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        document.getElementById('overlays')
      )}
    </>
  )
}

export default Modal
