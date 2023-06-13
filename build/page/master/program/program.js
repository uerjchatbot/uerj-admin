import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { MASTER_PATH } from "@/routes/paths/paths.private";
import { CardItem, Container, ContainerButton, ContainerCards, ContentCard, ContentCardHeader, DotRounded, HeaderTeacher, TeacherItem, TeacherListContainer } from "./styles";
import { QuestionServices } from "@/services/question/question.service";
import { GrAdd } from "react-icons/gr";
import { CreateTeacher } from "./create_teacher";
import { EditHandbagQuestion } from "./edit-modals/handbag";
import { EditProgramQuestion } from "./edit-modals/program";
import { EditProjectQuestion } from "./edit-modals/project";
const Program = () => {
    const navigate = useNavigate();
    const { setLoading } = useLoading();
    const { state } = useLocation();
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [nodeQuestion, setNodeQuestion] = useState({});
    const [program, setProgram] = useState({});
    const [line, setLine] = useState({});
    const [project, setProject] = useState({});
    const [handbag, setHandbag] = useState({});
    const [lines, setLines] = useState({});
    const handleNavigateBack = () => navigate(MASTER_PATH());
    const getNodeQuestion = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.getQuestion(state);
            setNodeQuestion(data);
            setProgram(data.childrens[0]);
            setLine(data.childrens[1]);
            setProject(data.childrens[2]);
            setHandbag(data.childrens[3]);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            toast.error("Houve um erro ao pegar as informações");
        }
    }, []);
    const getLines = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.getQuestion(line);
            const { data: first } = await QuestionServices.getQuestion(data.childrens[0]);
            const { data: second } = await QuestionServices.getQuestion(data.childrens[1]);
            setLines({
                ...data,
                childrens: [
                    {
                        ...data.childrens[0],
                        childrens: first.childrens
                    },
                    {
                        ...data.childrens[1],
                        childrens: second.childrens
                    }
                ]
            });
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            toast.error("Houve um erro ao pegar as informações de linhas de pesquisa");
        }
    }, [line.id]);
    const handleOpenEditProgramQuestionModal = () => {
        setTitle(`Editar ${program.question}`);
        setComponent(_jsx(EditProgramQuestion, { setQuestion: setProgram, question: program }));
        setIsVisible(true);
    };
    const handleOpenEditLinesQuestionModal = () => {
        setTitle(`Editar ${line.question}`);
        // setComponent(<EditLinesQuestion setData={setChildrens} childrens={childrens} />);
        setIsVisible(true);
    };
    const handleOpenEditHandbagQuestionModal = () => {
        setTitle(`Editar ${handbag.question}`);
        setComponent(_jsx(EditHandbagQuestion, { question: handbag, setQuestion: setHandbag }));
        setIsVisible(true);
    };
    const handleOpenEditProjectQuestionModal = () => {
        setTitle(`Editar ${project.question}`);
        setComponent(_jsx(EditProjectQuestion, { setQuestion: setProject, question: project }));
        setIsVisible(true);
    };
    const handleDeleteTeacher = async (question) => {
        try {
            setLoading(true);
            await QuestionServices.deleteQuestion(question);
            setLines((state) => ({
                ...state,
                childrens: state.childrens.map((child) => {
                    return { ...child, childrens: child.childrens.filter((c) => c.id !== question.id) };
                })
            }));
            toast.success("Professor removido com sucesso");
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            toast.error("Houve um erro ao tentar deletar professor");
        }
    };
    const handleCreateTeacher = async (data) => {
        setTitle(`Adicionar Professor`);
        setComponent(_jsx(CreateTeacher, { setData: setLines, question: data.question }));
        setIsVisible(true);
    };
    useEffect(() => {
        getNodeQuestion();
    }, []);
    useEffect(() => {
        if (line.id)
            getLines();
    }, [getLines, line.id]);
    return (_jsxs(Container, { children: [_jsx(ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsx("span", { onClick: handleNavigateBack, children: "Voltar" }) }) }), _jsx(_Fragment, { children: _jsxs(ContainerCards, { children: [_jsxs(ContentCard, { children: [_jsxs(ContentCardHeader, { children: [_jsx(DotRounded, { children: "1" }), _jsx("span", { children: program.question })] }), _jsx("div", { children: _jsx("p", { dangerouslySetInnerHTML: { __html: program?.title } }) }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditProgramQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }), _jsxs(ContentCard, { children: [_jsxs(ContentCardHeader, { children: [_jsx(DotRounded, { children: "2" }), _jsx("span", { children: line.question })] }), lines.childrens &&
                                    lines.childrens.map((child, index) => (_jsxs(CardItem, { children: [_jsxs(HeaderTeacher, { children: [_jsxs("div", { children: [_jsxs("span", { children: [index + 1, "."] }), _jsx("p", { dangerouslySetInnerHTML: { __html: child.question } })] }), _jsxs("button", { onClick: () => handleCreateTeacher({ question: child }), children: ["Adicionar Professor(a) ", _jsx(GrAdd, {})] })] }), _jsx(TeacherListContainer, { children: child.childrens &&
                                                    child.childrens.map((c) => (_jsxs(TeacherItem, { children: [_jsx("p", { dangerouslySetInnerHTML: { __html: c.title } }), _jsx("button", { children: _jsx(BsTrash, { onClick: () => handleDeleteTeacher(c) }) })] }, c.id))) })] }, child.id))), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditLinesQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }), _jsxs(ContentCard, { children: [_jsxs(ContentCardHeader, { children: [_jsx(DotRounded, { children: "3" }), _jsx("span", { children: project?.question })] }), _jsx("div", { children: _jsx("p", { dangerouslySetInnerHTML: { __html: project?.title } }) }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditProjectQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] }), _jsxs(ContentCard, { children: [_jsxs(ContentCardHeader, { children: [_jsx(DotRounded, { children: "4" }), _jsx("span", { children: handbag?.question })] }), _jsx("div", { children: _jsx("p", { dangerouslySetInnerHTML: { __html: handbag?.title } }) }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEditHandbagQuestionModal, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] })] }) })] }));
};
export default Program;
//# sourceMappingURL=program.js.map