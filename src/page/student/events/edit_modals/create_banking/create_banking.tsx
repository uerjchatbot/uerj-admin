import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { useModal } from "@/hooks/useModal";

import * as S from "./styles";
import { EditTextButton } from "@/components/edit-text-button";
import { EventServices } from "@/services/student/events.service";
import { IFirstStepEventData } from "@/models/events";

type Props = {
  questionId?: number;
  setData: React.Dispatch<React.SetStateAction<IFirstStepEventData>>;
};

const CreateBanking = ({ questionId, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [teacherName, setTeacherName] = useState("");

  const renderAddBanking = useCallback(() => {
    return (
      <S.SetStudentNameContainer>
        <S.Input
          type="text"
          placeholder="Nome do(a) Professor(a)"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
        />
      </S.SetStudentNameContainer>
    );
  }, [teacherName]);

  const updateData = async (): Promise<void> => {
    try {
      await EventServices.addTeacherToEvent(questionId, teacherName);

      const { data } = await EventServices.getEventBoardData(questionId);

      setData((oldValue) => {
        return { ...oldValue, ...data };
      });

      toast.success("Banca atualizada com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao adicionar um professor a banca, tente novamente mais tarde!");
    }
  };

  return (
    <S.Container>
      {renderAddBanking()}

      <EditTextButton event={updateData} />
    </S.Container>
  );
};

export default CreateBanking;
