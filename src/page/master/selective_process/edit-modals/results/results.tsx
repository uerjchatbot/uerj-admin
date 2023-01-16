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
  results?: IMasterDefaultData;
  setResults: React.Dispatch<React.SetStateAction<IMasterDefaultData>>;
};

const EditResultsQuestion = ({ results, setResults }: Props) => {
  const { setIsVisible } = useModal();

  const [question, setQuestion] = useState<string>(results?.question || "");
  const [title, setTitle] = useState<string>(results?.title || "");

  const [homologation, setHomologation] = useState<IMasterDefaultData>(
    results?.childrens[0] as IMasterDefaultData
  );
  const [test, setTest] = useState<IMasterDefaultData>(results?.childrens[1] as IMasterDefaultData);
  const [analysis, setAnalysis] = useState<IMasterDefaultData>(
    results?.childrens[2] as IMasterDefaultData
  );
  const [interview, setInterview] = useState<IMasterDefaultData>(
    results?.childrens[3] as IMasterDefaultData
  );
  const [language, setLanguage] = useState<IMasterDefaultData>(
    results?.childrens[4] as IMasterDefaultData
  );
  const [outcome, setOutcome] = useState<IMasterDefaultData>(
    results?.childrens[5] as IMasterDefaultData
  );

  const renderTextEditor = useCallback(() => {
    if (question.length === 0) return <></>;

    return (
      <>
        <S.QuestionContainer>
          <DotRounded>9</DotRounded>

          <TextEditor value={question} setValue={setQuestion} />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span>1</span>
          <S.Input
            type="text"
            className="data"
            defaultValue={homologation.question}
            onChange={(e) =>
              setHomologation({
                ...homologation,
                question: e.target.value
              })
            }
          />
        </S.QuestionContainer>
        <S.QuestionContainer>
          <span></span>
          <TextEditor
            value={homologation.title}
            setValue={(e) => {
              setHomologation({
                ...homologation,
                title: e as string
              });
            }}
          />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span>2</span>
          <S.Input
            type="text"
            className="data"
            defaultValue={test.question}
            onChange={(e) =>
              setTest({
                ...test,
                question: e.target.value
              })
            }
          />
        </S.QuestionContainer>
        <S.QuestionContainer>
          <span></span>
          <TextEditor
            value={test.title}
            setValue={(e) =>
              setTest({
                ...test,
                title: e as string
              })
            }
          />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span>3</span>
          <S.Input
            type="text"
            className="data"
            defaultValue={analysis.question}
            onChange={(e) =>
              setAnalysis({
                ...analysis,
                question: e.target.value
              })
            }
          />
        </S.QuestionContainer>
        <S.QuestionContainer>
          <span></span>
          <TextEditor
            value={analysis.title}
            setValue={(e) =>
              setAnalysis({
                ...analysis,
                title: e as string
              })
            }
          />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span>4</span>
          <S.Input
            type="text"
            className="data"
            defaultValue={interview.question}
            onChange={(e) =>
              setInterview({
                ...interview,
                question: e.target.value
              })
            }
          />
        </S.QuestionContainer>
        <S.QuestionContainer>
          <span></span>
          <TextEditor
            value={interview.title}
            setValue={(e) =>
              setInterview({
                ...interview,
                title: e as string
              })
            }
          />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span>5</span>
          <S.Input
            type="text"
            className="data"
            defaultValue={language.question}
            onChange={(e) =>
              setLanguage({
                ...language,
                question: e.target.value
              })
            }
          />
        </S.QuestionContainer>
        <S.QuestionContainer>
          <span></span>
          <TextEditor
            value={language.title}
            setValue={(e) =>
              setLanguage({
                ...language,
                title: e as string
              })
            }
          />
        </S.QuestionContainer>

        <S.QuestionContainer>
          <span>6</span>
          <S.Input
            type="text"
            className="data"
            defaultValue={outcome.question}
            onChange={(e) =>
              setOutcome({
                ...outcome,
                question: e.target.value
              })
            }
          />
        </S.QuestionContainer>
        <S.QuestionContainer>
          <span></span>
          <TextEditor
            value={outcome.title}
            setValue={(e) =>
              setOutcome({
                ...outcome,
                title: e as string
              })
            }
          />
        </S.QuestionContainer>
      </>
    );
  }, [question]);

  const handleEditText = async (): Promise<void> => {
    try {
      if (question) {
        const node = await MasterProcessServices.updateData({
          id: results?.id,
          title,
          question
        });

        const childrens = [homologation, test, analysis, interview, language, outcome];

        await Promise.all(
          childrens.map(
            async (child) =>
              await MasterProcessServices.updateData({
                id: child.id,
                question: child.question,
                title: child.title
              })
          )
        );

        const data: IMasterDefaultData = {
          ...node.data,
          childrens
        };

        setResults(data);
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

export default EditResultsQuestion;
