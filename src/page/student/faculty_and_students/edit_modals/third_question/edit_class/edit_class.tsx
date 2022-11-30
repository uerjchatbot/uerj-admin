import React, { useCallback, useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";

import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { useModal } from "@/hooks/useModal";
import { IClassroomData } from "@/models/teaching-staff";

import * as S from "./styles";
import { EditTextButton } from "@/components/edit-text-button";

type Props = {
  questionId?: number;
  classId?: number;
  className?: string;
  studentsList?: string[];
  setData: React.Dispatch<React.SetStateAction<[IClassroomData[], IClassroomData[]]>>;
  classType: string;
};

const EditClass = ({ classId, questionId, className, studentsList, setData, classType }: Props) => {
  const { setIsVisible } = useModal();

  const [classNameCopy, setClassNameCopy] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentsListCopy, setStudentsListCopy] = useState<string[]>([]);

  const addStudentToArray = (name: string) => {
    if (name.length < 3) {
      toast.error("Digite um nome válido");
      return;
    }

    setStudentsListCopy((oldValue) => [...oldValue, name]);
    setStudentName("");
  };

  const deleteStudentFromArray = (index: number) => {
    const arrayCopy = Array.from(studentsListCopy);

    arrayCopy.splice(index, 1);

    setStudentsListCopy(arrayCopy);
  };

  const renderAddStudent = useCallback(() => {
    return (
      <S.SetStudentNameContainer>
        <S.Input
          type="text"
          placeholder="Nome do(a) representante"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <S.Button onClick={() => addStudentToArray(studentName)}>Adicionar</S.Button>
      </S.SetStudentNameContainer>
    );
  }, [studentName]);

  const renderStudentsList = useCallback(() => {
    return (
      <S.StudentsListContainer>
        {studentsListCopy.map((student, index) => (
          <div key={`student-${index}`}>
            <li>{student}</li>
            <BsFillTrashFill size={20} onClick={() => deleteStudentFromArray(index)} />
          </div>
        ))}
      </S.StudentsListContainer>
    );
  }, [studentsListCopy]);

  const updateData = async (): Promise<void> => {
    try {
      await TeachingStaffServices.updateMasterData(
        classId || 0,
        questionId || 0,
        classNameCopy,
        studentsListCopy
      );

      const { data } = await TeachingStaffServices.getClassroomChildrenData(questionId);

      setData((oldValue) => {
        oldValue[classType === "Mestrado" ? 0 : 1] = [...data];

        return oldValue;
      });

      toast.success("Turma alterada com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao atualizar os dados, tente novamente mais tarde!");
    }
  };

  useEffect(() => {
    if (studentsList && studentsList.length > 0) setStudentsListCopy(studentsList);
  }, [studentsList]);

  useEffect(() => {
    if (className && className.length > 0) setClassNameCopy(className);
  }, [className]);

  return (
    <S.Container>
      <S.ClassNameContainer>
        <p>Os representantes da turma</p>
        <S.Input
          type="text"
          placeholder="Nome da turma"
          defaultValue={className}
          onChange={(e) => setClassNameCopy(e.target.value)}
        />
        <p>são:</p>
      </S.ClassNameContainer>

      {renderAddStudent()}

      {renderStudentsList()}

      <EditTextButton event={updateData} />
    </S.Container>
  );
};

export default EditClass;
