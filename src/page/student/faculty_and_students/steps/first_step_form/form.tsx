import React from "react";
import * as S from "./styles";

import { BsPencil } from "react-icons/bs";
import { ITeachingStaffChildrenData, ITeachingStaffData } from "@/models/teaching-staff";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditPageDescription } from "../../edit_modals/page_description";

type Props = {
  homeDataId?: number;
  title?: string;
  ffp?: ITeachingStaffChildrenData;
  coordination?: ITeachingStaffChildrenData;
  setData: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
};

const Form = ({ homeDataId, title, ffp, coordination, setData }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const handleOpenEditTitleModal = (): void => {
    setTitle("Corpos Docentes e Discentes");

    setComponent(
      <EditPageDescription questionId={homeDataId || 0} text={title || ""} setData={setData} />
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

          <p>{ffp?.childrens[0].title.split("|")[0]}</p>
          {ffp?.childrens && (
            <S.Input
              placeholder="Nome do diretor(a)"
              disabled
              defaultValue={ffp.childrens[0].title.split("|")[1]}
            />
          )}

          <p>{ffp?.childrens[0].title.split("|")[2]}</p>
          {ffp?.childrens && (
            <S.Input
              placeholder="Lattes do diretor(a)"
              disabled
              defaultValue={ffp.childrens[0].title.split("|")[3]}
            />
          )}

          <p>{ffp?.childrens[0].title.split("|")[4]}</p>
          {ffp?.childrens && (
            <S.Input
              placeholder="Nome do(a) vice diretor(a)"
              disabled
              defaultValue={ffp.childrens[0].title.split("|")[5]}
            />
          )}

          <p>{ffp?.childrens[0].title.split("|")[6]}</p>
          {ffp?.childrens && (
            <S.Input
              placeholder="Lattes do(a) vice diretor(a)"
              disabled
              defaultValue={ffp.childrens[0].title.split("|")[7]}
            />
          )}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={() => console.log("opa")}>
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

          <p>{coordination?.childrens[0].title.split("|")[0]}</p>
          {coordination?.childrens && (
            <S.Input
              placeholder="Nome do diretor(a)"
              disabled
              defaultValue={coordination.childrens[0].title.split("|")[1]}
            />
          )}

          <p>{coordination?.childrens[0].title.split("|")[2]}</p>
          {coordination?.childrens && (
            <S.Input
              placeholder="Lattes do diretor(a)"
              disabled
              defaultValue={coordination.childrens[0].title.split("|")[3]}
            />
          )}

          <p>{coordination?.childrens[0].title.split("|")[4]}</p>
          {coordination?.childrens && (
            <S.Input
              placeholder="Nome do(a) vice diretor(a)"
              disabled
              defaultValue={coordination.childrens[0].title.split("|")[5]}
            />
          )}

          <p>{coordination?.childrens[0].title.split("|")[6]}</p>
          {coordination?.childrens && (
            <S.Input
              placeholder="Lattes do(a) vice diretor(a)"
              disabled
              defaultValue={coordination.childrens[0].title.split("|")[7]}
            />
          )}
          <p>{coordination?.childrens[0].title.split("|")[8]}</p>

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={() => console.log("opa")}>
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
