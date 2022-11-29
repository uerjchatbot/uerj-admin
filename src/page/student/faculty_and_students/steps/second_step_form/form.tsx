import React, { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

// eslint-disable-next-line no-unused-vars
import {
  IClassroomData,
  ITeachingStaffChildrenData,
  ITeachingStaffData
} from "@/models/teaching-staff";
import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { Button } from "@/components/button";
import * as S from "./styles";
import { formatIndexToLetter } from "@/utils/formarter";
import { useModal } from "@/hooks/useModal";
import { EditThirdQuestion } from "../../edit_modals/third_question";
import { EditClass } from "../../edit_modals/third_question/edit_class";

type Props = {
  representation?: ITeachingStaffChildrenData;
  setRepresentation: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
};

const Form = ({ representation, setRepresentation }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();
  const [classroomData, setClassroomData] = useState<[IClassroomData[], IClassroomData[]]>([
    [] as IClassroomData[],
    [] as IClassroomData[]
  ]);
  const [childrenIds, setChildrenIds] = useState<number[]>([]);

  const getChildrenId = async (): Promise<number[]> => {
    if (representation?.childrens) {
      const response1 = await TeachingStaffServices.getClassroomChildrenId(
        representation.childrens[0].id
      );
      const response2 = await TeachingStaffServices.getClassroomChildrenId(
        representation.childrens[1].id
      );

      setChildrenIds([response1.data.childrens[0].id, response2.data.childrens[0].id]);

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

      setClassroomData([response1.data, response2.data]);
    } catch (error) {
      console.log("error:", error);
    }
  }, [representation]);

  const handleOpenEditQuestionModal = () => {
    if (representation) {
      setTitle(representation.question);

      setComponent(
        <EditThirdQuestion
          questionId={representation.id}
          text={representation.question}
          description={representation.title}
          setRepresentation={setRepresentation}
        />
      );

      setIsVisible(true);
    }
  };
  const handleOpenEditClassModal = (
    representationId: number,
    classId: number,
    className: string,
    studentsList: string[],
    classType: string
  ) => {
    if (representation) {
      setTitle(representation.question);

      setComponent(
        <EditClass
          questionId={childrenIds[representationId]}
          classId={classId}
          className={className}
          studentsList={studentsList}
          setData={setClassroomData}
          classType={classType}
        />
      );

      setIsVisible(true);
    }
  };

  const renderClassList = useCallback(() => {
    return (
      <div>
        {representation?.childrens.map((representationClass, index) => (
          <>
            <S.ClassHeaderContainer>
              <p>{`${index + 1}- ${representationClass.question}`}</p>

              <button
                onClick={() => console.log(`Adicionar turma de ${representationClass.question}`)}>
                Adicionar turma <IoIosPeople />
              </button>
            </S.ClassHeaderContainer>

            {classroomData[index]?.map((classroom, index2: number) => {
              return (
                <S.ClassDataContainer key={classroom.index}>
                  <S.ClassDataHeaderContainer>
                    <p>
                      <strong>{formatIndexToLetter(index2)} - </strong>
                      Os representantes da turma {classroom.matter} são:
                    </p>

                    <div>
                      <button>
                        <FiEdit
                          onClick={() => {
                            handleOpenEditClassModal(
                              index,
                              classroom.index,
                              classroom.matter,
                              classroom.students,
                              representationClass.question
                            );
                          }}
                        />
                      </button>
                      <button>
                        <BsTrash onClick={() => console.log(`Delete ${classroom.matter} class`)} />
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
    );
  }, [classroomData]);

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
              <span onClick={handleOpenEditQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.EditButtonContainer>
        </S.DescriptionContainer>

        <S.ClassContainer>{renderClassList()}</S.ClassContainer>
      </S.ContentCard>
    </S.ContainerCards>
  );
};

export default Form;
