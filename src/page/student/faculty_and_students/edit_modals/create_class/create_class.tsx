import React, { useCallback, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";

import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { useModal } from "@/hooks/useModal";
import { IClassroomData } from "@/models/teaching-staff";

import * as S from "./styles";
import { EditTextButton } from "@/components/edit-text-button";

type Props = {
  questionId?: number;
  classType?: string;
  setData: React.Dispatch<React.SetStateAction<[IClassroomData[], IClassroomData[]]>>;
};

const CreateClass = ({ questionId, classType, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [className, setClassName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentsList, setStudentsList] = useState<string[]>([]);

  const handleAddStudentToArray = (name: string) => {
    if (name.length < 3) {
      toast.error("Digite um nome válido");
      return;
    }

    setStudentsList((oldValue) => [...oldValue, name]);
    setStudentName("");
  };

  const handleDeleteStudentFromArray = (index: number) => {
    const arrayCopy = Array.from(studentsList);

    arrayCopy.splice(index, 1);

    setStudentsList(arrayCopy);
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

        <S.Button onClick={() => handleAddStudentToArray(studentName)}>Adicionar</S.Button>
      </S.SetStudentNameContainer>
    );
  }, [studentName]);

  const renderStudentsList = useCallback(() => {
    return (
      <S.StudentsListContainer>
        {studentsList.map((student, index) => (
          <div key={`student-${index}`}>
            <li>{student}</li>
            <BsFillTrashFill size={20} onClick={() => handleDeleteStudentFromArray(index)} />
          </div>
        ))}
      </S.StudentsListContainer>
    );
  }, [studentsList]);

  const updateData = async (): Promise<void> => {
    try {
      await TeachingStaffServices.createClass(questionId || 0, className, studentsList);

      const { data } = await TeachingStaffServices.getClassroomChildrenData(questionId);

      setData((oldValue) => {
        oldValue[classType === "Mestrado" ? 0 : 1] = [...data];

        return oldValue;
      });

      toast.success("Turma criada com sucesso!");

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ao criar a turma, tente novamente mais tarde!");
    }
  };

  return (
    <S.Container>
      <S.ClassNameContainer>
        <p>Os representantes da turma</p>
        <S.Input
          type="text"
          placeholder="Nome da turma"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <p>são:</p>
      </S.ClassNameContainer>

      {renderAddStudent()}

      {renderStudentsList()}

      <EditTextButton event={updateData} />
    </S.Container>
  );
};

export default CreateClass;
