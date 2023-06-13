import { jsx as _jsx } from "react/jsx-runtime";
import { AuthProvider } from "./useAuth";
import { LoadingProvider } from "./useLoading";
import { ModalProvider } from "./useModal";
export const AppProvider = ({ children }) => {
    return (_jsx(LoadingProvider, { children: _jsx(AuthProvider, { children: _jsx(ModalProvider, { children: children }) }) }));
};
//# sourceMappingURL=index.js.map