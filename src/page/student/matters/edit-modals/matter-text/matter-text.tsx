import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const MatterText = ({ question, setQuestion }: Props) => {
  const { setIsVisible } = useModal();
  const [text, setText] = useState(question.title);

  const handleOpenTextEditor = useCallback(() => {
    if (text.length < 1) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      const { data } = await QuestionServices.updateQuestion({ ...question, title: text });

      setQuestion((state) => ({
        ...state,
        childrens: state.childrens.map((child) =>
          child.id
            ? {
                ...child,
                ...data
              }
            : child
        )
      }));

      setIsVisible(false);

      toast.success("Texto alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  return (
    <div>
      {handleOpenTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default MatterText;
