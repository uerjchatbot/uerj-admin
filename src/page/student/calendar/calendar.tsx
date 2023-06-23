/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { STUDENT_PATH } from "@/routes/paths/paths.private";
import { EditCalendarTitle } from "./edit-calendar-title";
import {
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  ContentCardHeader,
  DescriptionContainer,
  DotRounded,
  QuestionTitle,
  Title
} from "./styles";

//? Edit Modals
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { EditFirstQuestion } from "./questions/edit-first-question";
import { EditFourthQuestion } from "./questions/edit-fourth-question";
import { EditSecondQuestion } from "./questions/edit-second-question";
import { EditThirdQuestion } from "./questions/edit-third-question";

interface UseLocationState {
  state: Question;
}
const Calendar = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  const { state } = useLocation() as UseLocationState;

  const { setTitle, setComponent, setIsVisible } = useModal();

  const [titleData, setTitleData] = useState<Question>({} as Question);

  const [firstQuestionData, setFirstQuestionData] = useState<Question>({} as Question);
  const [secondQuestionData, setSecondQuestionData] = useState<Question>({} as Question);
  const [thirdQuestionData, setThirdQuestionData] = useState<Question>({} as Question);
  const [fourthQuestionData, setFourthQuestionData] = useState<Question>({} as Question);

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  //? Get data from routes
  const getChildrensData = useCallback(async () => {
    setLoading(true);

    if (titleData.childrens) {
      try {
        titleData.childrens.forEach(async (children, index) => {
          setLoading(true);

          const { data } = await QuestionServices.getQuestion(children);

          switch (index) {
            case 0:
              setFirstQuestionData(data);
              break;
            case 1:
              setSecondQuestionData(data);
              break;
            case 2:
              setThirdQuestionData(data);
              break;
            case 3:
              setFourthQuestionData(data);
              break;
          }
        });
      } catch (error) {
        setLoading(false);
      }
    }

    setLoading(false);
  }, [titleData]);

  const getTitleData = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.getQuestion(state);

      setTitleData(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações do título");
    }
  }, []);

  //? Edit Text's modals
  const handleOpenEditTitleModal = (): void => {
    setTitle(`Editar ${titleData.question}`);

    setComponent(<EditCalendarTitle question={titleData} setData={setTitleData} />);

    setIsVisible(true);
  };

  const handleOpenEditFirstQuestionModal = (): void => {
    setTitle(`Editar ${firstQuestionData.question}`);

    setComponent(
      <EditFirstQuestion question={firstQuestionData} setQuestion={setFirstQuestionData} />
    );

    setIsVisible(true);
  };

  const handleOpenEditSecondQuestionModal = (): void => {
    setTitle(`Editar ${secondQuestionData.question}`);

    setComponent(
      <EditSecondQuestion question={secondQuestionData} setQuestion={setSecondQuestionData} />
    );

    setIsVisible(true);
  };

  const handleOpenEditThirdQuestionModal = (): void => {
    setTitle(`Editar ${secondQuestionData.question}`);

    setComponent(
      <EditThirdQuestion question={thirdQuestionData} setQuestion={setThirdQuestionData} />
    );

    setIsVisible(true);
  };

  const handleOpenEditFourthQuestionModal = (): void => {
    setTitle(`Editar ${fourthQuestionData.question}`);

    setComponent(
      <EditFourthQuestion question={fourthQuestionData} setQuestion={setFourthQuestionData} />
    );

    setIsVisible(true);
  };

  //? Render components functions
  const renderFirstQuestion = useCallback(() => {
    if (!firstQuestionData.question || !firstQuestionData.title) return <></>;

    return (
      <ContentCard>
        <ContentCardHeader>
          <DotRounded>1</DotRounded>
          <QuestionTitle>{firstQuestionData.question}</QuestionTitle>
        </ContentCardHeader>

        <Title dangerouslySetInnerHTML={{ __html: firstQuestionData.title }} />

        <Button outline={true} type={"button"}>
          <span onClick={handleOpenEditFirstQuestionModal}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContentCard>
    );
  }, [firstQuestionData]);

  const renderSecondQuestion = useCallback(() => {
    if (!secondQuestionData.question || !secondQuestionData.title) return <></>;

    return (
      <ContentCard>
        <ContentCardHeader>
          <DotRounded>2</DotRounded>
          <QuestionTitle>{secondQuestionData.question}</QuestionTitle>
        </ContentCardHeader>

        <Title dangerouslySetInnerHTML={{ __html: secondQuestionData.title }} />

        <Button outline={true} type={"button"}>
          <span onClick={handleOpenEditSecondQuestionModal}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContentCard>
    );
  }, [secondQuestionData]);

  const renderThirdQuestion = useCallback(() => {
    if (!thirdQuestionData.question || !thirdQuestionData.title) return <></>;

    return (
      <ContentCard>
        <ContentCardHeader>
          <DotRounded>3</DotRounded>
          <QuestionTitle>{thirdQuestionData.question}</QuestionTitle>
        </ContentCardHeader>

        <Title dangerouslySetInnerHTML={{ __html: thirdQuestionData.title }} />

        <Button outline={true} type={"button"}>
          <span onClick={handleOpenEditThirdQuestionModal}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContentCard>
    );
  }, [thirdQuestionData]);

  const renderFourthQuestion = useCallback(() => {
    if (!fourthQuestionData.question || !fourthQuestionData.title) return <></>;

    return (
      <ContentCard>
        <ContentCardHeader>
          <DotRounded>4</DotRounded>
          <QuestionTitle>{fourthQuestionData.question}</QuestionTitle>
        </ContentCardHeader>

        <Title dangerouslySetInnerHTML={{ __html: fourthQuestionData.title }} />

        <Button outline={true} type={"button"}>
          <span onClick={handleOpenEditFourthQuestionModal}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContentCard>
    );
  }, [fourthQuestionData]);

  useEffect(() => {
    getTitleData();
  }, []);

  useEffect(() => {
    getChildrensData();
  }, [getChildrensData]);

  return (
    <Container>
      <ContainerButton>
        <Button outline={true} type={"button"}>
          <span onClick={handleNavigateBack}>Voltar</span>
        </Button>
      </ContainerButton>

      <>
        <DescriptionContainer>
          {titleData?.title && (
            <Title
              dangerouslySetInnerHTML={{
                __html: titleData.title
              }}
            />
          )}

          <div>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditTitleModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </div>
        </DescriptionContainer>

        <ContainerCards>
          {renderFirstQuestion()}

          {renderSecondQuestion()}

          {renderThirdQuestion()}

          {renderFourthQuestion()}
        </ContainerCards>
      </>
    </Container>
  );
};

export default Calendar;
