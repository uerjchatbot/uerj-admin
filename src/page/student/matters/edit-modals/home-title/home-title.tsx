import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { IMattersHomeData } from "@/models/matters";
import MattersService from "@/services/student/matters.service";

type Props = {
  questionId: number;
  title: string;
  setData: React.Dispatch<React.SetStateAction<IMattersHomeData>>;
};

const HomeTitle = ({ questionId, title, setData }: Props) => {
  const { setIsVisible } = useModal();
  const [text, setText] = useState("");

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return (
      <>
        <TextEditor value={text} setValue={setText} />
      </>
    );
  }, [text]);

  const handleEditText = async () => {
    try {
      const response = await MattersService.updateTitle(questionId, text);

      // setData(response.data);

      setData((oldValue) => {
        return { ...oldValue, ...response.data };
      });

      setIsVisible(false);

      toast.success("Texto alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  useEffect(() => {
    if (title.length > 0) {
      setText(title);
    }
  }, [title]);

  console.log("questionId:", questionId);

  return (
    <div>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default HomeTitle;
