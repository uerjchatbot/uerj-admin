import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { EyesClosed, EyesOpen } from "@/assets/icons/passwords-icons";
import Theme from "@/styles/theme";
import { useMemo, useState } from "react";
import { Container, ErrorMessage, Input as InputStyled, Label } from "./styles";
const Input = ({ required = false, type = "text", label, name, placeholder, value, register, errorMessage, errors }) => {
    const [clickedIconPassword, setClickedIconPassword] = useState(false);
    const showIconPassword = () => {
        if (type !== "password")
            return null;
        return clickedIconPassword ? (_jsx(EyesClosed, { color: Theme.colors.blue.blueDark, size: 14, onClick: () => setClickedIconPassword(!clickedIconPassword) })) : (_jsx(EyesOpen, { color: Theme.colors.blue.blueDark, size: 14, onClick: () => setClickedIconPassword(!clickedIconPassword) }));
    };
    const typeComponent = useMemo(() => {
        if (type === "password" && clickedIconPassword) {
            return "text";
        }
        return type;
    }, [type, clickedIconPassword]);
    return (_jsxs(_Fragment, { children: [_jsxs(Container, { children: [_jsx(Label, { children: label }), _jsx(InputStyled, { type: typeComponent, defaultValue: value, placeholder: placeholder, ...register(name, { required: required ? errorMessage : false }) }), showIconPassword()] }), errors[name] && _jsx(ErrorMessage, { children: errors[name].message })] }));
};
export default Input;
//# sourceMappingURL=input.js.map