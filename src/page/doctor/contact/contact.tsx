/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { DOCTOR_PATH } from "@/routes/paths/paths.private";
import { QuestionServices } from "@/services/question/question.service";
import { EditContactData } from "./edit-contact-data";
import {
  CardContent,
  Container,
  ContainerButton,
  ContentCard,
  ContentCardHeader,
  DotRounded,
  Title
} from "./styles";

interface UseLocationState {
  state: Question;
}

const Contact = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state } = useLocation() as UseLocationState;
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [contactData, setContactData] = useState<Question>({} as Question);

  const handleNavigateBack = () => navigate(DOCTOR_PATH());

  const getData = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.getQuestion(state);

      setContactData(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações do título");
    }
  }, []);

  const handleOpenEdit = (): void => {
    setTitle(`Editar ${contactData.question}`);

    setComponent(<EditContactData question={contactData} setQuestion={setContactData} />);

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
          <Title dangerouslySetInnerHTML={{ __html: contactData.title }} />
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
