// import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { BsPencil } from "react-icons/bs";
import { ITeachingStaffChildrenData } from "@/models/teaching-staff";
import { Button } from "@/components/button";

type Props = {
  title?: string;
  ffp?: ITeachingStaffChildrenData;
  coordination?: ITeachingStaffChildrenData;
};

const Form = ({ title, ffp, coordination }: Props) => {
  return (
    <>
      <S.DescriptionContainer>
        {title && <div dangerouslySetInnerHTML={{ __html: title.replaceAll("\n", "<br />") }} />}

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            <span onClick={() => console.log("opa")}>
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
