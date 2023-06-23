/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { useModal } from "@/hooks/useModal";
import { MASTER_PATH } from "@/routes/paths/paths.private";
import {
  CardItem,
  Container,
  ContainerButton,
  ContainerCards,
  ContentCard,
  ContentCardHeader,
  DotRounded,
  HeaderTeacher,
  TeacherItem,
  TeacherListContainer
} from "./styles";

//? Edit Modals
import { Question } from "@/models/Question";
import { QuestionServices } from "@/services/question.service";
import { GrAdd } from "react-icons/gr";
import { CreateTeacher } from "./create_teacher";
import { EditHandbagQuestion } from "./edit-modals/handbag";
import { EditProgramQuestion } from "./edit-modals/program";
import { EditProjectQuestion } from "./edit-modals/project";

interface UseLocationState {
  state: Question;
}

const Program = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state } = useLocation() as UseLocationState;
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [nodeQuestion, setNodeQuestion] = useState<Question>({} as Question);
  const [program, setProgram] = useState<Question>({} as Question);
  const [line, setLine] = useState<Question>({} as Question);
  const [project, setProject] = useState<Question>({} as Question);
  const [handbag, setHandbag] = useState<Question>({} as Question);

  const [lines, setLines] = useState<Question>({} as Question);

  const handleNavigateBack = () => navigate(MASTER_PATH());

  const getNodeQuestion = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.getQuestion(state);

      setNodeQuestion(data);

      setProgram(data.childrens[0]);
      setLine(data.childrens[1]);
      setProject(data.childrens[2]);
      setHandbag(data.childrens[3]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações");
    }
  }, []);

  const getLines = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await QuestionServices.getQuestion(line);

      const { data: first } = await QuestionServices.getQuestion(data.childrens[0]);
      const { data: second } = await QuestionServices.getQuestion(data.childrens[1]);

      setLines({
        ...data,
        childrens: [
          {
            ...data.childrens[0],
            childrens: first.childrens
          },
          {
            ...data.childrens[1],
            childrens: second.childrens
          }
        ]
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações de linhas de pesquisa");
    }
  }, [line.id]);

  const handleOpenEditProgramQuestionModal = (): void => {
    setTitle(`Editar ${program.question}`);

    setComponent(<EditProgramQuestion setQuestion={setProgram} question={program} />);

    setIsVisible(true);
  };

  const handleOpenEditLinesQuestionModal = (): void => {
    setTitle(`Editar ${line.question}`);

    // setComponent(<EditLinesQuestion setData={setChildrens} childrens={childrens} />);

    setIsVisible(true);
  };

  const handleOpenEditHandbagQuestionModal = (): void => {
    setTitle(`Editar ${handbag.question}`);

    setComponent(<EditHandbagQuestion question={handbag} setQuestion={setHandbag} />);

    setIsVisible(true);
  };

  const handleOpenEditProjectQuestionModal = (): void => {
    setTitle(`Editar ${project.question}`);

    setComponent(<EditProjectQuestion setQuestion={setProject} question={project} />);

    setIsVisible(true);
  };

  const handleDeleteTeacher = async (question: Question) => {
    try {
      setLoading(true);

      await QuestionServices.deleteQuestion(question);

      setLines((state) => ({
        ...state,
        childrens: state.childrens.map((child) => {
          return { ...child, childrens: child.childrens.filter((c) => c.id !== question.id) };
        })
      }));

      toast.success("Professor removido com sucesso");

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao tentar deletar professor");
    }
  };

  const handleCreateTeacher = async (data: { question: Question }) => {
    setTitle(`Adicionar Professor`);

    setComponent(<CreateTeacher setData={setLines} question={data.question} />);

    setIsVisible(true);
  };

  useEffect(() => {
    getNodeQuestion();
  }, []);

  useEffect(() => {
    if (line.id) getLines();
  }, [getLines, line.id]);

  return (
    <Container>
      <ContainerButton>
        <Button outline={true} type={"button"}>
          <span onClick={handleNavigateBack}>Voltar</span>
        </Button>
      </ContainerButton>

      <>
        <ContainerCards>
          <ContentCard>
            <ContentCardHeader>
              <DotRounded>1</DotRounded>
              <span>{program.question}</span>
            </ContentCardHeader>

            <div>
              <p dangerouslySetInnerHTML={{ __html: program?.title }} />
            </div>

            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditProgramQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </ContentCard>

          <ContentCard>
            <ContentCardHeader>
              <DotRounded>2</DotRounded>
              <span>{line.question}</span>
            </ContentCardHeader>

            {lines.childrens &&
              lines.childrens.map((child, index) => (
                <CardItem key={child.id}>
                  <HeaderTeacher>
                    <div>
                      <span>{index + 1}.</span>
                      <p dangerouslySetInnerHTML={{ __html: child.question }} />
                    </div>
                    <button onClick={() => handleCreateTeacher({ question: child })}>
                      Adicionar Professor(a) <GrAdd />
                    </button>
                  </HeaderTeacher>
                  <TeacherListContainer>
                    {child.childrens &&
                      child.childrens.map((c) => (
                        <TeacherItem key={c.id}>
                          <p dangerouslySetInnerHTML={{ __html: c.title }} />
                          <button>
                            <BsTrash onClick={() => handleDeleteTeacher(c)} />
                          </button>
                        </TeacherItem>
                      ))}
                  </TeacherListContainer>
                </CardItem>
              ))}

            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditLinesQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </ContentCard>

          <ContentCard>
            <ContentCardHeader>
              <DotRounded>3</DotRounded>
              <span>{project?.question}</span>
            </ContentCardHeader>

            <div>
              <p dangerouslySetInnerHTML={{ __html: project?.title }} />
            </div>

            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditProjectQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </ContentCard>

          <ContentCard>
            <ContentCardHeader>
              <DotRounded>4</DotRounded>
              <span>{handbag?.question}</span>
            </ContentCardHeader>

            <div>
              <p dangerouslySetInnerHTML={{ __html: handbag?.title }} />
            </div>

            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditHandbagQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </ContentCard>
        </ContainerCards>
      </>
    </Container>
  );
};

export default Program;
