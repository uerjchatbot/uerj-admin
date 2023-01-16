import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { TextEditor } from "@/components/text-editor";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { DoctorProcessServices } from "@/services/doctor/process.service";
import { DotRounded } from "../../styles";
import { IDoctorDefaultData } from "@/models/doctor";

type Props = {
  notice?: IDoctorDefaultData;
  setNotice: React.Dispatch<React.SetStateAction<IDoctorDefaultData>>;
};

const EditNoticeQuestion = ({ notice, setNotice }: Props) => {
  console.log({ notice });
  const { setIsVisible } = useModal();

  const [question, setQuestion] = useState<string>(notice?.question || "");
  const [title, setTitle] = useState<string>(notice?.title || "");
  const [childrenTitle, setChildrenTitle] = useState<string>(notice?.childrens[0].title || "");

  const renderTextEditor = useCallback(() => {
    if (question.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>1</DotRounded>

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
      if (notice && notice.childrens) {
        const node = await DoctorProcessServices.updateData({
          id: notice.id,
          title,
          question
        });

        const children = await DoctorProcessServices.updateData({
          id: notice.childrens[0].id,
          title: childrenTitle
        });

        const data: IDoctorDefaultData = {
          ...node.data,
          childrens: [children.data]
        };
        setNotice(data);
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

export default EditNoticeQuestion;
