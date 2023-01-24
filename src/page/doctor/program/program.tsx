/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPencil, BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";

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
import { DoctorProgramServices } from "@/services/doctor/program.service";
import { DOCTOR_PATH } from "@/routes/paths/paths.private";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { orderChildrens } from "@/utils/order";

//? Edit Modals
import { IDoctorDefaultData, IDoctorProgram, IDoctorTeacher } from "@/models/doctor";
import { EditProgramQuestion } from "./edit-modals/program";
import { EditProjectQuestion } from "./edit-modals/project";
import { EditHandbagQuestion } from "./edit-modals/handbag";
import { EditLinesQuestion } from "./edit-modals/lines";
import { GrAdd } from "react-icons/gr";
import { CreateTeacher } from "./create_teacher";

const Program = () => {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { state }: { state: any } = useLocation();
  const { setTitle, setComponent, setIsVisible } = useModal();

  const [nodeQuestion, setNodeQuestion] = useState<IDoctorDefaultData>({} as IDoctorDefaultData);

  const [childrens, setChildrens] = useState<IDoctorProgram>({} as IDoctorProgram);

  const [lineFirstItem, setLineFirstItem] = useState<IDoctorDefaultData>({} as IDoctorDefaultData);
  const [lineSecondItem, setLineSecondItem] = useState<IDoctorDefaultData>(
    {} as IDoctorDefaultData
  );

  const [firstTeachers, setFirstTeachers] = useState<IDoctorTeacher[]>([]);
  const [secondTeachers, setSecondTeachers] = useState<IDoctorTeacher[]>([]);

  const handleNavigateBack = () => navigate(DOCTOR_PATH());

  const getNodeQuestion = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await DoctorProgramServices.getData(state.childrenId);

      data.childrens = orderChildrens(data.childrens);

      setNodeQuestion(data);

      setChildrens({
        program: data.childrens[0],
        lines: data.childrens[1],
        project: data.childrens[2],
        handbag: data.childrens[3]
      });

      setLineFirstItem(data.childrens[1].childrens[0]);
      setLineSecondItem(data.childrens[1].childrens[1]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações do título");
    }
  }, [setLineFirstItem, setLineSecondItem]);

  const getTeachersData = useCallback(async () => {
    try {
      setLoading(true);

      const teachersFirstList = await DoctorProgramServices.indexTeachers(
        lineFirstItem?.childrens[0]
      );

      setFirstTeachers(teachersFirstList?.data);

      const teachersSecondList = await DoctorProgramServices.indexTeachers(
        lineSecondItem?.childrens[0]
      );

      setSecondTeachers(teachersSecondList?.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao pegar as informações do título");
    }
  }, [lineFirstItem, lineSecondItem]);

  const handleOpenEditProgramQuestionModal = (): void => {
    setTitle(`Editar ${childrens.program.question}`);

    setComponent(<EditProgramQuestion setData={setChildrens} childrens={childrens} />);

    setIsVisible(true);
  };

  const handleOpenEditLinesQuestionModal = (): void => {
    setTitle(`Editar ${childrens.lines.question}`);

    setComponent(<EditLinesQuestion setData={setChildrens} childrens={childrens} />);

    setIsVisible(true);
  };

  const handleOpenEditHandbagQuestionModal = (): void => {
    setTitle(`Editar ${childrens.handbag.question}`);

    setComponent(<EditHandbagQuestion setData={setChildrens} childrens={childrens} />);

    setIsVisible(true);
  };

  const handleOpenEditProjectQuestionModal = (): void => {
    setTitle(`Editar ${childrens.project.question}`);

    setComponent(<EditProjectQuestion setData={setChildrens} childrens={childrens} />);

    setIsVisible(true);
  };

  const handleDeleteTeacher = async (teacher: IDoctorTeacher, question: IDoctorDefaultData) => {
    try {
      setLoading(true);

      const { data } = await DoctorProgramServices.deleteTeacher({ teacher, question });

      question.id === lineFirstItem.childrens[0].id
        ? setFirstTeachers((prev) => prev.filter((item) => item.index !== teacher.index))
        : setSecondTeachers((prev) => prev.filter((item) => item.index !== teacher.index));

      toast.success("Professor removido com sucesso");

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Houve um erro ao tentar deletar professor");
    }
  };

  const handleCreateTeacher = async (data: { question: IDoctorDefaultData }) => {
    setTitle(`Adicionar Professor`);

    const setData = data.question.id === lineFirstItem.id ? setLineFirstItem : setLineSecondItem;

    setComponent(<CreateTeacher setData={setData} question={data.question} />);

    setIsVisible(true);
  };

  useEffect(() => {
    getNodeQuestion();
  }, []);

  useEffect(() => {
    if (lineFirstItem.question && lineSecondItem.question) {
      getTeachersData();
    }
  }, [lineFirstItem, lineSecondItem]);

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
              <span>{childrens?.program?.question}</span>
            </ContentCardHeader>

            <div>
              <p>{childrens?.program?.title}</p>
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
              <span>{childrens.lines?.question}</span>
            </ContentCardHeader>

            <CardItem>
              <HeaderTeacher>
                <span>
                  <strong>1</strong> - {childrens.lines?.childrens[0]?.question}
                </span>
                <button onClick={() => handleCreateTeacher({ question: lineFirstItem })}>
                  Adicionar Professor(a) <GrAdd />
                </button>
              </HeaderTeacher>
              <TeacherListContainer>
                {firstTeachers &&
                  firstTeachers.map((item) => (
                    <TeacherItem key={`${item.index}-${item.teacher}`}>
                      {item.teacher}{" "}
                      <button>
                        <BsTrash
                          onClick={() => handleDeleteTeacher(item, lineFirstItem.childrens[0])}
                        />
                      </button>
                    </TeacherItem>
                  ))}
              </TeacherListContainer>
            </CardItem>

            <CardItem>
              <HeaderTeacher>
                <span>
                  <strong>2</strong> - {childrens.lines?.childrens[1]?.question}
                </span>
                <button onClick={() => handleCreateTeacher({ question: lineSecondItem })}>
                  Adicionar Professor(a) <GrAdd />
                </button>
              </HeaderTeacher>
              <TeacherListContainer>
                {secondTeachers &&
                  secondTeachers.map((item) => (
                    <TeacherItem key={`${item.index}-${item.teacher}`}>
                      {item.teacher}
                      <button>
                        <BsTrash
                          onClick={() => handleDeleteTeacher(item, lineSecondItem.childrens[0])}
                        />
                      </button>
                    </TeacherItem>
                  ))}
              </TeacherListContainer>
            </CardItem>

            <Button outline={true} type={"button"}>
              <span onClick={handleOpenEditLinesQuestionModal}>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </ContentCard>

          <ContentCard>
            <ContentCardHeader>
              <DotRounded>3</DotRounded>
              <span>{childrens?.project?.question}</span>
            </ContentCardHeader>

            <div>
              <p>{childrens?.project?.title}</p>
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
              <span>{childrens?.handbag?.question}</span>
            </ContentCardHeader>

            <div>
              <p>{childrens?.handbag?.title}</p>
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
