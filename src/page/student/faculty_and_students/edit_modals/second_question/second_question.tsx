import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./styles";

import { TextEditor } from "@/components/text-editor";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { ITeachingStaffChildrenData, ITeachingStaffData } from "@/models/teaching-staff";
import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { DotRounded } from "../../styles";

type Props = {
  coordination?: ITeachingStaffChildrenData;
  setCoordination: React.Dispatch<React.SetStateAction<ITeachingStaffData>>;
};

const EditSecondQuestion = ({ coordination, setCoordination }: Props) => {
  const { setIsVisible } = useModal();

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");

  const [textInfo, setTextInfo] = useState("");

  const renderTextEditor = useCallback(() => {
    if (textInfo.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>1</DotRounded>
          <TextEditor value={textInfo} setValue={setTextInfo} />
        </S.QuestionContainer>

        {coordination && coordination.childrens && (
          <S.InputsContainer>
            <S.Input
              type="text"
              defaultValue={coordination.childrens[0].title.split("|")[0]}
              onChange={(e) => setText1(e.target.value)}
            />
            <S.Input
              type="text"
              className="data"
              defaultValue={coordination.childrens[0].title.split("|")[1]}
              onChange={(e) => setText2(e.target.value)}
            />
            <S.Input
              type="text"
              defaultValue={coordination.childrens[0].title.split("|")[2]}
              disabled
            />
            <S.Input
              type="text"
              className="data"
              defaultValue={coordination.childrens[0].title.split("|")[3]}
              onChange={(e) => setText3(e.target.value)}
            />
            <S.Input
              type="text"
              defaultValue={coordination.childrens[0].title.split("|")[4]}
              onChange={(e) => setText4(e.target.value)}
            />
            <S.Input
              type="text"
              className="data"
              defaultValue={coordination.childrens[0].title.split("|")[5]}
              onChange={(e) => setText5(e.target.value)}
            />
            <S.Input
              type="text"
              defaultValue={coordination.childrens[0].title.split("|")[6]}
              disabled
            />
            <S.Input
              type="text"
              className="data"
              defaultValue={coordination.childrens[0].title.split("|")[7]}
              onChange={(e) => setText6(e.target.value)}
            />
          </S.InputsContainer>
        )}
      </>
    );
  }, [textInfo, coordination]);

  const handleEditText = async (): Promise<void> => {
    try {
      if (coordination && coordination.childrens) {
        const teachers = [
          {
            title: text1,
            name: text2,
            link: text3
          },
          {
            title: text4,
            name: text5,
            link: text6
          }
        ];

        const response1 = await TeachingStaffServices.updateFfpQuestionAndTitle(
          coordination.id,
          coordination.title,
          textInfo
        );

        const response2 = await TeachingStaffServices.updateFfpTeachers(
          coordination.childrens[0].id,
          teachers
        );

        const data = {
          ...response1.data,
          childrens: [response2.data]
        };

        setCoordination(data as unknown as ITeachingStaffData);

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

  useEffect(() => {
    if (coordination && coordination.question.length > 0) {
      setTextInfo(coordination.question);
    }
  }, [coordination]);

  useEffect(() => {
    if (coordination && coordination.childrens) {
      setText1(coordination.childrens[0].title.split("|")[0]);
      setText2(coordination.childrens[0].title.split("|")[1]);
      setText3(coordination.childrens[0].title.split("|")[3]);
      setText4(coordination.childrens[0].title.split("|")[4]);
      setText5(coordination.childrens[0].title.split("|")[5]);
      setText6(coordination.childrens[0].title.split("|")[7]);
    }
  }, [coordination, renderTextEditor]);

  return (
    <>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </>
  );
};

export default EditSecondQuestion;
