import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { BsPencil } from "react-icons/bs";
import { StudentServices } from "@/services/student/home.service";
import { ICordinationData, IFfpData, IRepresentationData, ITeachersData } from "@/models/student";
import { useLoading } from "@/hooks/useLoading";

type Props = {
  title: string;
};

const Form = ({ title }: Props) => {
  const { setLoading } = useLoading();
  const [isEditing, setIsEditing] = useState(false);

  const [ffpData, setFfpData] = useState({} as IFfpData);
  const [coordinationData, setCoordinationData] = useState({} as ICordinationData);
  const [representationData, setRepresentationData] = useState({} as IRepresentationData);
  const [teachersData, setTeachersData] = useState({} as ITeachersData);

  const getData = async () => {
    try {
      setLoading(true);

      const ffpResponse = await StudentServices.getTeachingStaffFFPData();
      const coordinationResponse = await StudentServices.getTeachingStaffCoordinationData();
      const representationResponse = await StudentServices.getTeachingStaffRepresentationData();
      const teachersResponse = await StudentServices.getTeachingStaffTeacherData();

      setFfpData(ffpResponse.data);
      setCoordinationData(coordinationResponse.data);
      setRepresentationData(representationResponse.data);
      setTeachersData(teachersResponse.data);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("ffpData:", ffpData);
  // console.log("coordinationData:", coordinationData);
  // console.log("representationData:", representationData);
  // console.log("teachersData:", teachersData);

  return (
    <>
      <S.DescriptionContainer>
        <div dangerouslySetInnerHTML={{ __html: title.replaceAll("\n", "<br />") }} />

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
      </S.DescriptionContainer>

      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>1</S.DotRounded>
            {ffpData.question && <span>{ffpData?.question}</span>}
          </S.ContentCardHeader>

          <p>O PPGEDU faz parte da FFP que tem como Diretor o(a) Professor(a)</p>
          {ffpData.teachers && (
            <S.Input
              placeholder="Nome do diretor(a)"
              disabled
              defaultValue={ffpData?.teachers[0]?.name}
            />
          )}

          <p>Currículo Lattes</p>
          {ffpData.teachers && (
            <S.Input
              placeholder="Lattes do diretor(a)"
              disabled
              defaultValue={ffpData?.teachers[0]?.link}
            />
          )}

          <p>e Vice Professor(a) Dr(a)</p>
          {ffpData.teachers && (
            <S.Input
              placeholder="Nome do(a) vice diretor(a)"
              disabled
              defaultValue={ffpData?.teachers[1]?.name}
            />
          )}

          <p>Link currículo Lattes</p>
          {ffpData.teachers && (
            <S.Input
              placeholder="Lattes do(a) vice diretor(a)"
              disabled
              defaultValue={ffpData?.teachers[1]?.link}
            />
          )}

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
        </S.ContentCard>

        <S.ContentCard>
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
        </S.ContentCard>
      </S.ContainerCards>
    </>
  );
};

export default Form;
