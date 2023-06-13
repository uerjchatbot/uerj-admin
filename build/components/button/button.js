import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from "./styles";
const Button = ({ children, onClick = () => { }, outline = false, type }) => {
    return (_jsx(Container, { onClick: onClick, outline: outline, type: type, children: children }));
};
export default Button;
//# sourceMappingURL=button.js.map