import { jsx as _jsx } from "react/jsx-runtime";
import { Container, Button } from "./styles";
const EditTextButton = ({ event }) => {
    return (_jsx(Container, { children: _jsx(Button, { onClick: event, children: "Salvar" }) }));
};
export default EditTextButton;
//# sourceMappingURL=edit-text-button.js.map