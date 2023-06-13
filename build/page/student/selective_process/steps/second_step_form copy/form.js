import { jsx as _jsx } from "react/jsx-runtime";
import * as S from "./styles";
import { CardItem } from "../../cards/card-item";
const Form = ({ question }) => {
    const childrens = [question?.childrens[2], question?.childrens[3]];
    return (_jsx(S.Container, { children: childrens?.map((child, index) => (_jsx(CardItem, { question: child, index: index + 3 }, child.id))) }));
};
export default Form;
//# sourceMappingURL=form.js.map