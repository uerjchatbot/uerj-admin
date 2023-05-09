import { useState } from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { IFirstStepData } from "@/models/doctor";
import { EditNoticeQuestion } from "../../edit-modals/notice";
import { EditQuotasQuestion } from "../../edit-modals/quotas";
import { EditRegistrationQuestion } from "../../edit-modals/registration";
import { EditVacanciesQuestion } from "../../edit-modals/vacancies";

type Props = {
  data?: IFirstStepData;
};

const Form = ({ data }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();
  const [notice, setNotice] = useState<Question>(data?.notice as Question);
  const [quotas, setQuotas] = useState<Question>(data?.quotas as Question);
  const [registration, setRegistration] = useState<Question>(data?.registration as Question);
  const [vacancies, setVacancies] = useState<Question>(data?.vacancies as Question);

  const handleOpenEditVacanciesQuestionModal = (): void => {
    setTitle(`Editar ${vacancies.question}`);

    setComponent(<EditVacanciesQuestion vacancies={vacancies} setVacancies={setVacancies} />);

    setIsVisible(true);
  };

  const handleOpenEditNoticeQuestionModal = (): void => {
    setTitle(`Editar ${notice.question}`);

    setComponent(<EditNoticeQuestion setNotice={setNotice} notice={notice} />);

    setIsVisible(true);
  };

  const handleOpenEditQuotasQuestionModal = (): void => {
    setTitle(`Editar ${quotas?.question}`);

    setComponent(<EditQuotasQuestion quotas={quotas} setQuotas={setQuotas} />);

    setIsVisible(true);
  };

  const handleOpenEditRegistrationQuestionModal = (): void => {
    setTitle(`Editar ${registration?.question}`);

    setComponent(
      <EditRegistrationQuestion registration={registration} setRegistration={setRegistration} />
    );

    setIsVisible(true);
  };

  return (
    <>
      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>1</S.DotRounded>
            {notice && <span>{notice.question}</span>}
          </S.ContentCardHeader>

          <p>{notice && notice.title}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditNoticeQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>2</S.DotRounded>
            {vacancies && <span>{vacancies.question}</span>}
          </S.ContentCardHeader>

          <S.FlexRowCard>
            <p>{vacancies && vacancies.title}</p>
          </S.FlexRowCard>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditVacanciesQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>3</S.DotRounded>
            {quotas && <span>{quotas.question}</span>}
          </S.ContentCardHeader>

          <p>{quotas.title}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditQuotasQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>4</S.DotRounded>
            {registration && <span>{registration.question}</span>}
          </S.ContentCardHeader>

          <p>{registration.title}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditRegistrationQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>
      </S.ContainerCards>
    </>
  );
};

export default Form;
