/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { toast } from "react-toastify";

import { Container, ContainerButton, DescriptionContainer, Input } from "./styles";
import { ICalendarTitleData } from "@/models/doctor";
import { CalendarServices } from "@/services/doctor/calentar.service";
import { DOCTOR_PATH } from "@/routes/paths/paths.private";
import { EditCalendarLink } from "./edit-calendar-link";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";

const Calendar = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state }: { state: any } = useLocation();
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [calendarData, setCalendarData] = useState<ICalendarTitleData>({} as ICalendarTitleData);

  const handleNavigateBack = () => navigate(DOCTOR_PATH());

  const getData = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await CalendarServices.getTitle(state.childrenId);

      setCalendarData(data.childrens[0]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações do título");
    }
  }, []);

  const handleOpenEditTitleModal = (questionId: number): void => {
    setTitle(`Editar Link do calendário`);

    setComponent(
      <EditCalendarLink
        data={calendarData.title}
        setData={setCalendarData}
        questionId={questionId}
      />
    );

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
          <p>{calendarData.title?.split("|")[0]}</p>

          <Input
            placeholder="Link do calendário"
            disabled
            defaultValue={calendarData.title?.split("|")[1]}
          />

          <div>
            <Button outline={true} type={"button"}>
              <span onClick={() => handleOpenEditTitleModal(calendarData.id)}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </div>
        </DescriptionContainer>
      </>
    </Container>
  );
};

export default Calendar;
