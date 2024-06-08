import { FC, ReactNode, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext/AppContext";

interface ModalPropTypes {
  children: ReactNode;
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal: FC<ModalPropTypes> = ({ children, isOpen, onClose }) => {
  // Detener propagación del evento onClose
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // Carga de contexto
  const { setScrollLock } = useContext(AppContext);

  // Efecto para bloquear scroll
  useEffect(() => {
    if (isOpen === true) {
      setScrollLock(true);
    } else {
      setScrollLock(false);
    }
  }, [isOpen]);

  // Return del componente
  return (
    isOpen && (
      <div
        className={`modal_container ${isOpen ? "active" : ""}`}
        onClick={onClose}
      >
        <div className="modal_content" onClick={handleContentClick}>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
