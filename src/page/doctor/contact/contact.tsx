/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { toast } from "react-toastify";

import {
  CardContent,
  Container,
  ContainerButton,
  ContentCard,
  ContentCardHeader,
  DotRounded
} from "./styles";
import { ICalendarTitleData } from "@/models/doctor";
import { ContactServices } from "@/services/doctor/contact.service";
import { DOCTOR_PATH } from "@/routes/paths/paths.private";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditContactData } from "./edit-contact-data";

const Contact = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state }: { state: any } = useLocation();
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [contactData, setContactData] = useState<ICalendarTitleData>({} as ICalendarTitleData);

  const handleNavigateBack = () => navigate(DOCTOR_PATH());

  const getData = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await ContactServices.getData(state.childrenId);

      setContactData(data.childrens[0]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações do título");
    }
  }, []);

  const handleOpenEdit = (): void => {
    setTitle(`Editar ${contactData.question}`);

    setComponent(
      <EditContactData
        question={contactData.question}
        setQuestion={setContactData}
        title={contactData.title}
        questionId={contactData.id}
      />
    );

    setIsVisible(true);
  };

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

      <ContentCard>
        <ContentCardHeader>
          <DotRounded>1</DotRounded>
          <span>{contactData.question}</span>
        </ContentCardHeader>

        <CardContent>
          <p>{contactData.title}</p>
        </CardContent>

        <Button outline={true} type={"button"}>
          <span onClick={handleOpenEdit}>
            Editar <BsPencil size={16} />
          </span>
        </Button>
      </ContentCard>
    </Container>
  );
};

export default Contact;
