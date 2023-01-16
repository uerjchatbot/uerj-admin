import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { IMasterDefaultData, ISecondStepData } from "@/models/master";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditDocumentationQuestion } from "../../edit-modals/documentation";
import { EditStepQuestion } from "../../edit-modals/step";
import { EditDiscretionQuestion } from "../../edit-modals/discretion";
import { EditEnrollmentQuestion } from "../../edit-modals/enrollment";

type Props = {
  data?: ISecondStepData;
};

const Form = ({ data }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [documentation, setDocumentation] = useState<IMasterDefaultData>(
    data?.documentation as IMasterDefaultData
  );
  const [step, setStep] = useState<IMasterDefaultData>(data?.steps as IMasterDefaultData);
  const [discretion, setDiscretion] = useState<IMasterDefaultData>(
    data?.discretion as IMasterDefaultData
  );

  const [enrollment, setEnrollment] = useState<IMasterDefaultData>(
    data?.enrollment as IMasterDefaultData
  );

  const handleOpenEditDocumentationQuestionModal = (): void => {
    setTitle(`Editar ${documentation.question}`);

    setComponent(
      <EditDocumentationQuestion
        setDocumentation={setDocumentation}
        documentation={documentation}
      />
    );

    setIsVisible(true);
  };

  const handleOpenEditDiscretionQuestionModal = (): void => {
    setTitle(`Editar ${discretion?.question}`);

    setComponent(<EditDiscretionQuestion discretion={discretion} setDiscretion={setDiscretion} />);

    setIsVisible(true);
  };

  const handleOpenEditStepQuestionModal = (): void => {
    setTitle(`Editar ${step?.question}`);

    setComponent(<EditStepQuestion step={step} setStep={setStep} />);

    setIsVisible(true);
  };

  const handleOpenEditEnrollmentQuestionModal = (): void => {
    setTitle(`Editar ${enrollment?.question}`);

    setComponent(<EditEnrollmentQuestion enrollment={enrollment} setEnrollment={setEnrollment} />);

    setIsVisible(true);
  };

  return (
    <>
      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>5</S.DotRounded>
            {documentation && <span>{documentation.question}</span>}
          </S.ContentCardHeader>

          <p>{documentation && documentation.title}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditDocumentationQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>6</S.DotRounded>
            {step && <span>{step.question}</span>}
          </S.ContentCardHeader>

          <p>{(step && step.title) || "Um texto aqui"}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditStepQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>7</S.DotRounded>
            {discretion && <span>{discretion.question}</span>}
          </S.ContentCardHeader>

          <p>{(discretion && discretion.title) || "Um texto Aqui"}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditDiscretionQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>8</S.DotRounded>
            {enrollment && <span>{enrollment.question}</span>}
          </S.ContentCardHeader>

          <p>{(enrollment && enrollment.title) || "Um texto aqui"}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditEnrollmentQuestionModal}>
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
