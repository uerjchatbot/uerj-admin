import { useCallback, useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question/question.service";
import { formatIndexToLetter } from "@/utils/formarter";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { CreateClass } from "../../edit_modals/create_class";
import { EditThirdQuestion } from "../../edit_modals/third_question";
import * as S from "./styles";

type Props = {
  question: Question;
};

const Form = ({ question }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [thirdQuestion, setThirdQuestion] = useState(question.childrens[2]);

  const [master, setMaster] = useState<Question>({} as Question);
  const [doctor, setDoctor] = useState<Question>({} as Question);

  async function getClasses(): Promise<void> {
    const { data } = await QuestionServices.getQuestionByNodeId(thirdQuestion.chatbot_id);

    setMaster(data.childrens[0]);
    setDoctor(data.childrens[1]);

    const { data: masterChildrens } = await QuestionServices.getQuestionByNodeId(master.chatbot_id);
    const { data: doctorChildrens } = await QuestionServices.getQuestionByNodeId(doctor.chatbot_id);

    setMaster((state) => ({ ...state, childrens: masterChildrens.childrens }));
    setDoctor((state) => ({ ...state, childrens: doctorChildrens.childrens }));
  }

  const handleOpenEditQuestionModal = () => {
    setTitle(`Editar ${thirdQuestion.question}`);

    setComponent(<EditThirdQuestion question={thirdQuestion} setQuestion={setThirdQuestion} />);

    setIsVisible(true);
  };

  // const handleOpenEditClassModal = (
  //   representationId: number,
  //   classId: number,
  //   className: string,
  //   studentsList: string[],
  //   classType: string
  // ) => {
  //   setTitle(`Editar ${question.childrens[3].title}`);

  //   // setComponent(
  //   //   <EditClass
  //   //     questionId={childrenIds[representationId]}
  //   //     classId={classId}
  //   //     className={className}
  //   //     studentsList={studentsList}
  //   //     setData={setClassroomData}
  //   //     classType={classType}
  //   //   />
  //   // );

  //   setIsVisible(true);
  // };

  const handleOpenAddClassModal = (question: Question) => {
    setTitle(`Adicionar Turma de ${question.question}`);

    setComponent(<CreateClass question={question} setQuestion={setThirdQuestion} />);

    setIsVisible(true);
  };

  // const handleDeleteClass = async (classId: number, questionId: number, classType: string) => {
  //   try {
  //     await TeachingStaffServices.deleteClass(classId, questionId);

  //     const { data } = await TeachingStaffServices.getClassroomChildrenData(questionId);

  //     const dataCopy = Array.from(classroomData);

  //     dataCopy[classType === "Mestrado" ? 0 : 1] = data;

  //     setClassroomData(dataCopy as unknown as [IClassroomData[], IClassroomData[]]);

  //     toast.success("Turma deletada com sucesso!");
  //   } catch (error) {
  //     toast.error("Houve um erro ao deletar a turma, tente novamente!");
  //   }
  // };

  const renderClassList = useCallback(() => {
    return (
      <div>
        {[master, doctor]?.map((node, index) => (
          <div key={node?.id}>
            <S.ClassHeaderContainer>
              <p>{`${index + 1}- ${node.question}`}</p>

              <button onClick={() => handleOpenAddClassModal(doctor)}>
                Adicionar turma <IoIosPeople />
              </button>
            </S.ClassHeaderContainer>

            {node?.childrens?.map((child, childIndex: number) => {
              return (
                <S.ClassDataContainer key={child?.id}>
                  <S.ClassDataHeaderContainer>
                    <p>
                      <strong>{formatIndexToLetter(childIndex)} - </strong>
                      {child.title}
                    </p>

                    <div>
                      <button>
                        <FiEdit
                        // onClick={() => {
                        //   handleOpenEditClassModal(
                        //     index,
                        //     classroom.index,
                        //     classroom.matter,
                        //     classroom.students,
                        //     representationClass.question
                        //   );
                        // }}
                        />
                      </button>
                      <button>
                        <BsTrash
                        // onClick={() =>
                        //   handleDeleteClass(
                        //     index2,
                        //     childrenIds[index],
                        //     representationClass.question
                        //   )
                        // }
                        />
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
  }, []);

  useEffect(() => {
    if (!thirdQuestion.id) return;

    getClasses();
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
