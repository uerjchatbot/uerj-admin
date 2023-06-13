import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
import { api } from "@/services/api";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LoginService } from "@/services/login.service";
const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
    const [localUserData, setLocalUserData] = useLocalStorage({
        key: "userData",
        initialValue: {}
    });
    const [userData, setUserData] = useState(localUserData);
    api.defaults.headers.common = {
        Authorization: `Bearer ${userData.token}`
    };
    const handleLogin = async (formData) => {
        try {
            const { data } = await LoginService.login(formData);
            setLocalUserData({ token: data.token });
            setUserData(() => ({
                token: data.token
            }));
        }
        catch (error) {
            throw new Error("Auth Failed");
        }
    };
    const handleLogout = () => {
        setUserData({});
        localStorage.removeItem("userData");
    };
    return (_jsx(AuthContext.Provider, { value: {
            userData,
            handleLogin,
            handleLogout
        }, children: children }));
};
const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth precisa ser usado com um AuthProvider");
    }
    return context;
};
export { AuthProvider, useAuth };
//# sourceMappingURL=useAuth.js.map