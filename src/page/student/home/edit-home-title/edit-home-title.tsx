import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { StudentServices } from "@/services/student/home.service";

type Props = {
  question: Question;
  setData: Dispatch<SetStateAction<Question>>;
};

const EditHomeTitle = ({ question, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [text, setText] = useState("");

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      const response = await StudentServices.updateHomeTitle({ ...question, title: text });

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
    if (question.title && question.title?.length > 0) {
      setText(question.title);
    }
  }, [question.title]);

  return (
    <div>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditHomeTitle;
