import { useCallback, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { ProcessThirdStepData, Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { EditResourcesQuestion } from "../../edit-modals/resources";
import { EditResultsQuestion } from "../../edit-modals/results";

type Props = {
  data?: ProcessThirdStepData;
};

const Form = ({ data }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [resources, setResources] = useState<Question>(data?.resources as Question);

  const [results, setResults] = useState<Question>(data?.results as Question);

  const getResultChildrens = useCallback(async () => {
    const { data } = await QuestionServices.getQuestion(results);

    setResults((state) => ({
      ...state,
      childrens: data?.childrens
    }));
  }, [data?.results]);

  const handleOpenEditResultsQuestionModal = (): void => {
    setTitle(`Editar ${results.question}`);

    setComponent(<EditResultsQuestion results={results} setResults={setResults} />);

    setIsVisible(true);
  };

  const handleOpenEditResourcesQuestionModal = (): void => {
    setTitle(`Editar ${resources.question}`);

    setComponent(<EditResourcesQuestion resources={resources} setResources={setResources} />);

    setIsVisible(true);
  };

  useEffect(() => {
    getResultChildrens();
  }, [getResultChildrens]);

  return (
    <>
      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>9</S.DotRounded>
            {results && <span dangerouslySetInnerHTML={{ __html: results.question }}></span>}
          </S.ContentCardHeader>

          <S.Title dangerouslySetInnerHTML={{ __html: results.title }} />

          {results &&
            results?.childrens?.map((child, index) => (
              <S.CardItem key={child.id}>
                <span>
                  <S.Title
                    dangerouslySetInnerHTML={{
                      __html: `<strong>${index + 1} - </strong> ${child.question}`
                    }}
                  />
                </span>
                <S.Title dangerouslySetInnerHTML={{ __html: child.title }} />
              </S.CardItem>
            ))}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditResultsQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>10</S.DotRounded>
            {results && <span dangerouslySetInnerHTML={{ __html: resources.question }}></span>}
          </S.ContentCardHeader>

          <S.Title dangerouslySetInnerHTML={{ __html: resources.title }} />

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditResourcesQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>
      </S.ContainerCards>
    </>
  );
};

export default Form;
