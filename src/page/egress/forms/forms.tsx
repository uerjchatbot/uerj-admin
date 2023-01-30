import React from "react";
import { Button } from "@/components/button";
import { BsSearch, BsPlusLg, BsPencil, BsFillTrashFill } from "react-icons/bs";
import * as S from "./styles";
import { FiSend } from "react-icons/fi";

const Forms: React.FC = () => {
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
          <Button type="button">
            <span>
              <BsPlusLg size={16} />
              Novo Formulário
            </span>
          </Button>
          <Button type="button" outline>
            <span>Voltar</span>
          </Button>
        </S.ButtonGroup>
      </S.Header>
      <S.FormList>
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
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

export default Forms;
