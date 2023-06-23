/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { DOCTOR_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question.service";
import { EditCalendarLink } from "./edit-calendar-link";
import { Container, ContainerButton, DescriptionContainer, Title } from "./styles";

interface UseLocationState {
  state: Question;
}

const Calendar = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state } = useLocation() as UseLocationState;
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [calendarData, setCalendarData] = useState<Question>({} as Question);

  const handleNavigateBack = () => navigate(DOCTOR_PATH());

  const getData = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.getQuestion(state);

      setCalendarData(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações do título");
    }
  }, []);

  const handleOpenEditTitleModal = (question: Question): void => {
    setTitle(`Editar Link do calendário`);

    setComponent(<EditCalendarLink question={calendarData} setQuestion={setCalendarData} />);

    setIsVisible(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ContainerButton>
        <Button outline={true} type={"button"}>
          <span onClick={handleNavigateBack}>Voltar</span>
        </Button>
      </ContainerButton>

      <>
        <DescriptionContainer>
          <Title dangerouslySetInnerHTML={{ __html: calendarData.title }} />

          <Button outline={true} type={"button"}>
            <span onClick={() => handleOpenEditTitleModal(calendarData)}>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </DescriptionContainer>
      </>
    </Container>
  );
};

export default Calendar;
