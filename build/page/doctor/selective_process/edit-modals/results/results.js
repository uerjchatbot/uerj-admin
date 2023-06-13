import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { QuestionServices } from "@/services/question/question.service";
import { DotRounded } from "../../styles";
const EditResultsQuestion = ({ results, setResults }) => {
    const { setIsVisible } = useModal();
    const [question, setQuestion] = useState(results.question);
    // const [title, setTitle] = useState(results.title);
    const [homologation, setHomologation] = useState(results?.childrens[0]);
    const [test, setTest] = useState(results?.childrens[1]);
    const [analysis, setAnalysis] = useState(results?.childrens[2]);
    const [interview, setInterview] = useState(results?.childrens[3]);
    const [language, setLanguage] = useState(results?.childrens[4]);
    const [outcome, setOutcome] = useState(results?.childrens[5]);
    const renderTextEditor = useCallback(() => {
        if (question?.length === 0)
            return _jsx(_Fragment, {});
        return (_jsxs(_Fragment, { children: [_jsxs(S.QuestionContainer, { children: [_jsx(DotRounded, { children: "9" }), question && _jsx(TextEditor, { value: question, setValue: setQuestion })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", { children: "1" }), _jsx(S.Input, { type: "text", className: "data", defaultValue: homologation.question, onChange: (e) => setHomologation({
                                ...homologation,
                                question: e.target.value
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", {}), _jsx(TextEditor, { value: homologation.title, setValue: (e) => {
                                setHomologation({
                                    ...homologation,
                                    title: e
                                });
                            } })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", { children: "2" }), _jsx(S.Input, { type: "text", className: "data", defaultValue: test.question, onChange: (e) => setTest({
                                ...test,
                                question: e.target.value
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", {}), _jsx(TextEditor, { value: test.title, setValue: (e) => setTest({
                                ...test,
                                title: e
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", { children: "3" }), _jsx(S.Input, { type: "text", className: "data", defaultValue: analysis.question, onChange: (e) => setAnalysis({
                                ...analysis,
                                question: e.target.value
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", {}), _jsx(TextEditor, { value: analysis.title, setValue: (e) => setAnalysis({
                                ...analysis,
                                title: e
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", { children: "4" }), _jsx(S.Input, { type: "text", className: "data", defaultValue: interview.question, onChange: (e) => setInterview({
                                ...interview,
                                question: e.target.value
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", {}), _jsx(TextEditor, { value: interview.title, setValue: (e) => setInterview({
                                ...interview,
                                title: e
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", { children: "5" }), _jsx(S.Input, { type: "text", className: "data", defaultValue: language.question, onChange: (e) => setLanguage({
                                ...language,
                                question: e.target.value
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", {}), _jsx(TextEditor, { value: language.title, setValue: (e) => setLanguage({
                                ...language,
                                title: e
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", { children: "6" }), _jsx(S.Input, { type: "text", className: "data", defaultValue: outcome.question, onChange: (e) => setOutcome({
                                ...outcome,
                                question: e.target.value
                            }) })] }), _jsxs(S.QuestionContainer, { children: [_jsx("span", {}), _jsx(TextEditor, { value: outcome.title, setValue: (e) => setOutcome({
                                ...outcome,
                                title: e
                            }) })] })] }));
    }, [question]);
    const handleEditText = async () => {
        try {
            if (question) {
                const node = await QuestionServices.updateQuestion({
                    ...results,
                    question
                });
                const childrens = [homologation, test, analysis, interview, language, outcome];
                await Promise.all(childrens.map(async (child) => await QuestionServices.updateQuestion(child)));
                const data = {
                    ...node.data,
                    childrens
                };
                setResults(data);
                setIsVisible(false);
                toast.success("Textos alterados com sucesso!");
            }
            else {
                toast.error("Os dados não foram carregado corretamente, tente novamente!");
            }
        }
        catch (error) {
            console.log("error:", error);
            toast.error("Houve um erro ao salvar o texto");
        }
    };
    return (_jsxs(_Fragment, { children: [renderTextEditor(), _jsx(EditTextButton, { event: handleEditText })] }));
};
export default EditResultsQuestion;
//# sourceMappingURL=results.js.map