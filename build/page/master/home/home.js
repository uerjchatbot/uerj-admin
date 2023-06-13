import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, ContainerButton, ContainerCards, ContentCard, DescriptionContainer, DotRounded, Title } from "./styles";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import * as Private from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import EditHomeTitle from "./edit-home-title/edit-home-title";
const navigateToPath = [
    Private.MASTER_CALENDAR_PATH(),
    Private.MASTER_SELECTIVE_PROCESS(),
    Private.MASTER_PROGRAM(),
    Private.MASTER_CONTACT()
];
const Home = () => {
    const navigate = useNavigate();
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [data, setData] = useState({});
    const getData = useCallback(async () => {
        try {
            const { data } = await QuestionServices.getQuestionByNodeId(3);
            setData(data);
        }
        catch (error) {
            console.log("error:", error);
        }
    }, []);
    useEffect(() => {
        getData();
    }, []);
    const handleBackNavigation = () => navigate(Private.HOME_PATH());
    const handleEditTitle = async () => {
        try {
            setTitle("Editar texto de boas vindas");
            setComponent(_jsx(EditHomeTitle, { question: data, setQuestion: setData }));
            setIsVisible(true);
        }
        catch (error) {
            toast.error("Houve um erro ao editar o texto");
        }
    };
    return (_jsxs(Container, { children: [_jsx(ContainerButton, { children: _jsx(Button, { outline: true, onClick: handleBackNavigation, type: "button", children: _jsx("span", { children: "Voltar" }) }) }), _jsxs(DescriptionContainer, { children: [data?.title && _jsx(Title, { dangerouslySetInnerHTML: { __html: data.title } }), _jsx(ContainerButton, { children: _jsx(Button, { outline: true, type: "button", onClick: handleEditTitle, children: _jsxs("span", { children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsx(ContainerCards, { children: data?.childrens &&
                    data.childrens.map((children, index) => {
                        return (_jsxs(ContentCard, { onClick: () => {
                                navigate(navigateToPath[index], {
                                    state: children
                                });
                            }, children: [_jsx(DotRounded, { children: index + 1 }), _jsx("span", { children: children.question })] }, `card-${index}`));
                    }) })] }));
};
export default Home;
//# sourceMappingURL=home.js.map