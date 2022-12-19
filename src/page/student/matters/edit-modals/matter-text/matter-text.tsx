import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import MattersService from "@/services/student/matters.service";
import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { orderChildrens } from "@/utils/order";
import { useModal } from "@/hooks/useModal";

type Props = {
  title: string;
  fatherQuestionId: number;
  questionId: number;
  setData: any;
};

const MatterText = ({ title, fatherQuestionId, questionId, setData }: Props) => {
  const { setIsVisible } = useModal();
  const [text, setText] = useState("");

  const handleOpenTextEditor = useCallback(() => {
    if (text.length < 1) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      await MattersService.updateTitle(questionId, text);

      const response = await MattersService.getHomeData(fatherQuestionId);

      response.data.childrens = orderChildrens(response.data.childrens);

      setData(response.data);

      setIsVisible(false);

      toast.success("Texto alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  useEffect(() => {
    if (title && title.length > 0) setText(title);
  }, [title]);

  return (
    <div>
      {handleOpenTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default MatterText;
