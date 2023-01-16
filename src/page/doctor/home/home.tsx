import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import {
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  DescriptionContainer,
  DotRounded,
  Title
} from "./styles";

import * as Private from "@/routes/paths/paths.private";
import { DoctorServices } from "@/services/doctor/home.service";
import { IDoctorHomeData } from "@/models/doctor";
import { useModal } from "@/hooks/useModal";
import EditHomeTitle from "./edit-home-title/edit-home-title";
import { convertToHtml } from "@/utils/formarter";
import { orderChildrens } from "@/utils/order";
import { Button } from "@/components/button";

const navigateToPath = [
  Private.DOCTOR_CALENDAR_PATH(),
  Private.DOCTOR_SELECTIVE_PROCESS(),
  Private.DOCTOR_CALENDAR_PATH(),
  Private.DOCTOR_CONTACT()
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const { setTitle, setComponent, setIsVisible } = useModal();

  const [data, setData] = useState<IDoctorHomeData>();

  const getData = useCallback(async () => {
    try {
      const { data } = await DoctorServices.getHomeData();

      data.childrens = orderChildrens(data.childrens);

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
      setComponent(<EditHomeTitle data={data?.title} setData={setData} />);
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
        {data?.title && <Title dangerouslySetInnerHTML={{ __html: convertToHtml(data.title) }} />}

        <ContainerButton>
          <Button outline={true} type={"button"} onClick={handleEditTitle}>
            <span>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </ContainerButton>
      </DescriptionContainer>

      <ContainerCards>
        {data?.childrens.map((children, index) => {
          return (
            <ContentCard
              key={`card-${index}`}
              onClick={() => {
                navigate(navigateToPath[index], {
                  state: {
                    childrenId: children.id
                  }
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
