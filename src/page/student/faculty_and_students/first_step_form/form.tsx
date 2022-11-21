import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { BsPencil } from "react-icons/bs";
import { StudentServices } from "@/services/student/home.service";
import { ICordinationData, IFfpData, IRepresentationData, ITeachersData } from "@/models/student";
import { useLoading } from "@/hooks/useLoading";
import { ITeachingStaffChildrenData } from "@/models/teaching-staff";

type Props = {
  title?: string;
  ffp?: ITeachingStaffChildrenData;
  coordination?: ITeachingStaffChildrenData;
};

const Form = ({ title, ffp, coordination }: Props) => {
  const { setLoading } = useLoading();

  // const getData = async () => {
  //   try {
  //     setLoading(true);

  //     const ffpResponse = await StudentServices.getTeachingStaffFFPData();
  //     const coordinationResponse = await StudentServices.getTeachingStaffCoordinationData();
  //     const representationResponse = await StudentServices.getTeachingStaffRepresentationData();
  //     const teachersResponse = await StudentServices.getTeachingStaffTeacherData();

  //     setFfpData(ffpResponse.data);
  //     setCoordinationData(coordinationResponse.data);
  //     setRepresentationData(representationResponse.data);
  //     setTeachersData(teachersResponse.data);

  //     setLoading(false);
  //   } catch (error) {
  //     console.log("error:", error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // console.log("title:", title);
  console.log("ffp:", ffp);
  console.log("ffp children:", ffp?.childrens[0].title.split("|"));
  // console.log("coordination:", coordination);

  return (
    <>
      <S.DescriptionContainer>
        {title && <div dangerouslySetInnerHTML={{ __html: title.replaceAll("\n", "<br />") }} />}

        <S.ContainerButton>
          <S.EditButton>
            <span onClick={() => console.log("opa")}>
              Editar <BsPencil size={16} />
            </span>
          </S.EditButton>
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

          {/* <S.ContainerButton> */}
          <S.EditButton>
            <span onClick={() => console.log("opa")}>
              Editar <BsPencil size={16} />
            </span>
          </S.EditButton>
          {/* </S.ContainerButton> */}
        </S.ContentCard>

        {/* <S.ContentCard>
          {coordinationData.teachers && (
            <>
              <S.ContentCardHeader>
                <S.DotRounded>2</S.DotRounded>
                <span>{coordinationData.question}</span>
              </S.ContentCardHeader>

              <p>Os coordenadores do Programa (geral e adjunto) são o(a) Professor(a) Dr.(a)</p>
              <S.Input
                placeholder="Nome do diretor(a)"
                disabled
                defaultValue={coordinationData.teachers[0].name}
              />

              <p>Currículo Lattes</p>
              <S.Input
                placeholder="Lattes do diretor(a)"
                disabled
                defaultValue={coordinationData.teachers[0].link}
              />

              <p>e Vice Professor(a) Dr(a)</p>
              <S.Input
                placeholder="Nome do(a) vice diretor(a)"
                disabled
                defaultValue={coordinationData.teachers[1].name}
              />

              <p>Link currículo Lattes</p>
              <S.Input
                placeholder="Lattes do(a) vice diretor(a)"
                disabled
                defaultValue={coordinationData.teachers[1].link}
              />

              <S.ContainerButton>
                <S.EditButton>
                  <span onClick={() => setIsEditing((oldValue) => !oldValue)}>
                    {isEditing ? (
                      "Cancelar"
                    ) : (
                      <>
                        Editar <BsPencil size={16} />
                      </>
                    )}
                  </span>
                </S.EditButton>
              </S.ContainerButton>
            </>
          )}
        </S.ContentCard> */}
      </S.ContainerCards>
    </>
  );
};

export default Form;
