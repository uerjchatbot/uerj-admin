import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { MASTER_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { EditContactData } from "./edit-contact-data";
import { CardContent, Container, ContainerButton, ContentCard, ContentCardHeader, DotRounded, Title } from "./styles";
const Contact = () => {
    const navigate = useNavigate();
    const { setLoading } = useLoading();
    const { state } = useLocation();
    const { setTitle, setComponent, setIsVisible } = useModal();
    const [contactData, setContactData] = useState({});
    const handleNavigateBack = () => navigate(MASTER_PATH());
    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await QuestionServices.getQuestion(state);
            setContactData(data);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            toast.error("Houve um erro ao pegar as informações do título");
        }
    }, []);
    const handleOpenEdit = () => {
        setTitle(`Editar ${contactData.question}`);
        setComponent(_jsx(EditContactData, { question: contactData, setQuestion: setContactData }));
        setIsVisible(true);
    };
    useEffect(() => {
        getData();
    }, []);
    return (_jsxs(Container, { children: [_jsx(ContainerButton, { children: _jsx(Button, { outline: true, type: "button", children: _jsx("span", { onClick: handleNavigateBack, children: "Voltar" }) }) }), _jsxs(ContentCard, { children: [_jsxs(ContentCardHeader, { children: [_jsx(DotRounded, { children: "1" }), _jsx("span", { children: contactData.question })] }), _jsx(CardContent, { children: _jsx(Title, { dangerouslySetInnerHTML: { __html: contactData.title } }) }), _jsx(Button, { outline: true, type: "button", children: _jsxs("span", { onClick: handleOpenEdit, children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) })] })] }));
};
export default Contact;
//# sourceMappingURL=contact.js.map