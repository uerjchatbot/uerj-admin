import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { IMasterDefaultData } from "@/models/master";
import { MasterProcessServices } from "@/services/master/process.service";
import { DotRounded } from "../../styles";

type Props = {
  vacancies?: IMasterDefaultData;
  setVacancies: React.Dispatch<React.SetStateAction<IMasterDefaultData>>;
};

const EditVacanciesQuestion = ({ vacancies, setVacancies }: Props) => {
  const { setIsVisible } = useModal();

  const [question, setQuestion] = useState<string>(vacancies?.question || "");
  const [title, setTitle] = useState<string>(vacancies?.title || "");
  const [partTitle1, setPartTitle1] = useState<string>(vacancies?.title.split("|")[0] || "");
  const [partTitle2, setPartTitle2] = useState<string>(vacancies?.title.split("|")[1] || "");
  const [partTitle3, setPartTitle3] = useState<string>(vacancies?.title.split("|")[2] || "");

  const renderTextEditor = useCallback(() => {
    if (question.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>2</DotRounded>

          <TextEditor value={question} setValue={setQuestion} />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span></span>
          <TextEditor value={partTitle1} setValue={setPartTitle1} />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span></span>
          <S.Input
            type="text"
            defaultValue={partTitle2}
            onChange={(e) => setPartTitle2(e.target.value)}
          />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span></span>
          <TextEditor value={partTitle3} setValue={setPartTitle3} />
        </S.QuestionContainer>
      </>
    );
  }, [question]);

  const handleEditText = async (): Promise<void> => {
    try {
      if (question && title) {
        const newTitle = [partTitle1, ` |${partTitle2}| `, partTitle3].join("");

        setTitle(newTitle);

        const node = await MasterProcessServices.updateData({
          id: vacancies?.id,
          title: newTitle,
          question
        });

        const data: IMasterDefaultData = {
          ...node.data
        };

        //
        console.log({ vacancies, data });

        setVacancies(data);
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

export default EditVacanciesQuestion;
