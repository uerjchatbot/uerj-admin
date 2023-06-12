import { useState } from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { ISecondStepData } from "@/models/doctor";
import { EditDiscretionQuestion } from "../../edit-modals/discretion";
import { EditDocumentationQuestion } from "../../edit-modals/documentation";
import { EditEnrollmentQuestion } from "../../edit-modals/enrollment";
import { EditStepQuestion } from "../../edit-modals/step";

type Props = {
  data?: ISecondStepData;
};

const Form = ({ data }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [documentation, setDocumentation] = useState<Question>(data?.documentation as Question);
  const [step, setStep] = useState<Question>(data?.steps as Question);
  const [discretion, setDiscretion] = useState<Question>(data?.discretion as Question);

  const [enrollment, setEnrollment] = useState<Question>(data?.enrollment as Question);

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

          <p dangerouslySetInnerHTML={{ __html: documentation.title }} />

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

          <p dangerouslySetInnerHTML={{ __html: (step && step.title) || "Um texto aqui" }} />

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

          <p
            dangerouslySetInnerHTML={{
              __html: (discretion && discretion.title) || "Um texto Aqui"
            }}
          />

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

          <p
            dangerouslySetInnerHTML={{
              __html: (enrollment && enrollment.title) || "Um texto aqui"
            }}
          />

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
