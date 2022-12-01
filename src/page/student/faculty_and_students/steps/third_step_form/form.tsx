import React, { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { formatIndexToLetter } from "@/utils/formarter";
import { Button } from "@/components/button";

import { EditTeachers } from "../../edit_modals/fourth_question/edit_teachers";
import { ITeacherData, ITeachingStaffData } from "@/models/teaching-staff";
import { EditFourthQuestion } from "../../edit_modals/fourth_question";
import { useModal } from "@/hooks/useModal";
import * as S from "./styles";
import { CreateTeacher } from "../../edit_modals/create_teacher";
import { FaUserAlt } from "react-icons/fa";

type Props = {
  teachers: ITeachingStaffData;
  setTeachers: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
};

const Form = ({ teachers, setTeachers }: Props) => {
  const { setIsVisible, setTitle, setComponent } = useModal();

  const [teachersData, setTeachersData] = useState<ITeacherData[]>([]);
  const [teachersChildrenId, setTeachersChildrenId] = useState(0);

  const getTeachersData = useCallback(async (): Promise<void> => {
    try {
      const response = await TeachingStaffServices.getHomeData(teachers.id);

      setTeachersChildrenId(response.data.childrens[0].id);

      const { data } = await TeachingStaffServices.getTeachers(response.data.childrens[0].id);

      setTeachersData(data);
    } catch (error) {
      toast.error("Houve um erro ao pegar as informações dos professores");
    }
  }, [teachers]);

  const handleOpenEditQuestionModal = () => {
    if (teachers) {
      setTitle(`Editar ${teachers.question}`);

      setComponent(
        <EditFourthQuestion
          questionId={teachers.id}
          text={teachers.question}
          description={teachers.title}
          setTeachers={setTeachers}
        />
      );

      setIsVisible(true);
    }
  };

  const handleOpenEditTeachersModal = (teacherId: number, name: string, link: string) => {
    if (teachersData) {
      setTitle(`Editar Professor(a)`);

      setComponent(
        <EditTeachers
          questionId={teachersChildrenId}
          teacherId={teacherId}
          name={name}
          link={link}
          setData={setTeachersData}
        />
      );

      setIsVisible(true);
    }
  };

  const handleOpenAddTeacherModal = () => {
    setTitle(`Adicionar Professor(a)`);

    setComponent(<CreateTeacher questionId={teachersChildrenId} setData={setTeachersData} />);

    setIsVisible(true);
  };

  const handleDeleteClass = async (teacherId: number) => {
    try {
      await TeachingStaffServices.deleteTeacher(teacherId, teachersChildrenId);

      const { data } = await TeachingStaffServices.getTeachers(teachersChildrenId);

      setTeachersData(data);

      toast.success("Professo(a) deletado(a) com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ao deletar o(a) professor(a), tente novamente!");
    }
  };

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
              <span onClick={handleOpenEditQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>

            <S.AddTeacherButton type={"button"}>
              <span onClick={() => handleOpenAddTeacherModal()}>
                Adicionar professor(a) <FaUserAlt size={16} />
              </span>
            </S.AddTeacherButton>
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
                  <FiEdit
                    onClick={() =>
                      handleOpenEditTeachersModal(teacher.index, teacher.teacher, teacher.link)
                    }
                  />
                </button>
                <button>
                  <BsTrash onClick={() => handleDeleteClass(teacher.index)} />
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
