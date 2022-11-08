import React, { useCallback, useEffect, useState } from "react";

import { BsPencil } from "react-icons/bs";
import { GraduateCapIcon, MedalIcon, RepeatIcon, StudentIcon } from "@/page/home/icons/home-icons";
import { Button } from "@/components/button";

import Theme from "@/styles/theme";

import {
  Container,
  ContainerButton,
  DescriptionContainer,
  ContainerCards,
  ContentCard,
  DotRounded,
  Card
} from "./styles";
import { useNavigate } from "react-router-dom";
import { STUDENT_PATH, VIEW_HOME_PATH } from "@/routes/paths/paths.private";
import { HomeServices } from "@/services/home/home.service";
import { IHomeData } from "@/models/home";
import { convertToHtml } from "@/utils/formarter";
import { orderChildrens } from "@/utils/order";
import { toast } from "react-toastify";

const convertIcon = {
  1: <StudentIcon size={48} color={Theme.colors.blue.blueDark} />,
  2: <GraduateCapIcon size={48} color={Theme.colors.blue.blueDark} />,
  3: <MedalIcon size={48} color={Theme.colors.blue.blueDark} />,
  4: <RepeatIcon size={48} color={Theme.colors.blue.blueDark} />
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const navigateToView = () => navigate(VIEW_HOME_PATH());
  const onGoToStep = (url: string) => navigate(url);

  const [homeData, setHomeData] = useState<IHomeData>({} as IHomeData);

  const getData = useCallback(async () => {
    try {
      const { data } = await HomeServices.getHomeData();

      data.childrens = orderChildrens(data.childrens);

      setHomeData(data);
    } catch (error) {
      toast.error("Houve um erro ao pegar os dados da api");
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ContainerButton>
        <Button outline={true} onClick={navigateToView} type={"button"}>
          <span>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContainerButton>

      <DescriptionContainer>
        {homeData.title && (
          <div dangerouslySetInnerHTML={{ __html: convertToHtml(homeData.title) }} />
        )}
      </DescriptionContainer>

      <ContainerCards>
        {homeData.childrens &&
          homeData.childrens.map((children, index) => {
            return (
              <ContentCard onClick={() => onGoToStep(STUDENT_PATH())} key={children.question}>
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
