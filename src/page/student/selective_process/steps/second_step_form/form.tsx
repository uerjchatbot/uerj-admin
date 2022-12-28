import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import * as S from "./styles";
import { formatStringDateToPtBr } from "@/utils/formarter";
import { useModal } from "@/hooks/useModal";
import { IEventChildrenData, IEventData, IEventsHomeData } from "@/models/events";
import { EventServices } from "@/services/student/events.service";
import { EditSecondStepEvent } from "../../edit_modals/second_step_event";
import { IQuestionData } from "@/models/students/selective_process";

type Props = {
  id?: number;
  fourthQuestion?: IQuestionData;
  fifthQuestion?: IQuestionData;
  sixthQuestion?: IQuestionData;
  seventhQuestion?: IQuestionData;
  setHomeData: React.Dispatch<React.SetStateAction<IEventsHomeData>>;
};

const Form = ({
  id,
  fourthQuestion,
  fifthQuestion,
  sixthQuestion,
  seventhQuestion,
  setHomeData
}: Props) => {
  // const { setTitle, setComponent, setIsVisible } = useModal();

  // const [thirdEventData, setThirdEventData] = useState<IEventData>({} as IEventData);
  // const [fourthEventData, setFourthEventData] = useState<IEventData>({} as IEventData);
  // const [fifthEventData, setFifthEventData] = useState<IEventData>({} as IEventData);

  // const getEventData = async (
  //   id: number,
  //   setData: React.Dispatch<React.SetStateAction<IEventData>>
  // ) => {
  //   try {
  //     const { data } = await EventServices.getEventData(id);

  //     setData(data as IEventData);
  //   } catch (error) {
  //     toast.error("Houve um erro ao pegar os dados do evento");
  //   }
  // };

  // const handleOpenEditEventModal = async (
  //   id = 0,
  //   data: IEventData,
  //   setData: React.Dispatch<React.SetStateAction<IEventData>>
  // ) => {
  //   setTitle(`Editar ${data.name}`);

  //   setComponent(<EditSecondStepEvent id={id} data={data} setData={setData} />);

  //   setIsVisible(true);
  // };

  // useEffect(() => {
  //   if (thirdEvent?.childrens) {
  //     getEventData(thirdEvent.childrens[0].id, setThirdEventData);
  //   }
  // }, [thirdEvent]);

  // useEffect(() => {
  //   if (fourthEvent?.childrens) {
  //     getEventData(fourthEvent.childrens[0].id, setFourthEventData);
  //   }
  // }, [fourthEvent]);

  // useEffect(() => {
  //   if (fifthEvent?.childrens) {
  //     getEventData(fifthEvent.childrens[0].id, setFifthEventData);
  //   }
  // }, [fifthEvent]);

  const handleOpenEditQuestionModal = (id = 0) => {};

  return (
    <S.Container>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>4</S.DotRounded>
          <span>{fourthQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{fourthQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => handleOpenEditQuestionModal(fourthQuestion?.id)}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>5</S.DotRounded>
          <span>{fifthQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{fifthQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => handleOpenEditQuestionModal(fifthQuestion?.id)}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>6</S.DotRounded>
          <span>{sixthQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{sixthQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => handleOpenEditQuestionModal(sixthQuestion?.id)}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>7</S.DotRounded>
          <span>{seventhQuestion?.question}</span>
        </S.ContentCardHeader>

        <div>
          <p>{seventhQuestion?.text}</p>
        </div>

        <Button outline={true} type={"button"}>
          <span onClick={() => handleOpenEditQuestionModal(seventhQuestion?.id)}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>
    </S.Container>
  );
};

export default Form;
