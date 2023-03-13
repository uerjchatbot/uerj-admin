import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { useModal } from "@/hooks/useModal";

import * as S from "./styles";
import { EditTextButton } from "@/components/edit-text-button";
import { IMasterDefaultData } from "@/models/master";
import { MasterProgramServices } from "@/services/master/program.service";

type Props = {
  question: IMasterDefaultData;
  setData: React.Dispatch<React.SetStateAction<IMasterDefaultData>>;
};

const CreateTeacher = ({ question, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [teacher, setTeacher] = useState<string>("");

  const handleCreateTeacher = async () => {
    try {
      const { data } = await MasterProgramServices.createTeacher({
        question: question.childrens[0],
        teacher
      });

      setData({
        ...question,
        childrens: [data]
      });

      toast.success("Professor adicionado com sucesso!");
      setIsVisible(false);
    } catch (error) {
      console.log("error: ", error);
      toast.error("Erro ao tentar adicionar um professor");
    }
  };

  return (
    <S.Container>
      <S.ClassNameContainer>
        <p>Professor(a): </p>
        <S.Input
          type="text"
          placeholder="Nome da turma"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
      </S.ClassNameContainer>

      <EditTextButton event={handleCreateTeacher} />
    </S.Container>
  );
};

export default CreateTeacher;
