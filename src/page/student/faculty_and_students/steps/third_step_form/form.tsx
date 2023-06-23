import { useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

import { Button } from "@/components/button";

import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { FaUserAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { CreateTeacher } from "../../edit_modals/create_teacher";
import { EditFourthQuestion } from "../../edit_modals/fourth_question";
import { EditTeachers } from "../../edit_modals/fourth_question/edit_teachers";
import * as S from "./styles";

type Props = {
  question: Question;
};

const Form = ({ question }: Props) => {
  const { setIsVisible, setTitle, setComponent } = useModal();

  const [fourthQuestion, setFourthQuestion] = useState<Question>(question.childrens[3]);

  const getTeachersData = async (): Promise<void> => {
    try {
      const { data } = await QuestionServices.getQuestionByNodeId(fourthQuestion.chatbot_id);

      setFourthQuestion(data);
    } catch (error) {
      toast.error("Houve um erro ao pegar as informações dos professores");
    }
  };

  const handleOpenEditQuestionModal = () => {
    setTitle(`Editar ${fourthQuestion.question}`);

    setComponent(<EditFourthQuestion setQuestion={setFourthQuestion} question={fourthQuestion} />);

    setIsVisible(true);
  };

  const handleOpenEditTeachersModal = (question: Question) => {
    setTitle(`Editar Professor(a)`);

    setComponent(<EditTeachers question={question} setQuestion={setFourthQuestion} />);

    setIsVisible(true);
  };

  const handleOpenAddTeacherModal = () => {
    setTitle(`Adicionar Professor(a)`);

    setComponent(<CreateTeacher question={fourthQuestion} setQuestion={setFourthQuestion} />);

    setIsVisible(true);
  };

  const handleDeleteClass = async (question: Question) => {
    try {
      await QuestionServices.deleteQuestion(question);

      setFourthQuestion((state) => ({
        ...state,
        childrens: state.childrens.filter((child) => child.id !== question.id)
      }));

      toast.success("Professo(a) deletado(a) com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ao deletar o(a) professor(a), tente novamente!");
    }
  };

  useEffect(() => {
    getTeachersData();
  }, []);

  return (
    <S.ContainerCards>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>4</S.DotRounded>
          <span>{fourthQuestion?.question}</span>
        </S.ContentCardHeader>

        <S.DescriptionContainer>
          <div dangerouslySetInnerHTML={{ __html: fourthQuestion?.title }} />

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>

            <S.AddTeacherButton type={"button"}>
              <span onClick={() => handleOpenAddTeacherModal()}>
                Adicionar professor(a) <FaUserAlt size={16} />
              </span>
            </S.AddTeacherButton>
          </S.ContainerButton>
        </S.DescriptionContainer>

        {fourthQuestion.childrens?.map((child, index) => (
          <S.ClassDataContainer key={child.id}>
            <S.ClassDataHeaderContainer>
              <S.Card>
                <strong>{index + 1}. </strong>
                <span dangerouslySetInnerHTML={{ __html: child.title }} />
              </S.Card>

              <div>
                <button>
                  <FiEdit onClick={() => handleOpenEditTeachersModal(child)} />
                </button>
                <button>
                  <BsTrash onClick={() => handleDeleteClass(child)} />
                </button>
              </div>
            </S.ClassDataHeaderContainer>
          </S.ClassDataContainer>
        ))}
      </S.ContentCard>
    </S.ContainerCards>
  );
};

export default Form;
