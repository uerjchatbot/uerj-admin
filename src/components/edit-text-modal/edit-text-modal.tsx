import { useModal } from "@/hooks/useModal";
import Theme from "@/styles/theme";
import { toast } from "react-toastify";
import Modal from "rsuite/Modal";

const EditTextModal = () => {
  const { isVisible, title, component, setIsVisible } = useModal();

  const handleClose = () => {
    try {
      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao fechar o modal");
    }
  };

  return (
    <Modal size="lg" open={isVisible} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title
          style={{ color: Theme.colors.blue.blueDark, fontSize: "1.5rem" }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Modal.Header>

      <Modal.Body>
        <p style={{ color: "red", fontSize: "1.1rem" }}>CTRL + B = Negrito, CTRL + I = Itálico</p>
        <p style={{ color: "red", fontSize: "1.1rem" }}>
          Use negrito e/ou itálico para datas, links e textos relevantes
        </p>
        {component}
      </Modal.Body>
    </Modal>
  );
};

export default EditTextModal;
