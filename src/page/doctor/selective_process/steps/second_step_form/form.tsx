import React from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { IFirstStepData, ISecondStepData } from "@/models/teaching-staff";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
// import { EditPageDescription } from "../../edit_modals/page_description";
// import { EditFirstQuestion } from "../../edit_modals/first_question";
// import { EditSecondQuestion } from "../../edit_modals/second_question";

type Props = {
  data?: ISecondStepData;
  setData: React.Dispatch<React.SetStateAction<ISecondStepData>>;
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
            <S.DotRounded>5</S.DotRounded>
            {data && <span>{data.documentation.question}</span>}
          </S.ContentCardHeader>

          <p>{data && data.documentation.title}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditFirstQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>6</S.DotRounded>
            {data && <span>{data.steps.question}</span>}
          </S.ContentCardHeader>

          <p>{(data && data.steps.title) || "Um texto aqui"}</p>

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
            <S.DotRounded>7</S.DotRounded>
            {data && <span>{data.discretion.question}</span>}
          </S.ContentCardHeader>

          <p>{(data && data.discretion.title) || "Um texto Aqui"}</p>

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
            <S.DotRounded>8</S.DotRounded>
            {data && <span>{data.registration.question}</span>}
          </S.ContentCardHeader>

          <p>{(data && data.registration.title) || "Um texto aqui"}</p>

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
