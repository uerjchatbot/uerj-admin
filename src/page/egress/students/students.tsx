import { Button as ButtonComponent } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { Question } from "@/models/Question";
import { Student } from "@/models/user";
import * as Private from "@/routes/paths/paths.private";
import { UserService } from "@/services/user.service";
import { Button } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";
interface UseLocationState {
  state: Question;
}

const Students: React.FC = () => {
  const { setLoading } = useLoading();

  const { state } = useLocation() as UseLocationState;
  const [students, setStudents] = React.useState<Student[]>([]);

  const navigate = useNavigate();

  const getComunications = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await UserService.collect();

      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [state.id, setStudents]);

  useEffect(() => {
    getComunications();
  }, [getComunications, state.id]);

  const handleBackNavigation = () =>
    navigate(Private.EGRESS_PATH(), {
      state
    });

  return (
    <S.Container>
      <S.Header>
        <S.SearchContainer>
          <S.Input type="text" placeholder="Pesquisar" />
          <ButtonComponent type="button">
            <span>
              <BsSearch size={16} />
            </span>
          </ButtonComponent>
        </S.SearchContainer>

        <S.ButtonGroup>
          <ButtonComponent type="button" outline onClick={handleBackNavigation}>
            <span>Voltar</span>
          </ButtonComponent>
        </S.ButtonGroup>
      </S.Header>
      <S.FormList>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Comunicação</th>
              <th>Público</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 &&
              students?.map((student, index) => (
                <tr key={`${student}_${index}`}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    {student.accept_email ? (
                      <span style={{ color: "blue" }}>Ativa</span>
                    ) : (
                      <span style={{ color: "red" }}>Desativada</span>
                    )}
                  </td>
                  <td>{student.degree}</td>

                  <S.Actions>
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={() => sendComunication({ id: form.id, degree: "master" })}
                    >
                      <FiEye size={22} />
                    </Button>
                  </S.Actions>
                </tr>
              ))}
          </tbody>
        </table>
      </S.FormList>
    </S.Container>
  );
};

export default Students;
