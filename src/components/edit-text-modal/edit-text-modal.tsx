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

      <Modal.Body>{component}</Modal.Body>
    </Modal>
  );
};

export default EditTextModal;
