import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { IDoctorDefaultData, IFirstStepData } from "@/models/doctor";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditNoticeQuestion } from "../../edit-modals/notice";
import { EditQuotasQuestion } from "../../edit-modals/quotas";
import { EditRegistrationQuestion } from "../../edit-modals/registration";
import { EditVacanciesQuestion } from "../../edit-modals/vacancies";

type Props = {
  data?: IFirstStepData;
};

const Form = ({ data }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();
  const [notice, setNotice] = useState<IDoctorDefaultData>(data?.notice as IDoctorDefaultData);
  const [quotas, setQuotas] = useState<IDoctorDefaultData>(data?.quotas as IDoctorDefaultData);
  const [registration, setRegistration] = useState<IDoctorDefaultData>(
    data?.registration as IDoctorDefaultData
  );
  const [vacancies, setVacancies] = useState<IDoctorDefaultData>(
    data?.vacancies as IDoctorDefaultData
  );

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
          <p>{notice && notice.childrens[0].title}</p>

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
            <p>{vacancies && vacancies.title.split("|")[0]}</p>
            <S.Input
              placeholder="Quantidade"
              disabled
              defaultValue={vacancies.title.split("|")[1]}
            />
            <p>{vacancies && vacancies.title.split("|")[2]}</p>
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
          <p>{quotas.childrens[0].title}</p>

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
          <p>{registration.childrens[0].title}</p>

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
