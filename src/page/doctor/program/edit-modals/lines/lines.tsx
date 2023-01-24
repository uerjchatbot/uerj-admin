import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { TextEditor } from "@/components/text-editor";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { DoctorProcessServices } from "@/services/doctor/process.service";
import { DotRounded } from "../../styles";
import { IDoctorDefaultData, IDoctorProgram } from "@/models/doctor";

type Props = {
  childrens?: IDoctorProgram;
  setData: React.Dispatch<React.SetStateAction<IDoctorProgram>>;
};

const EditLinesQuestion = ({ childrens, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [question, setQuestion] = useState<string>(childrens?.lines?.question || "");
  const [title, setTitle] = useState<string>(childrens?.lines.title || "");
  const [firstTitleChildren, setFirstTitleChildren] = useState<string>(
    childrens?.lines?.childrens[0]?.question as string
  );

  const [secondTitleChildren, setSecondTitleChildren] = useState<string>(
    childrens?.lines?.childrens[0]?.question as string
  );

  const renderTextEditor = useCallback(() => {
    if (question.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>2</DotRounded>

          <TextEditor value={question} setValue={setQuestion} />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span>1</span>
          <TextEditor value={firstTitleChildren} setValue={setFirstTitleChildren} />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span>2</span>
          <TextEditor value={secondTitleChildren} setValue={setSecondTitleChildren} />
        </S.QuestionContainer>
      </>
    );
  }, [question]);

  const handleEditText = async (): Promise<void> => {
    try {
      if (question && firstTitleChildren && secondTitleChildren) {
        const node = await DoctorProcessServices.updateData({
          id: childrens?.lines.id,
          title,
          question
        });

        await Promise.all(
          [firstTitleChildren, secondTitleChildren].map(
            async (item, index) =>
              await DoctorProcessServices.updateData({
                id: childrens?.lines.childrens[index].id,
                // title,
                question: item
              })
          )
        );

        const data: IDoctorDefaultData = {
          ...node.data,
          childrens: [
            {
              question: firstTitleChildren
            },
            {
              question: secondTitleChildren
            }
          ]
        } as IDoctorDefaultData;

        setData({
          ...childrens,
          lines: data
        } as IDoctorProgram);

        setIsVisible(false);
        toast.success("Textos alterados com sucesso!");
      } else {
        toast.error("Os dados não foram carregado corretamente, tente novamente!");
      }
    } catch (error) {
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

export default EditLinesQuestion;
