import { useCallback, useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { toast } from "react-toastify";
import { CreateClass } from "../../edit_modals/create_class";
import { EditThirdQuestion } from "../../edit_modals/third_question";
import { EditClass } from "../../edit_modals/third_question/edit_class";
import * as S from "./styles";

type Props = {
  question: Question;
};

const Form = ({ question }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [thirdQuestion, setThirdQuestion] = useState(question.childrens[2]);

  async function getClasses(): Promise<void> {
    const { data } = await QuestionServices.getQuestionByNodeId(thirdQuestion.chatbot_id);

    const { data: master } = await QuestionServices.getQuestion(data.childrens[0]);
    const { data: doctor } = await QuestionServices.getQuestion(data.childrens[1]);

    setThirdQuestion({
      ...data,
      childrens: [
        {
          ...data.childrens[0],
          childrens: master.childrens
        },
        {
          ...data.childrens[1],
          childrens: doctor.childrens
        }
      ]
    });
  }

  const handleOpenEditQuestionModal = () => {
    setTitle(`Editar ${thirdQuestion.question}`);

    setComponent(<EditThirdQuestion question={thirdQuestion} setQuestion={setThirdQuestion} />);

    setIsVisible(true);
  };

  const handleOpenEditClassModal = (question: Question) => {
    setTitle(`Editar Turma`);

    setComponent(<EditClass question={question} setQuestion={setThirdQuestion} />);

    setIsVisible(true);
  };

  const handleOpenAddClassModal = (question: Question) => {
    setTitle(`Adicionar Turma de ${question.question}`);

    setComponent(<CreateClass question={question} setQuestion={setThirdQuestion} />);

    setIsVisible(true);
  };

  const handleDeleteClass = async (question: Question) => {
    try {
      await QuestionServices.deleteQuestion(question);

      setThirdQuestion((state) => ({
        ...state,
        childrens: state.childrens.map((child) => {
          return { ...child, childrens: child.childrens.filter((c) => c.id !== question.id) };
        })
      }));

      toast.success("Turma deletada com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ao deletar a turma, tente novamente!");
    }
  };

  const renderClassList = useCallback(() => {
    return (
      <div>
        {thirdQuestion?.childrens?.map((node, index) => (
          <div key={node?.id}>
            <S.ClassHeaderContainer>
              <p>{`${index + 1}- ${node.question}`}</p>

              <button onClick={() => handleOpenAddClassModal(node)}>
                Adicionar turma <IoIosPeople />
              </button>
            </S.ClassHeaderContainer>

            {node?.childrens?.map((child, childIndex: number) => {
              return (
                <S.ClassDataContainer key={child?.id}>
                  <S.ClassDataHeaderContainer>
                    <S.Card>
                      <strong>{childIndex + 1}. </strong>
                      <span dangerouslySetInnerHTML={{ __html: child.title }} />
                    </S.Card>

                    <div>
                      <button>
                        <FiEdit
                          onClick={() => {
                            handleOpenEditClassModal(child);
                          }}
                        />
                      </button>
                      <button>
                        <BsTrash onClick={() => handleDeleteClass(child)} />
                      </button>
                    </div>
                  </S.ClassDataHeaderContainer>
                </S.ClassDataContainer>
              );
            })}
          </div>
        ))}
      </div>
    );
  }, [thirdQuestion?.childrens]);

  useEffect(() => {
    if (thirdQuestion.id) getClasses();
  }, [thirdQuestion.id]);

  return (
    <S.ContainerCards>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>3</S.DotRounded>
          <S.QuestionTitle dangerouslySetInnerHTML={{ __html: thirdQuestion.question }} />
        </S.ContentCardHeader>

        <S.DescriptionContainer>
          <S.Title dangerouslySetInnerHTML={{ __html: thirdQuestion.title }} />

          <S.EditButtonContainer>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.EditButtonContainer>
        </S.DescriptionContainer>

        <S.ClassContainer>{renderClassList()}</S.ClassContainer>
      </S.ContentCard>
    </S.ContainerCards>
  );
};

export default Form;
