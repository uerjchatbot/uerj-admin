import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-undef */
import { useState, useContext, createContext } from "react";
const ModalContext = createContext({});
export const ModalProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [component, setComponent] = useState(_jsx(_Fragment, {}));
    return (_jsx(ModalContext.Provider, { value: { isVisible, setIsVisible, title, setTitle, component, setComponent }, children: children }));
};
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("Modal context must be provided with ModalContext");
    }
    return context;
};
//# sourceMappingURL=useModal.js.map