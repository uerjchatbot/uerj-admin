import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { INITIAL_PATH } from "@/routes/paths/paths.public";
import { Container, ForgotPassword } from "./styles";
import { useAuth } from "@/hooks/useAuth";
import { useLoading } from "@/hooks/useLoading";
import LoginSchema from "@/schemas/login";
import { toast } from "react-toastify";
const FormLogin = () => {
    // const navigate = useNavigate();
    const { setLoading } = useLoading();
    const { handleLogin } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    function openLoginPopup() {
        window.open(`${import.meta.env.VITE_API_URL}/google/login`, "_self");
    }
    const onSubmit = async (data) => {
        try {
            setLoading(true);
            LoginSchema.isValid(data);
            await handleLogin(data);
            setLoading(false);
            openLoginPopup();
        }
        catch (error) {
            toast.error("Usuário incorreto ou não cadastrado");
            setLoading(false);
        }
    };
    return (_jsx(Container, { children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(Input, { type: "text", label: "E-mail", placeholder: "Digite seu e-mail", register: register, name: "email", required: true, errorMessage: "O email \u00E9 obrigat\u00F3rio", errors: errors }), _jsx(Input, { type: "password", label: "Senha", placeholder: "Digite sua senha", register: register, name: "password", required: true, errorMessage: "A senha \u00E9 obrigat\u00F3rio", errors: errors }), _jsx(ForgotPassword, { children: _jsx(Link, { to: INITIAL_PATH(), children: "Esqueceu sua senha?" }) }), _jsx(Button, { type: "submit", children: _jsx("p", { children: " Entrar" }) })] }) }));
};
export default FormLogin;
//# sourceMappingURL=form.js.map