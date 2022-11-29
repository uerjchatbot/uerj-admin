import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";

import { TeachingStaffServices } from "@/services/student/teaching-staff.service";
import { useModal } from "@/hooks/useModal";
import { IClassroomData } from "@/models/teaching-staff";

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
  const inputNameRef = useRef(null);

  const addStudentToArray = (name: string) => {
    setStudentsListCopy((oldValue) => [...oldValue, name]);
    setStudentName("");
    // if (inputNameRef.current) {
    //   inputNameRef.current.value.reset();
    // }
  };

  const deleteStudentFromArray = (index: number) => {
    const arrayCopy = Array.from(studentsListCopy);

    arrayCopy.splice(index, 1);

    setStudentsListCopy(arrayCopy);
  };

  const renderAddStudent = useCallback(() => {
    return (
      <div>
        <input
          type="text"
          ref={inputNameRef}
          placeholder="Nome do(a) representante"
          defaultValue={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <button onClick={() => addStudentToArray(studentName)}>Adicionar</button>
      </div>
    );
  }, [studentName]);

  const renderStudentsList = useCallback(() => {
    return (
      <ul>
        {studentsListCopy.map((student, index) => (
          <div key={`student-${index}`}>
            <li>{student}</li>
            <BsFillTrashFill size={20} onClick={() => deleteStudentFromArray(index)} />
          </div>
        ))}
      </ul>
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
    <div>
      <div>
        Os representantes da turma
        <input
          type="text"
          placeholder="Nome da turma"
          defaultValue={className}
          onChange={(e) => setClassNameCopy(e.target.value)}
        />
        são:
      </div>

      {renderAddStudent()}

      {renderStudentsList()}

      <button onClick={updateData}>Salvar</button>
    </div>
  );
};

export default EditClass;
