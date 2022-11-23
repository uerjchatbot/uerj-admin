import React, { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

// eslint-disable-next-line no-unused-vars
import { IClassroomData, ITeachingStaffChildrenData } from "@/models/teaching-staff";
import { TeachingStaffServices } from "@/services/student/teachint-staff.service";
import { Button } from "@/components/button";
import * as S from "./styles";
import { formatIndexToLetter } from "@/utils/formarter";

type Props = {
  representation?: ITeachingStaffChildrenData;
};

const Form = ({ representation }: Props) => {
  const [classroomData, setClassroomData] = useState<any>([] as any);

  const getChildrenId = async (): Promise<number[]> => {
    if (representation?.childrens) {
      const response1 = await TeachingStaffServices.getClassroomChildrenId(
        representation.childrens[0].id
      );
      const response2 = await TeachingStaffServices.getClassroomChildrenId(
        representation.childrens[1].id
      );

      return [response1.data.childrens[0].id, response2.data.childrens[0].id];
    } else {
      return [0, 0];
    }
  };

  const getClassroomData = useCallback(async (): Promise<void> => {
    try {
      const ids = await getChildrenId();

      const response1 = await TeachingStaffServices.getClassroomChildrenData(ids[0]);
      const response2 = await TeachingStaffServices.getClassroomChildrenData(ids[1]);

      setClassroomData((oldValue: any) => [...oldValue, response1.data]);
      setClassroomData((oldValue: any) => [...oldValue, response2.data]);
    } catch (error) {
      console.log("error:", error);
    }
  }, [representation]);

  useEffect(() => {
    getClassroomData();
  }, [getClassroomData]);

  return (
    <S.ContainerCards>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>3</S.DotRounded>
          <span>{representation?.question}</span>
        </S.ContentCardHeader>

        <S.DescriptionContainer>
          <p>{representation?.title}</p>
          <S.EditButtonContainer>
            <Button outline={true} type={"button"}>
              <span onClick={() => console.log("opa")}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.EditButtonContainer>
        </S.DescriptionContainer>

        <S.ClassContainer>
          <div>
            {representation?.childrens.map((classroom, index) => (
              <>
                <S.ClassHeaderContainer>
                  <p>{`${index + 1}- ${classroom.question}`}</p>

                  <button onClick={() => console.log(`Adicionar turma de ${classroom.question}`)}>
                    Adicionar turma <IoIosPeople />
                  </button>
                </S.ClassHeaderContainer>

                {classroomData[index]?.map((classroom: any, index2: number) => {
                  return (
                    <S.ClassDataContainer key={classroom.id}>
                      <S.ClassDataHeaderContainer>
                        <p>
                          <strong>{formatIndexToLetter(index2)} - </strong>
                          Os representantes da turma {classroom.matter} são:
                        </p>

                        <div>
                          <button>
                            <FiEdit onClick={() => console.log(`Edit ${classroom.matter} class`)} />
                          </button>
                          <button>
                            <BsTrash
                              onClick={() => console.log(`Delete ${classroom.matter} class`)}
                            />
                          </button>
                        </div>
                      </S.ClassDataHeaderContainer>

                      <S.ClassDataNamesContainer>
                        <ul>
                          {classroom.students.map((name: string, idx: number) => (
                            <li key={`name-${idx}`}>{name}</li>
                          ))}
                        </ul>
                      </S.ClassDataNamesContainer>
                    </S.ClassDataContainer>
                  );
                })}
              </>
            ))}
          </div>
        </S.ClassContainer>
      </S.ContentCard>
    </S.ContainerCards>
  );
};

export default Form;
