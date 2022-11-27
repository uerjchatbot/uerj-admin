import React from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { ITeachingStaffChildrenData, ITeachingStaffData } from "@/models/teaching-staff";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditPageDescription } from "../../edit_modals/page_description";
import { EditFirstQuestion } from "../../edit_modals/first_question";
import { EditSecondQuestion } from "../../edit_modals/second_question";

type Props = {
  homeDataId?: number;
  title?: string;
  ffp?: ITeachingStaffChildrenData;
  setFfp: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
  coordination?: ITeachingStaffChildrenData;
  setCoordination: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
  setData: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
};

const Form = ({
  homeDataId,
  title,
  ffp,
  setFfp,
  coordination,
  setCoordination,
  setData
}: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const handleOpenEditTitleModal = (): void => {
    setTitle("Corpos Docentes e Discentes");

    setComponent(
      <EditPageDescription questionId={homeDataId || 0} text={title || ""} setData={setData} />
    );

    setIsVisible(true);
  };

  const handleOpenEditFirstQuestionModal = (): void => {
    setTitle(ffp?.question || "");

    setComponent(<EditFirstQuestion ffp={ffp} setFfp={setFfp} />);

    setIsVisible(true);
  };

  const handleOpenEditSecondQuestionModal = (): void => {
    setTitle(coordination?.question || "");

    setComponent(
      <EditSecondQuestion coordination={coordination} setCoordination={setCoordination} />
    );

    setIsVisible(true);
  };

  return (
    <>
      <S.DescriptionContainer>
        {title && <div dangerouslySetInnerHTML={{ __html: title.replaceAll("\n", "<br />") }} />}

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={handleOpenEditTitleModal}>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </S.ContainerButton>
      </S.DescriptionContainer>

      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>1</S.DotRounded>
            {ffp && <span>{ffp.question}</span>}
          </S.ContentCardHeader>

          {ffp?.childrens && (
            <>
              <p>{ffp.childrens[0].title.split("|")[0]}</p>
              {ffp?.childrens && (
                <S.Input
                  placeholder="Nome do diretor(a)"
                  disabled
                  defaultValue={ffp.childrens[0].title.split("|")[1]}
                />
              )}

              <p>{ffp.childrens[0].title.split("|")[2]}</p>
              {ffp?.childrens && (
                <S.Input
                  placeholder="Lattes do diretor(a)"
                  disabled
                  defaultValue={ffp.childrens[0].title.split("|")[3]}
                />
              )}

              <p>{ffp.childrens[0].title.split("|")[4]}</p>
              {ffp?.childrens && (
                <S.Input
                  placeholder="Nome do(a) vice diretor(a)"
                  disabled
                  defaultValue={ffp.childrens[0].title.split("|")[5]}
                />
              )}

              <p>{ffp.childrens[0].title.split("|")[6]}</p>
              {ffp?.childrens && (
                <S.Input
                  placeholder="Lattes do(a) vice diretor(a)"
                  disabled
                  defaultValue={ffp.childrens[0].title.split("|")[7]}
                />
              )}
            </>
          )}

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
            <S.DotRounded>2</S.DotRounded>
            {coordination && <span>{coordination.question}</span>}
          </S.ContentCardHeader>

          {coordination?.childrens && (
            <>
              <p>{coordination.childrens[0].title.split("|")[0]}</p>
              {coordination?.childrens && (
                <S.Input
                  placeholder="Nome do diretor(a)"
                  disabled
                  defaultValue={coordination.childrens[0].title.split("|")[1]}
                />
              )}

              <p>{coordination.childrens[0].title.split("|")[2]}</p>
              {coordination?.childrens && (
                <S.Input
                  placeholder="Lattes do diretor(a)"
                  disabled
                  defaultValue={coordination.childrens[0].title.split("|")[3]}
                />
              )}

              <p>{coordination.childrens[0].title.split("|")[4]}</p>
              {coordination?.childrens && (
                <S.Input
                  placeholder="Nome do(a) vice diretor(a)"
                  disabled
                  defaultValue={coordination.childrens[0].title.split("|")[5]}
                />
              )}

              <p>{coordination.childrens[0].title.split("|")[6]}</p>

              {coordination?.childrens && (
                <S.Input
                  placeholder="Lattes do(a) vice diretor(a)"
                  disabled
                  defaultValue={coordination.childrens[0].title.split("|")[7]}
                />
              )}

              <p>{coordination?.childrens[0].title.split("|")[8]}</p>
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
