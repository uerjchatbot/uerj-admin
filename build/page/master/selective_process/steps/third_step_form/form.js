import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import * as S from "./styles";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { EditResourcesQuestion } from "../../edit-modals/resources";
import { EditResultsQuestion } from "../../edit-modals/results";
const Form = ({ data }) => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [resources, setResources] = useState(data?.resources);
    const [results, setResults] = useState(data?.results);
    const getResultChildrens = useCallback(async () => {
        const { data } = await QuestionServices.getQuestion(results);
        setResults((state) => ({
            ...state,
            childrens: data?.childrens
        }));
    }, [data?.results]);
    const handleOpenEditResultsQuestionModal = () => {
        setTitle(`Editar ${results.question}`);
        setComponent(_jsx(EditResultsQuestion, { results: results, setResults: setResults }));
        setIsVisible(true);
    };
    const handleOpenEditResourcesQuestionModal = () => {
        setTitle(`Editar ${resources.question}`);
        setComponent(_jsx(EditResourcesQuestion, { resources: resources, setResources: setResources }));
        setIsVisible(true);
    };
    useEffect(() => {
        getResultChildrens();
    }, [getResultChildrens]);
    return (_jsx(_Fragment, { children: _jsxs(S.ContainerCards, { children: [_jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "9" }), results && _jsx("span", { dangerouslySetInnerHTML: { __html: results.question } })] }), _jsx(S.Title, { dangerouslySetInnerHTML: { __html: results.title } }), results &&
                            results?.childrens?.map((child, index) => (_jsxs(S.CardItem, { children: [_jsx("span", { children: _jsx(S.Title, { dangerouslySetInnerHTML: {
                                                __html: `<strong>${index + 1} - </strong> ${child.question}`
                                            } }) }), _jsx(S.Title, { dangerouslySetInnerHTML: { __html: child.title } })] }, child.id))), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditResultsQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsxs(S.ContentCard, { children: [_jsxs(S.ContentCardHeader, { children: [_jsx(S.DotRounded, { children: "10" }), results && _jsx("span", { dangerouslySetInnerHTML: { __html: resources.question } })] }), _jsx(S.Title, { dangerouslySetInnerHTML: { __html: resources.title } }), _jsx(S.ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditResourcesQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] })] }) }));
};
export default Form;
//# sourceMappingURL=form.js.map