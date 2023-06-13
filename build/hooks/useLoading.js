import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useContext, createContext } from "react";
const LoadingContext = createContext({});
export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    return (_jsx(LoadingContext.Provider, { value: { loading, setLoading }, children: children }));
};
export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading precisa ser usado com um LoadingProvider");
    }
    return context;
};
//# sourceMappingURL=useLoading.js.map