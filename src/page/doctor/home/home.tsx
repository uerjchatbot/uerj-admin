import React, { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  DescriptionContainer,
  DotRounded,
  Title
} from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import * as Private from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import EditHomeTitle from "./edit-home-title/edit-home-title";

const navigateToPath = [
  Private.DOCTOR_CALENDAR_PATH(),
  Private.DOCTOR_SELECTIVE_PROCESS(),
  Private.DOCTOR_PROGRAM(),
  Private.DOCTOR_CONTACT()
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const { setTitle, setComponent, setIsVisible } = useModal();

  const [data, setData] = useState<Question>({} as Question);

  const getData = useCallback(async () => {
    try {
      const { data } = await QuestionServices.getQuestionByNodeId(2);

      setData(data);
    } catch (error) {
      console.log("error:", error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const handleBackNavigation = () => navigate(Private.HOME_PATH());

  const handleEditTitle = async (): Promise<void> => {
    try {
      setTitle("Editar texto de boas vindas");
      setComponent(<EditHomeTitle question={data} setQuestion={setData} />);
      setIsVisible(true);
    } catch (error) {
      toast.error("Houve um erro ao editar o texto");
    }
  };

  return (
    <Container>
      <ContainerButton>
        <Button outline={true} onClick={handleBackNavigation} type={"button"}>
          <span>Voltar</span>
        </Button>
      </ContainerButton>

      <DescriptionContainer>
        {data?.title && <Title dangerouslySetInnerHTML={{ __html: data.title }} />}

        <ContainerButton>
          <Button outline={true} type={"button"} onClick={handleEditTitle}>
            <span>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </ContainerButton>
      </DescriptionContainer>

      <ContainerCards>
        {data?.childrens &&
          data.childrens.map((children, index) => {
            return (
              <ContentCard
                key={`card-${index}`}
                onClick={() => {
                  navigate(navigateToPath[index], {
                    state: children
                  });
                }}>
                <DotRounded>{index + 1}</DotRounded>
                <span>{children.question}</span>
              </ContentCard>
            );
          })}
      </ContainerCards>
    </Container>
  );
};

export default Home;
