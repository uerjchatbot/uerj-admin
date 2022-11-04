import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BsPencil } from "react-icons/bs";

import {
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  ContentCardHeader,
  DescriptionContainer,
  DotRounded
} from "./styles";

import { CalendarServices } from "@/services/student/calendar.service";
import { Button } from "@/components/button";
import { SelectOptions } from "@/components/select";

import { STUDENT_PATH } from "@/routes/paths/paths.private";

const Calendar = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<any>({});

  const [cardText1, setCardText1] = useState("Período letivo");
  const [cardText2, setCardText2] = useState("Período de recesso");

  const handleNavigateBack = () => navigate(STUDENT_PATH());

  const getData = useCallback(async () => {
    const { data } = await CalendarServices.getTitle();

    console.log("data:", data);

    setData(data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <ContainerButton>
        <Button outline={true} type={"button"}>
          <span onClick={handleNavigateBack}>Voltar</span>
        </Button>
      </ContainerButton>

      <>
        <DescriptionContainer>
          <p>{data.title}</p>

          <div>
            <Button outline={true} type={"button"}>
              <span onClick={() => console.log("voltar")}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </div>
        </DescriptionContainer>

        <ContainerCards>
          <ContentCard>
            <ContentCardHeader>
              <DotRounded>1</DotRounded>
              <span>{cardText1}</span>
            </ContentCardHeader>

            <p>
              O período letivo para alunos do PPGEdu tem início em{" "}
              <SelectOptions data={["1", "2", "3"]} />
              <SelectOptions data={["Janeiro", "Fevereiro", "Dezembro"]} />
              <SelectOptions data={["2023", "2024", "2025"]} />
              <br /> e finaliza em
              <SelectOptions data={["1", "2", "3"]} />
              <SelectOptions data={["Janeiro", "Fevereiro", "Dezembro"]} />
              <SelectOptions data={["2023", "2024", "2025"]} />
            </p>
          </ContentCard>

          <ContentCard>
            <ContentCardHeader>
              <DotRounded>2</DotRounded>
              <span>{cardText2}</span>
            </ContentCardHeader>
          </ContentCard>
        </ContainerCards>
      </>
    </Container>
  );
};

export default Calendar;
