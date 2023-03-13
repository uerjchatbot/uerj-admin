import { Button } from "@/components/button";
import * as Private from "@/routes/paths/paths.private";
import React from "react";
import { BsFillTrashFill, BsPencil, BsPlusLg, BsSearch } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

const Comunications: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleToNewForm(): void {
    navigate(`${pathname}/new-comunication`);
  }

  const handleBackNavigation = () => navigate(Private.EGRESS_PATH());

  return (
    <S.Container>
      <S.Header>
        <S.SearchContainer>
          <S.Input type="text" placeholder="Pesquisar" />
          <Button type="button">
            <span>
              <BsSearch size={16} />
            </span>
          </Button>
        </S.SearchContainer>

        <S.ButtonGroup>
          <Button type="button" onClick={handleToNewForm}>
            <span>
              <BsPlusLg size={16} />
              Novo Formulário
            </span>
          </Button>
          <Button type="button" outline onClick={handleBackNavigation}>
            <span>Voltar</span>
          </Button>
        </S.ButtonGroup>
      </S.Header>
      <S.FormList>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Enviado para</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Produtos Acadêmicos</td>
              <td>Doutor</td>
              <S.Actions>
                <S.Button>
                  <BsPencil size={20} />
                </S.Button>
                <S.Button>
                  <FiSend size={20} />
                </S.Button>
                <S.Button isDelete>
                  <BsFillTrashFill size={20} />
                </S.Button>
              </S.Actions>
            </tr>
            <tr>
              <td>Vida Profissional</td>
              <td>Doutor, Mestre</td>
              <S.Actions>
                <S.Button>
                  <BsPencil size={20} />
                </S.Button>
                <S.Button>
                  <FiSend size={20} />
                </S.Button>
                <S.Button isDelete>
                  <BsFillTrashFill size={20} />
                </S.Button>
              </S.Actions>
            </tr>
            <tr>
              <td>Envolvimento no ensino</td>
              <td>Doutor</td>
              <S.Actions>
                <S.Button>
                  <BsPencil size={20} />
                </S.Button>
                <S.Button>
                  <FiSend size={20} />
                </S.Button>
                <S.Button isDelete>
                  <BsFillTrashFill size={20} />
                </S.Button>
              </S.Actions>
            </tr>
          </tbody>
        </table>
      </S.FormList>
    </S.Container>
  );
};

export default Comunications;
