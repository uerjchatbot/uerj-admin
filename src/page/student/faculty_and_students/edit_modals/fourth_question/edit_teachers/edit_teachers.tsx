import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { useModal } from "@/hooks/useModal";
import { ITeacherData } from "@/models/teaching-staff";

import * as S from "./styles";
import { EditTextButton } from "@/components/edit-text-button";

type Props = {
  questionId?: number;
  teacherId?: number;
  name?: string;
  link?: string;
  setData: React.Dispatch<React.SetStateAction<ITeacherData[]>>;
};

const EditClass = ({ questionId, teacherId, name, link, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [nameCopy, setNameCopy] = useState("");
  const [linkCopy, setLinkCopy] = useState("");

  const renderWriteTeacherName = useCallback(() => {
    return (
      <S.SetStudentNameContainer>
        <p>Nome professor(a)</p>
        <S.Input
          type="text"
          placeholder="Nome do(a) Professor(a)"
          value={nameCopy}
          onChange={(e) => setNameCopy(e.target.value)}
        />
      </S.SetStudentNameContainer>
    );
  }, [nameCopy]);

  const renderWriteTeacherLink = useCallback(() => {
    return (
      <S.SetStudentNameContainer>
        <p>Link currículo lattes</p>
        <S.Input
          type="text"
          placeholder="Nome do(a) Professor(a)"
          value={linkCopy}
          onChange={(e) => setLinkCopy(e.target.value)}
        />
      </S.SetStudentNameContainer>
    );
  }, [linkCopy]);

  const updateData = async (): Promise<void> => {
    try {
      await TeachingStaffServices.updateTeacherData(
        teacherId || 0,
        questionId || 0,
        nameCopy,
        linkCopy
      );

      const { data } = await TeachingStaffServices.getTeachers(questionId || 0);

      setData(data);

      toast.success("Professor atualizado com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao atualizar os dados, tente novamente mais tarde!");
    }
  };

  useEffect(() => {
    if (name && name.length > 0) setNameCopy(name);
  }, [name]);

  useEffect(() => {
    if (link && link.length > 0) setLinkCopy(link);
  }, [link]);

  return (
    <S.Container>
      {renderWriteTeacherName()}

      {renderWriteTeacherLink()}

      <EditTextButton event={updateData} />
    </S.Container>
  );
};

export default EditClass;
