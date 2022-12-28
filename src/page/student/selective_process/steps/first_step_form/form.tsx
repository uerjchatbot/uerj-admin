import React, { useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditPageDescription } from "../../edit_modals/page_description";
import { IEventChildrenData, IEventsHomeData, IFirstStepEventData } from "@/models/events";
import { formatIndexToLetter, formatStringDateToPtBr } from "@/utils/formarter";
import { AiOutlinePlus } from "react-icons/ai";
import { EditFirstStepEvent } from "../../edit_modals/first_step_event";
import { EventServices } from "@/services/student/events.service";
import { CreateBanking } from "../../edit_modals/create_banking";
import { IQuestionData } from "@/models/students/selective_process";

type Props = {
  id?: number;
  title?: string;
  firstQuestion?: IQuestionData;
  secondQuestion?: IQuestionData;
  thirdQuestion?: IQuestionData;
  setHomeData: React.Dispatch<React.SetStateAction<IEventsHomeData>>;
};

// const Form = ({ title, questionId, firstEvent, secondEvent, setHomeData }: Props) => {
const Form = ({ id, title, firstQuestion, secondQuestion, thirdQuestion, setHomeData }: Props) => {
  // const { setTitle, setComponent, setIsVisible } = useModal();

  // const [firstEventData, setFirstEventData] = useState<IFirstStepEventData>(
  //   {} as IFirstStepEventData
  // );
  // const [secondEventData, setSecondEventData] = useState<IFirstStepEventData>(
  //   {} as IFirstStepEventData
  // );

  // const getEventData = async (
  //   id: number,
  //   boardId: number,
  //   setData: React.Dispatch<React.SetStateAction<IFirstStepEventData>>
  // ) => {
  //   try {
  //     const response1 = await EventServices.getEventData(id);

  //     const response2 = await EventServices.getEventBoardData(boardId);

  //     const formatedData = {
  //       hour: response1.data.hour,
  //       date: response1.data.date,
  //       teachers: response2.data.teachers
  //     };

  //     setData(formatedData);
  //   } catch (error) {
  //     toast.error("Houve um erro ao pegar os dados do evento");
  //   }
  // };

  // const handleDeleteTeacher = async (
  //   teacherId: number,
  //   id: number,
  //   setData: React.Dispatch<React.SetStateAction<IFirstStepEventData>>
  // ) => {
  //   try {
  //     await EventServices.deleteTeacher(teacherId, id);

  //     const { data } = await EventServices.getEventBoardData(id);

  //     setData((oldValue) => {
  //       return { ...oldValue, ...data };
  //     });
  //   } catch (error) {
  //     toast.error("Houve um erro ao deletar o(a) professor(a)");
  //   }
  // };

  // const handleOpenEditPageDescription = () => {
  //   setTitle("Editar Eventos");

  //   setComponent(
  //     <EditPageDescription questionId={questionId || 0} text={title || ""} setData={setHomeData} />
  //   );

  //   setIsVisible(true);
  // };

  // const handleOpenAddBanking = (
  //   id = 0,
  //   setData: React.Dispatch<React.SetStateAction<IFirstStepEventData>>
  // ) => {
  //   setTitle("Adicionar Banca");

  //   setComponent(<CreateBanking questionId={id} setData={setData} />);

  //   setIsVisible(true);
  // };

  // const handleOpenEditEventInfo = (questionId = 0, hour: string, date: string, setData: any) => {
  //   setTitle(`Editar ${firstEvent?.question}`);

  //   setComponent(
  //     <EditFirstStepEvent questionId={questionId} hour={hour} date={date} setData={setData} />
  //   );

  //   setIsVisible(true);
  // };

  // useEffect(() => {
  //   if (firstEvent?.childrens) {
  //     getEventData(firstEvent.childrens[0].id, firstEvent.childrens[1].id, setFirstEventData);
  //   }
  // }, [firstEvent]);

  // useEffect(() => {
  //   if (secondEvent?.childrens) {
  //     getEventData(secondEvent.childrens[0].id, secondEvent.childrens[1].id, setSecondEventData);
  //   }
  // }, [secondEvent]);

  const handleEditHomeTitle = () => {};

  const handleOpenEditQuestionModal = (id = 0) => {};

  return (
    <S.Container>
      <S.Header>
        <p>{title}</p>

        <div>
          <Button outline={true} type={"button"}>
            <span onClick={handleEditHomeTitle}>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </div>
      </S.Header>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>1</S.DotRounded>
          <span>{firstQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{firstQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => handleOpenEditQuestionModal(firstQuestion?.id)}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>2</S.DotRounded>
          <span>{secondQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{secondQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => handleOpenEditQuestionModal(secondQuestion?.id)}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>3</S.DotRounded>
          <span>{thirdQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{thirdQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => handleOpenEditQuestionModal(thirdQuestion?.id)}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>
    </S.Container>
  );
};

export default Form;
