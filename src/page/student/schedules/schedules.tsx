import { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question.service";
import { CreateHourModal } from "./edit-modals/create-hour";
import { EditHourModal } from "./edit-modals/edit-hour";
import { EditHomeTitle } from "./edit-modals/home-title";
import * as S from "./styles";

interface UseLocationState {
  state: Question;
}

const Schedules = () => {
  const { state } = useLocation() as UseLocationState;

  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [homeData, setHomeData] = useState<Question>({} as Question);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const handleOpenAddHourModal = () => {
    setTitle("Adicionar horário");

    setComponent(<CreateHourModal question={homeData} setQuestion={setHomeData} />);

    setIsVisible(true);
  };

  const handleOpenEditTitleModal = () => {
    setTitle("Editar Horários");

    setComponent(<EditHomeTitle question={homeData} setQuestion={setHomeData} />);

    setIsVisible(true);
  };

  const handleOpenEditHourModal = (question: Question) => {
    setTitle("Editar Horário");

    setComponent(<EditHourModal question={question} setQuestion={setHomeData} />);

    setIsVisible(true);
  };

  const handleDeleteHour = async (question: Question) => {
    try {
      setLoading(true);

      await QuestionServices.deleteQuestion(question);

      setHomeData((state) => ({
        ...state,
        childrens: state.childrens.filter((child) => child.id !== question.id)
      }));

      toast.success("Horário excluido com sucesso!");

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao deletar o horário");
    }
  };

  const gethomeData = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.getQuestion(state);

      setHomeData(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar os dados dos horários");
      setLoading(false);
    }
  };

  const renderHoursList = useCallback(() => {
    return (
      <div>
        {homeData?.childrens?.map((child, index) => {
          return (
            <S.ClassDataContainer key={child.id}>
              <S.ClassDataHeaderContainer>
                <S.Title>
                  <strong>{index + 1}.</strong>
                  <div dangerouslySetInnerHTML={{ __html: child.title }} />
                </S.Title>

                <S.ButtonGroup>
                  <button>
                    <FiEdit
                      onClick={() => {
                        handleOpenEditHourModal(child);
                      }}
                    />
                  </button>
                  <button>
                    <BsTrash onClick={() => handleDeleteHour(child)} />
                  </button>
                </S.ButtonGroup>
              </S.ClassDataHeaderContainer>
            </S.ClassDataContainer>
          );
        })}
      </div>
    );
  }, [homeData.childrens]);

  useEffect(() => {
    gethomeData();
  }, [state]);

  return (
    <S.Container>
      <S.ContainerCards>
        <S.ButtonContainer>
          <Button outline={true} type={"button"}>
            <span onClick={handleNavigateBack}>Voltar</span>
          </Button>
        </S.ButtonContainer>

        <S.ContentCard>
          <S.ContentCardHeader>
            <span dangerouslySetInnerHTML={{ __html: homeData?.title }} />
          </S.ContentCardHeader>

          <S.EditButtonContainer>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditTitleModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
            <S.AddSchedulesButton type={"button"}>
              <span onClick={handleOpenAddHourModal}>
                Adicionar horário <IoIosPeople size={16} />
              </span>
            </S.AddSchedulesButton>
          </S.EditButtonContainer>

          <S.ClassContainer>{renderHoursList()}</S.ClassContainer>
        </S.ContentCard>
      </S.ContainerCards>
    </S.Container>
  );
};

export default Schedules;
