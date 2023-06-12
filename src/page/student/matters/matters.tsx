import { useCallback, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { CreateDisciplineModal } from "./create-discipline";
import { HomeTitle } from "./edit-modals/home-title";
import { EditMatterText } from "./edit-modals/matter-text";
import * as S from "./styles";

interface UseLocationState {
  state: Question;
}

const Matters = () => {
  const { state } = useLocation() as UseLocationState;

  const navigate = useNavigate();
  const { setTitle, setComponent, setIsVisible } = useModal();
  const [homeData, setHomeData] = useState<Question>({} as Question);

  const getMattersData = useCallback(async () => {
    const { data } = await QuestionServices.getQuestion(state);

    const { data: master } = await QuestionServices.getQuestion(data.childrens[0]);
    const { data: doctor } = await QuestionServices.getQuestion(data.childrens[1]);

    setHomeData({ ...data, childrens: [master, doctor] });
  }, [state, setHomeData]);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const handleOpenEditHomeTitle = () => {
    setTitle("Editar Disciplinas");

    setComponent(<HomeTitle question={homeData} setQuestion={setHomeData} />);

    setIsVisible(true);
  };

  const handleOpenAddDisciplineModal = (question: Question) => {
    setTitle(`Criar disciplina de ${question.question}`);

    setComponent(<CreateDisciplineModal question={question} setQuestion={setHomeData} />);

    setIsVisible(true);
  };

  const handleEditMatterText = (question: Question) => {
    setTitle(`Editar texto das turmas de ${question.question}`);

    setComponent(<EditMatterText question={question} setQuestion={setHomeData} />);

    setIsVisible(true);
  };

  const handleDeleteDiscipline = async (question: Question) => {
    try {
      await QuestionServices.deleteQuestion(question);
      setHomeData((state) => ({
        ...state,
        childrens: state.childrens.map((child) => ({
          ...child,
          childrens: child.childrens.filter((c) => c.id !== question.id)
        }))
      }));

      toast.success("Disciplina excluida com sucesso");
    } catch (error) {
      toast.error("Houve um erro ao deletar a disciplina");
    }
  };

  useEffect(() => {
    getMattersData();
  }, [getMattersData]);

  return (
    <S.Container>
      <S.Header>
        <S.ButtonContainer>
          <Button outline={true} type={"button"}>
            <span onClick={handleNavigateBack}>Voltar</span>
          </Button>
        </S.ButtonContainer>

        <S.TitleContainer>
          <S.Title dangerouslySetInnerHTML={{ __html: homeData.title }} />

          <Button outline={true} type={"button"}>
            <span onClick={handleOpenEditHomeTitle}>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </S.TitleContainer>
      </S.Header>

      {homeData?.childrens?.map((child, index) => {
        return (
          <S.Content key={child.id}>
            <S.ContentHeader>
              <S.DotRounded>{index + 1}</S.DotRounded>
              <span>{child.question}</span>
            </S.ContentHeader>

            <S.ContentBody>
              <S.Title dangerouslySetInnerHTML={{ __html: child.title }} />

              <S.MatterHeaderContainer>
                <Button outline={true} type={"button"}>
                  <span onClick={() => handleEditMatterText(child)}>
                    Editar <BsPencil size={16} />
                  </span>
                </Button>

                <S.AddMatter type={"button"}>
                  <span onClick={() => handleOpenAddDisciplineModal(child)}>
                    Adicionar disciplina <AiOutlinePlus size={16} />
                  </span>
                </S.AddMatter>
              </S.MatterHeaderContainer>

              <S.MattersList>
                {child?.childrens?.map((c, cindex) => (
                  <li key={c.id}>
                    <div>
                      <strong>{cindex + 1} - </strong>
                      <S.Title>{c.title}</S.Title>
                    </div>

                    <button>
                      <BsTrash onClick={() => handleDeleteDiscipline(c)} />
                    </button>
                  </li>
                ))}
              </S.MattersList>
            </S.ContentBody>
          </S.Content>
        );
      })}
    </S.Container>
  );
};

export default Matters;
