import React, { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

import {
  IClassroomData,
  ITeachingStaffChildrenData,
  ITeachingStaffData
} from "@/models/teaching-staff";
import { Button } from "@/components/button";
import * as S from "./styles";
import { formatIndexToLetter } from "@/utils/formarter";
import { useModal } from "@/hooks/useModal";
import { EditThirdQuestion } from "../../edit_modals/third_question";
import { EditClass } from "../../edit_modals/third_question/edit_class";
import { CreateClass } from "../../edit_modals/create_class";
import { useLoading } from "@/hooks/useLoading";
import { SchedulesServices } from "@/services/student/schedules.service";
import { ISchedulesHomeData, ISchedulesHoursData } from "@/models/students/schedules";
import { STUDENT_PATH } from "@/routes/paths/paths.private";

const Schedules = () => {
  const { state }: { state: any } = useLocation();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [schedulesData, setSchedulesData] = useState<ISchedulesHomeData>({} as ISchedulesHomeData);
  const [schedulesHoursData, setSchedulesHoursData] = useState<ISchedulesHoursData[]>([]);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const getSchedulesData = async (): Promise<void> => {
    try {
      setLoading(true);

      const { data } = await SchedulesServices.getHomeData(state.childrenId);

      setSchedulesData(data);

      setLoading(false);
    } catch (error) {
      // console.log("error:", error);
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

  // const getChildrenId = async (): Promise<number[]> => {
  //   if (representation?.childrens) {
  //     const response1 = await TeachingStaffServices.getClassroomChildrenId(
  //       representation.childrens[0].id
  //     );
  //     const response2 = await TeachingStaffServices.getClassroomChildrenId(
  //       representation.childrens[1].id
  //     );

  //     setChildrenIds([response1.data.childrens[0].id, response2.data.childrens[0].id]);

  //     return [response1.data.childrens[0].id, response2.data.childrens[0].id];
  //   } else {
  //     return [0, 0];
  //   }
  // };

  // const handleOpenEditQuestionModal = () => {
  //   if (representation) {
  //     setTitle(`Editar ${representation.question}`);

  //     setComponent(
  //       <EditThirdQuestion
  //         questionId={representation.id}
  //         text={representation.question}
  //         description={representation.title}
  //         setRepresentation={setRepresentation}
  //       />
  //     );

  //     setIsVisible(true);
  //   }
  // };

  // const handleOpenEditClassModal = (
  //   representationId: number,
  //   classId: number,
  //   className: string,
  //   studentsList: string[],
  //   classType: string
  // ) => {
  //   if (representation) {
  //     setTitle(`Editar ${representation.question}`);

  //     setComponent(
  //       <EditClass
  //         questionId={childrenIds[representationId]}
  //         classId={classId}
  //         className={className}
  //         studentsList={studentsList}
  //         setData={setClassroomData}
  //         classType={classType}
  //       />
  //     );

  //     setIsVisible(true);
  //   }
  // };

  // const handleOpenAddClassModal = (representationId: number, classType: string) => {
  //   setTitle(`Adicionar Turma de ${classType}`);

  //   setComponent(
  //     <CreateClass
  //       questionId={childrenIds[representationId]}
  //       classType={classType}
  //       setData={setClassroomData}
  //     />
  //   );

  //   setIsVisible(true);
  // };

  // const handleDeleteClass = async (classId: number, questionId: number, classType: string) => {
  //   try {
  //     await TeachingStaffServices.deleteClass(classId, questionId);

  //     const { data } = await TeachingStaffServices.getClassroomChildrenData(questionId);

  //     const dataCopy = Array.from(classroomData);

  //     dataCopy[classType === "Mestrado" ? 0 : 1] = data;

  //     setClassroomData(dataCopy as unknown as [IClassroomData[], IClassroomData[]]);

  //     toast.success("Turma deletada com sucesso!");
  //   } catch (error) {
  //     toast.error("Houve um erro ao deletar a turma, tente novamente!");
  //   }
  // };

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
                    // onClick={() => {
                    //   handleOpenEditClassModal(
                    //     index,
                    //     hour.index,
                    //     hour.matter,
                    //     hour.students,
                    //     representationClass.question
                    //   );
                    // }}
                    />
                  </button>
                  <button>
                    <BsTrash
                    // onClick={() =>
                    //   handleDeleteClass(index, childrenIds[index], representationClass.question)
                    // }
                    />
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
              {/* <span onClick={handleOpenEditQuestionModal}> */}
              <span>
                Editar <BsPencil size={16} />
              </span>
            </Button>
            <S.AddSchedulesButton type={"button"}>
              {/* <span onClick={handleOpenEditQuestionModal}> */}
              <span>
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
