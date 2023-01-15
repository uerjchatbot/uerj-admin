import React from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import {
  IFirstStepData,
  ITeachingStaffChildrenData,
  ITeachingStaffData
} from "@/models/teaching-staff";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
// import { EditPageDescription } from "../../edit_modals/page_description";
// import { EditFirstQuestion } from "../../edit_modals/first_question";
// import { EditSecondQuestion } from "../../edit_modals/second_question";

type Props = {
  data?: IFirstStepData;
  setData: React.Dispatch<React.SetStateAction<IFirstStepData>>;
  // coordination?: ITeachingStaffChildrenData;
  // setCoordination: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
};

const Form = ({
  data,
  setData
}: // coordination,
// setCoordination,
Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const handleOpenEditFirstQuestionModal = (): void => {
    // setTitle(`Editar ${ffp?.question}`);

    // setComponent(<EditFirstQuestion ffp={ffp} setFfp={setFfp} />);

    setIsVisible(true);
  };

  const handleOpenEditSecondQuestionModal = (): void => {
    // setTitle(`Editar ${coordination?.question}`);

    // setComponent(
    //   <EditSecondQuestion coordination={coordination} setCoordination={setCoordination} />
    // );

    setIsVisible(true);
  };

  return (
    <>
      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>1</S.DotRounded>
            {data && <span>{data.notice.question}</span>}
          </S.ContentCardHeader>

          <p>{data && data.notice.title}</p>
          <p>{data && data.quotas.childrens[0].title}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditSecondQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>2</S.DotRounded>
            {data && <span>{data.vacancies.question}</span>}
          </S.ContentCardHeader>

          <S.FlexRowCard>
            <p>{data && data.vacancies.title.split("|")[0]}</p>
            {data && data.vacancies?.childrens && (
              <S.Input
                placeholder="Nome do diretor(a)"
                disabled
                defaultValue={data.vacancies.title.split("|")[1]}
              />
            )}
            <p>{data && data.vacancies.title.split("|")[2]}</p>
          </S.FlexRowCard>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditSecondQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>3</S.DotRounded>
            {data && <span>{data.quotas.question}</span>}
          </S.ContentCardHeader>

          {data?.quotas?.childrens && (
            <>
              <p>{data.quotas.title}</p>
              <p>{data.quotas.childrens[0].title}</p>
            </>
          )}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditSecondQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>4</S.DotRounded>
            {data && <span>{data.registration.question}</span>}
          </S.ContentCardHeader>

          {data?.registration?.childrens && (
            <>
              <p>{data.registration.title}</p>
              <p>{data.registration.childrens[0].title}</p>
            </>
          )}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditSecondQuestionModal}>
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
