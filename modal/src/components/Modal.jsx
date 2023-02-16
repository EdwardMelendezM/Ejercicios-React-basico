import styles from "./modal.module.scss";
import { useRef } from "react";
const Modal = ({ children, title, root }) => {
  const ref = useRef();

  const callback = (e) => {
    root.unmount();
    document.querySelector("#modal").remove();
    ref.current.removeEventListener("animationend", callback);
  };

  const handleClick = () => {
    ref.current.classList.add(styles.fadeOut);
    ref.current.addEventListener("animationend", callback, { once: true });
  };

  return (
    <div ref={ref} className={styles.modalContainer}>
      <div className={styles.modalView}>
        <div className={styles.modalHeader}>
          <div>Titulo</div>
          <div>
            <button onClick={handleClick} className={styles.closeButton}>
              Cerrar
            </button>
          </div>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
