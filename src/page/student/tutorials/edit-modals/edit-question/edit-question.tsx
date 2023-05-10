import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import { Container } from "./styles";

type Props = {
  question: Question;
  setQuestion: Dispatch<SetStateAction<Question>>;
};

const EditTitle = ({ question, setQuestion }: Props) => {
  const { setLoading } = useLoading();

  const [text, setText] = useState(question.title);

  const { setIsVisible } = useModal();

  const renderTextEditor = useCallback(() => {
    if (!text) return <></>;

    return (
      <>
        <TextEditor value={text} setValue={setText} />
      </>
    );
  }, [text]);

  const handleEditData = async () => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.updateQuestion({ ...question, title: text });

      setQuestion((state) => ({
        ...state,
        childrens: state.childrens.map((child) => (child.id === question.id ? data : child))
      }));

      setIsVisible(false);

      toast.success("Tutorial atualizado com sucesso");

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao atualizar o tutorial");
      setLoading(false);
    }
  };

  return (
    <Container>
      {renderTextEditor()}

      <EditTextButton event={handleEditData} />
    </Container>
  );
};

export default EditTitle;
