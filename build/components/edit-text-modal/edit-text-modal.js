import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModal } from "@/hooks/useModal";
import Theme from "@/styles/theme";
import { toast } from "react-toastify";
import Modal from "rsuite/Modal";
const EditTextModal = () => {
    const { isVisible, title, component, setIsVisible } = useModal();
    const handleClose = () => {
        try {
            setIsVisible(false);
        }
        catch (error) {
            toast.error("Houve um erro ao fechar o modal");
        }
    };
    return (_jsxs(Modal, { size: "lg", open: isVisible, onClose: handleClose, children: [_jsx(Modal.Header, { children: _jsx(Modal.Title, { style: { color: Theme.colors.blue.blueDark, fontSize: "1.5rem" }, dangerouslySetInnerHTML: { __html: title } }) }), _jsxs(Modal.Body, { children: [_jsx("p", { style: { color: "red", fontSize: "1.1rem" }, children: "CTRL + B = Negrito, CTRL + I = It\u00E1lico" }), _jsx("p", { style: { color: "red", fontSize: "1.1rem" }, children: "Use negrito e/ou it\u00E1lico para datas, links e textos relevantes" }), component] })] }));
};
export default EditTextModal;
//# sourceMappingURL=edit-text-modal.js.map