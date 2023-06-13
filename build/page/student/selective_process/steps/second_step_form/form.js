import { jsx as _jsx } from "react/jsx-runtime";
import * as S from "./styles";
import { CardItem } from "../../cards/card-item";
const Form = ({ question }) => {
    const childrens = [question?.childrens[1]];
    return (_jsx(S.Container, { children: childrens?.map((child, index) => (_jsx(CardItem, { question: child, index: index + 2 }, child.id))) }));
};
export default Form;
//# sourceMappingURL=form.js.map