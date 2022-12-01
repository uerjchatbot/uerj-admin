import React, { useState } from "react";
import { toast } from "react-toastify";

import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { ITeacherData } from "@/models/teaching-staff";
import { useModal } from "@/hooks/useModal";

import { EditTextButton } from "@/components/edit-text-button";
import * as S from "./styles";

type Props = {
  questionId?: number;
  setData: React.Dispatch<React.SetStateAction<ITeacherData[]>>;
};

const CreateTeacher = ({ questionId, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleCreateTeacher = async (): Promise<void> => {
    try {
      await TeachingStaffServices.createTeacher(questionId || 0, name, link);

      const { data } = await TeachingStaffServices.getTeachers(questionId || 0);

      setData(data);

      toast.success("Professor(a) criado(a) com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao criar o professor(a), tente novamente mais tarde!");
    }
  };

  return (
    <S.Container>
      <S.SetStudentNameContainer>
        <S.Input
          type="text"
          placeholder="Nome do(a) professor(a)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </S.SetStudentNameContainer>

      <S.SetStudentNameContainer>
        <S.Input
          type="text"
          placeholder="Link currículo lattes"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </S.SetStudentNameContainer>

      <EditTextButton event={handleCreateTeacher} />
    </S.Container>
  );
};

export default CreateTeacher;
