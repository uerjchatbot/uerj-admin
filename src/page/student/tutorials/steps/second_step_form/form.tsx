import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { toast } from "react-toastify";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { ITutorialHomeChildrenData, ITutorialHomeData } from "@/models/students/tutorials";
import { formatIndexToLetter } from "@/utils/formarter";
import { useLoading } from "@/hooks/useLoading";
import { TutorialServices } from "@/services/student/tutorial.service";
import { EditQuestion } from "../../edit-modals/edit-question";
import { EditQuestionChildren } from "../../edit-modals/edit-question-children";
import { EditCalendar } from "../../edit-modals/edit-calendar";

type Props = {
  id?: number;
  secondQuestion: ITutorialHomeChildrenData;
  setHomeData: React.Dispatch<React.SetStateAction<ITutorialHomeData>>;
};

const Form = ({ id, secondQuestion, setHomeData }: Props) => {
  const { setLoading } = useLoading();
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [calendarData, setCalendarData] = useState<ITutorialHomeData>({} as ITutorialHomeData);

  const handleOpenEditQuestionModal = (
    questionIndex: number,
    questionId = 0,
    question = "",
    text = ""
  ) => {
    setTitle(`Editar ${question}`);

    const data = {
      id: id,
      index: questionIndex,
      questionId: questionId,
      question: question,
      title: text,
      setData: setHomeData
    };

    setComponent(<EditQuestion data={data} />);

    setIsVisible(true);
  };

  const handleOpenEditQuestionChildrenModal = (questionId = 0, question: string, text = "") => {
    setTitle(`Editar ${question}`);

    const data = {
      id: id,
      questionId: questionId,
      title: text,
      setData: setHomeData
    };

    setComponent(<EditQuestionChildren data={data} />);

    setIsVisible(true);
  };

  const handleOpenEditQuestionCalendarModal = (questionId = 0, question: string, text = "") => {
    setTitle(`Editar ${question}`);

    const data = {
      id: id,
      questionId: questionId,
      title: text,
      datesArr: calendarData,
      setData: setCalendarData
    };

    setComponent(<EditCalendar data={data} />);

    setIsVisible(true);
  };

  const getTutorialCalendarData = async () => {
    try {
      setLoading(true);

      const { data } = await TutorialServices.getHomeData(secondQuestion.childrens[4].id);

      setCalendarData(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar os dados do calendário");
      setLoading(false);
    }
  };

  useEffect(() => {
    getTutorialCalendarData();
  }, [secondQuestion]);

  return (
    <S.Container>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>2</S.DotRounded>
          <span>{secondQuestion?.question}</span>
        </S.ContentCardHeader>
        <div>
          <p>{secondQuestion?.title}</p>
        </div>
        <Button
          outline={true}
          type={"button"}
          onClick={() =>
            handleOpenEditQuestionModal(
              2,
              secondQuestion?.id,
              secondQuestion?.question,
              secondQuestion?.title
            )
          }>
          <span>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      {secondQuestion.childrens && (
        <S.DataList>
          {secondQuestion.childrens.map((children, index) => {
            return (
              <li key={`children - ${children.question}`}>
                <div>
                  <h4>
                    <strong>{formatIndexToLetter(index)} - </strong>
                    {children.question}
                  </h4>
                </div>

                {children.question === "Calendário" ? (
                  <S.DataList>
                    {calendarData?.childrens?.map((calendarData, index) => {
                      return (
                        <li key={`${calendarData.title}`}>
                          <strong>{index + 1} - </strong>
                          {calendarData.title.replaceAll("|", "")}
                        </li>
                      );
                    })}
                  </S.DataList>
                ) : (
                  <p>{children.title}</p>
                )}

                <Button
                  outline={true}
                  type={"button"}
                  onClick={() => {
                    if (children.question !== "Calendário") {
                      handleOpenEditQuestionChildrenModal(
                        children?.id,
                        children?.question,
                        children?.title
                      );
                    } else {
                      handleOpenEditQuestionCalendarModal(
                        children?.id,
                        children?.question,
                        children?.title
                      );
                    }
                  }}>
                  <span>
                    Editar <BsPencil size={16} />
                  </span>
                </Button>
              </li>
            );
          })}
        </S.DataList>
      )}
    </S.Container>
  );
};

export default Form;
