import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { TextEditor } from "@/components/text-editor";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { MasterProcessServices } from "@/services/master/process.service";
import { DotRounded } from "../../styles";
import { IMasterDefaultData } from "@/models/master";

type Props = {
  registration?: IMasterDefaultData;
  setRegistration: React.Dispatch<React.SetStateAction<IMasterDefaultData>>;
};

const EditRegistrationQuestion = ({ registration, setRegistration }: Props) => {
  const { setIsVisible } = useModal();

  const [question, setQuestion] = useState<string>(registration?.question || "");
  const [title, setTitle] = useState<string>(registration?.title || "");
  const [childrenTitle, setChildrenTitle] = useState<string>(
    registration?.childrens[0].title || ""
  );

  const renderTextEditor = useCallback(() => {
    if (question.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>4</DotRounded>

          <TextEditor value={question} setValue={setQuestion} />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span></span>
          <TextEditor value={title} setValue={setTitle} />
        </S.QuestionContainer>
        <S.QuestionContainer>
          <span></span>
          <TextEditor value={childrenTitle} setValue={setChildrenTitle} />
        </S.QuestionContainer>
      </>
    );
  }, [question]);

  const handleEditText = async (): Promise<void> => {
    try {
      if (registration && registration.childrens) {
        const node = await MasterProcessServices.updateData({
          id: registration.id,
          title,
          question
        });

        const children = await MasterProcessServices.updateData({
          id: registration.childrens[0].id,
          title: childrenTitle
        });

        const data: IMasterDefaultData = {
          ...node.data,
          childrens: [children.data]
        };
        setRegistration(data);
        setIsVisible(false);
        toast.success("Textos alterados com sucesso!");
      } else {
        toast.error("Os dados não foram carregado corretamente, tente novamente!");
      }
    } catch (error) {
      console.log("error:", error);
      toast.error("Houve um erro ao salvar o texto");
    }
  };

  return (
    <>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </>
  );
};

export default EditRegistrationQuestion;
