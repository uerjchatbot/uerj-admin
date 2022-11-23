import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";

import { BsPencil, BsTrash } from "react-icons/bs";
import { TeachingStaffServices } from "@/services/student/teachint-staff.service";
import { Button } from "@/components/button";
import { FiEdit } from "react-icons/fi";
import { formatIndexToLetter } from "@/utils/formarter";

type Props = {
  teachers: any;
};

const Form = ({ teachers }: Props) => {
  const [teachersData, setTeachersData] = useState<any[]>([]);

  console.log("teachers:", teachers);

  const getTeachersData = useCallback(async (): Promise<void> => {
    const response = await TeachingStaffServices.getHomeData(teachers.id);

    const { data } = await TeachingStaffServices.getTeachers(response.data.childrens[0].id);

    console.log("data:", data);

    setTeachersData(data);
  }, [teachers]);

  useEffect(() => {
    getTeachersData();
  }, [getTeachersData]);

  return (
    <S.ContainerCards>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>4</S.DotRounded>
          <span>{teachers?.question}</span>
        </S.ContentCardHeader>

        <S.DescriptionContainer>
          <p>{teachers?.title}</p>
          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={() => console.log("opa")}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.DescriptionContainer>

        {teachersData?.map((teacher, index) => (
          <S.ClassDataContainer key={`teacher ${index}`}>
            <S.ClassDataHeaderContainer>
              <p>
                <strong>{formatIndexToLetter(index)} - </strong>
                Professor(a) {teacher.teacher}
              </p>

              <div>
                <button>
                  <FiEdit onClick={() => console.log(`Edit teacher ${teacher.teacher}`)} />
                </button>
                <button>
                  <BsTrash onClick={() => console.log(`Delete teacher ${teacher.teacher}`)} />
                </button>
              </div>
            </S.ClassDataHeaderContainer>

            <S.ClassDataNamesContainer>
              <p>{teacher.link}</p>
            </S.ClassDataNamesContainer>
          </S.ClassDataContainer>
        ))}
      </S.ContentCard>
    </S.ContainerCards>
  );
};

export default Form;
