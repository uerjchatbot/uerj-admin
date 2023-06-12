import { Button as ButtonComponent } from "@/components/button";
import { Question } from "@/models/Question";
import * as Private from "@/routes/paths/paths.private";
import { Fetch, FormService } from "@/services/form/form.service";
import { Button } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { BsEye, BsPlusLg, BsSearch } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";
interface UseLocationState {
  state: Question;
}

const Forms: React.FC = () => {
  const { state } = useLocation() as UseLocationState;
  const [forms, setForms] = React.useState<Fetch[]>([]);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleToNewForm(): void {
    navigate(`${pathname}/new-form`, {
      state
    });
  }

  const getForms = useCallback(async (): Promise<void> => {
    try {
      const { data } = await FormService.list(state.id);

      setForms(data.forms);
    } catch (error) {
      console.error(error);
    }
  }, [state.id, setForms]);

  useEffect(() => {
    getForms();
  }, [getForms, state.id]);

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
          <ButtonComponent type="button" onClick={handleToNewForm}>
            <span>
              <BsPlusLg size={16} />
              Novo Formulário
            </span>
          </ButtonComponent>
          <ButtonComponent type="button" outline onClick={handleBackNavigation}>
            <span>Voltar</span>
          </ButtonComponent>
        </S.ButtonGroup>
      </S.Header>
      <S.FormList>
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {forms.length > 0 &&
              forms?.map((form) => (
                <tr key={form.id}>
                  <td>{form.title}</td>
                  <S.Actions>
                    <a href={form.form_url} target="_blank" rel="noreferrer">
                      <Button variant="contained" color="primary" size="large">
                        <BsEye size={22} />
                      </Button>
                    </a>
                    <Button variant="contained" color="secondary">
                      <FiSend size={22} />
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

export default Forms;
