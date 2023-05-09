import React, { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/button";
import { GraduateCapIcon, MedalIcon, RepeatIcon, StudentIcon } from "@/page/home/icons/home-icons";
import { BsPencil } from "react-icons/bs";

import Theme from "@/styles/theme";

import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { DOCTOR_PATH, EGRESS_PATH, MASTER_PATH, STUDENT_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EditHomeTitle } from "./edit-title";
import {
  Card,
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  DescriptionContainer,
  DotRounded
} from "./styles";

const convertIcon = {
  1: <StudentIcon size={48} color={Theme.colors.blue.blueDark} />,
  2: <GraduateCapIcon size={48} color={Theme.colors.blue.blueDark} />,
  3: <MedalIcon size={48} color={Theme.colors.blue.blueDark} />,
  4: <RepeatIcon size={48} color={Theme.colors.blue.blueDark} />
};

const convertPath = [STUDENT_PATH(), DOCTOR_PATH(), MASTER_PATH(), EGRESS_PATH()];

const Home: React.FC = () => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const navigate = useNavigate();

  const [homeData, setHomeData] = useState<Question>({} as Question);

  const getData = useCallback(async () => {
    try {
      const { data } = await QuestionServices.getQuestionByNodeId(0);

      setHomeData(data);
    } catch (error) {
      toast.error("Houve um erro ao pegar os dados da api");
    }
  }, []);

  const handleOpenEditModal = () => {
    setTitle("Editar Início");
    setComponent(<EditHomeTitle question={homeData} setData={setHomeData} />);
    setIsVisible(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <DescriptionContainer>
        {homeData.title && <div dangerouslySetInnerHTML={{ __html: homeData.title }} />}
        <ContainerButton>
          <Button outline={true} onClick={handleOpenEditModal} type={"button"}>
            <span>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </ContainerButton>
      </DescriptionContainer>

      <ContainerCards>
        {homeData.childrens &&
          homeData.childrens.map((children, index) => {
            return (
              <ContentCard onClick={() => navigate(convertPath[index])} key={children.id}>
                <DotRounded>{index + 1}</DotRounded>
                <Card>
                  <span>
                    {convertIcon[(index + 1) as keyof typeof convertIcon]}
                    <p>{children.question}</p>
                  </span>
                </Card>
              </ContentCard>
            );
          })}
      </ContainerCards>
    </Container>
  );
};

export default Home;
