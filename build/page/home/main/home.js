import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/button";
import { GraduateCapIcon, MedalIcon, RepeatIcon, StudentIcon } from "@/page/home/icons/home-icons";
import { BsPencil } from "react-icons/bs";
import Theme from "@/styles/theme";
import { useModal } from "@/hooks/useModal";
import { DOCTOR_PATH, EGRESS_PATH, MASTER_PATH, STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EditHomeTitle } from "./edit-title";
import { Card, Container, ContainerButton, ContainerCards, ContentCard, DescriptionContainer, DotRounded } from "./styles";
const convertIcon = {
    1: _jsx(StudentIcon, { size: 48, color: Theme.colors.blue.blueDark }),
    2: _jsx(GraduateCapIcon, { size: 48, color: Theme.colors.blue.blueDark }),
    3: _jsx(MedalIcon, { size: 48, color: Theme.colors.blue.blueDark }),
    4: _jsx(RepeatIcon, { size: 48, color: Theme.colors.blue.blueDark })
};
const convertPath = [STUDENT_PATH(), DOCTOR_PATH(), MASTER_PATH(), EGRESS_PATH()];
const Home = () => {
    const { setTitle, setComponent, setIsVisible } = useModal();
    const navigate = useNavigate();
    const [homeData, setHomeData] = useState({});
    const getData = useCallback(async () => {
        try {
            const { data } = await QuestionServices.getQuestionByNodeId(0);
            setHomeData(data);
        }
        catch (error) {
            toast.error("Houve um erro ao pegar os dados da api");
        }
    }, []);
    const handleOpenEditModal = () => {
        setTitle("Editar Início");
        setComponent(_jsx(EditHomeTitle, { question: homeData, setData: setHomeData }));
        setIsVisible(true);
    };
    useEffect(() => {
        getData();
    }, []);
    return (_jsxs(Container, { children: [_jsxs(DescriptionContainer, { children: [homeData.title && _jsx("div", { dangerouslySetInnerHTML: { __html: homeData.title } }), _jsx(ContainerButton, { children: _jsx(Button, { outline: true, onClick: handleOpenEditModal, type: "button", children: _jsxs("span", { children: ["Editar ", _jsx(BsPencil, { size: 16 })] }) }) })] }), _jsx(ContainerCards, { children: homeData.childrens &&
                    homeData.childrens.map((children, index) => {
                        return (_jsxs(ContentCard, { onClick: () => navigate(convertPath[index]), children: [_jsx(DotRounded, { children: index + 1 }), _jsx(Card, { children: _jsxs("span", { children: [convertIcon[(index + 1)], _jsx("p", { children: children.question })] }) })] }, children.id));
                    }) })] }));
};
export default Home;
//# sourceMappingURL=home.js.map