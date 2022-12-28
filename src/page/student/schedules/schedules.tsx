import React, { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/button";
import * as S from "./styles";
import { formatIndexToLetter } from "@/utils/formarter";
import { useModal } from "@/hooks/useModal";
import { useLoading } from "@/hooks/useLoading";
import { SchedulesServices } from "@/services/student/schedules.service";
import { ISchedulesHomeData, ISchedulesHoursData } from "@/models/students/schedules";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { EditHomeTitle } from "./edit-modals/home-title";
import { CreateHourModal } from "./edit-modals/create-hour";
import { EditHourModal } from "./edit-modals/edit-hour";

const Schedules = () => {
  const { state }: { state: any } = useLocation();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [schedulesData, setSchedulesData] = useState<ISchedulesHomeData>({} as ISchedulesHomeData);
  const [schedulesHoursData, setSchedulesHoursData] = useState<ISchedulesHoursData[]>([]);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const handleOpenAddHourModal = () => {
    setTitle("Adicionar horário");

    setComponent(
      <CreateHourModal
        questionId={schedulesData?.childrens[0].id}
        setData={setSchedulesHoursData}
      />
    );

    setIsVisible(true);
  };

  const handleOpenEditTitleModal = () => {
    setTitle("Editar Horários");

    setComponent(
      <EditHomeTitle id={state.childrenId} data={schedulesData.title} setData={setSchedulesData} />
    );

    setIsVisible(true);
  };

  const handleOpenEditHourModal = (data: ISchedulesHoursData) => {
    setTitle("Editar Horário");

    setComponent(
      <EditHourModal
        hourData={data}
        questionId={schedulesData?.childrens[0].id}
        setData={setSchedulesHoursData}
      />
    );

    setIsVisible(true);
  };

  const handleDeleteHour = async (hourId: number) => {
    try {
      setLoading(true);

      await SchedulesServices.deleteHour(hourId, schedulesData.childrens[0].id);

      const { data } = await SchedulesServices.getSchedulesHours(schedulesData.childrens[0].id);

      setSchedulesHoursData(data);

      toast.success("Horário excluido com sucesso!");

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao deletar o horário");
    }
  };

  const getSchedulesData = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await SchedulesServices.getHomeData(state.childrenId);

      setSchedulesData(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar os dados dos horários");
      setLoading(false);
    }
  };

  const getSchedulesHoursData = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await SchedulesServices.getSchedulesHours(schedulesData.childrens[0].id);

      setSchedulesHoursData(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar os dados dos horários");
    }
  };
  const renderHoursList = useCallback(() => {
    return (
      <div>
        {schedulesHoursData?.map((hour, index: number) => {
          return (
            <S.ClassDataContainer key={hour.index}>
              <S.ClassDataHeaderContainer>
                <p>
                  <strong>{formatIndexToLetter(index)} - </strong>
                  {hour.group}
                </p>

                <div>
                  <button>
                    <FiEdit
                      onClick={() => {
                        handleOpenEditHourModal(hour);
                      }}
                    />
                  </button>
                  <button>
                    <BsTrash onClick={() => handleDeleteHour(hour.index)} />
                  </button>
                </div>
              </S.ClassDataHeaderContainer>

              <S.ClassDataNamesContainer>
                <ul>
                  <div>
                    <li>Orientador: {hour.mastermind}</li>
                    <li>Dia da semana: {hour.day_week}</li>
                  </div>

                  <div>
                    <li>Horário: {hour.hour}</li>
                  </div>
                </ul>
              </S.ClassDataNamesContainer>
            </S.ClassDataContainer>
          );
        })}
      </div>
    );
  }, [schedulesHoursData]);

  useEffect(() => {
    getSchedulesData();
  }, [state]);

  useEffect(() => {
    getSchedulesHoursData();
  }, [schedulesData]);

  // console.log("schedulesData:", schedulesData);
  // console.log("schedulesHoursData:", schedulesHoursData);
  // console.log("state:", state);

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
            <span>{schedulesData?.title}</span>
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
