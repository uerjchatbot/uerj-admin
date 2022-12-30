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
// import { EditQuestion } from "../../edit-modals/edit-question";

type Props = {
  id?: number;
  title?: string;
  firstQuestion: ITutorialHomeChildrenData;
  setHomeData: React.Dispatch<React.SetStateAction<ITutorialHomeData>>;
};

const Form = ({ id, title, firstQuestion, setHomeData }: Props) => {
  const { setLoading } = useLoading();
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [calendarData, setCalendarData] = useState<ITutorialHomeData>({} as ITutorialHomeData);

  const handleEditHomeTitle = () => {
    setTitle(`Editar Instruções e tutoriais`);

    const data = {
      id: id,
      questionId: id,
      title: title,
      setData: setHomeData
    };

    // setComponent(<EditQuestion data={data} />);
    setComponent(<></>);

    setIsVisible(true);
  };

  const getTutorialCalendarData = async () => {
    try {
      setLoading(true);

      const { data } = await TutorialServices.getHomeData(firstQuestion.childrens[4].id);

      setCalendarData(data);

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao pegar os dados do calendário");
      setLoading(false);
    }
  };

  // const handleOpenEditQuestionModal = (
  //   questionIndex: number,
  //   questionId = 0,
  //   question = "",
  //   text = ""
  // ) => {
  //   setTitle(`Editar ${question}`);

  //   const data = {
  //     id: id,
  //     index: questionIndex,
  //     questionId: questionId,
  //     question: question,
  //     title: text,
  //     setData: setHomeData
  //   };

  //   setComponent(<EditQuestion data={data} />);

  //   setIsVisible(true);
  // };

  useEffect(() => {
    getTutorialCalendarData();
  }, [firstQuestion]);

  // console.log("firstQuestion:", firstQuestion);
  console.log("calendarData:", calendarData);

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
          <p>{firstQuestion?.title}</p>
        </div>
        <Button outline={true} type={"button"}>
          <span
          //  onClick={() =>
          //    handleOpenEditQuestionModal(
          //      1,
          //      firstQuestion?.id,
          //      firstQuestion?.question,
          //      firstQuestion?.text
          //    )
          //  }
          >
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </S.ContentCard>

      {firstQuestion.childrens && (
        <S.DataList>
          {firstQuestion.childrens.map((children, index) => {
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

                <Button outline={true} type={"button"}>
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
