import React, { useState } from "react";
import { toast } from "react-toastify";

import MattersService from "@/services/student/matters.service";
import { EditTextButton } from "@/components/edit-text-button";
import { IMatterData } from "@/models/matters";
import { useModal } from "@/hooks/useModal";

import * as S from "./styles";

type Props = {
  questionId: number;
  setData: React.Dispatch<React.SetStateAction<IMatterData[]>>;
};

const CreateDiscipline = ({ questionId, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [text, setText] = useState("");

  const handleCreateDiscipline = async () => {
    try {
      await MattersService.storeDiscipline(questionId, text);

      const { data } = await MattersService.getMatterData(questionId);

      setData(data);

      toast.success("Disciplina criada com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao criar a disciplina");
    }
  };

  return (
    <div>
      <S.Input
        placeholder="Nome da disciplina"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <EditTextButton event={handleCreateDiscipline} />
    </div>
  );
};

export default CreateDiscipline;
