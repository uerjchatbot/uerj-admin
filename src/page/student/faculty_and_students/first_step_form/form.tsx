import React, { useState } from "react";
import * as S from "./styles";

import { BsPencil } from "react-icons/bs";

// type Props = {};

const Form = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <S.DescriptionContainer>
        <p>
          Nesta aba, você encontra informações sobre a direção da Faculdade de Formação de
          Professores da UERJ, a coordenação do Programa, os professores e a representação
          estudantil.
          <br />
          <br />
          Conheça um pouco mais sobre eles:
        </p>
        <S.ContainerButton>
          <S.EditButton>
            <span onClick={() => setIsEditing((oldValue) => !oldValue)}>
              {isEditing ? (
                "Cancelar"
              ) : (
                <>
                  Editar <BsPencil size={16} />
                </>
              )}
            </span>
          </S.EditButton>
        </S.ContainerButton>
      </S.DescriptionContainer>

      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>1</S.DotRounded>
            <span>Direção da Faculdade de Formação de Professores - FFP</span>
          </S.ContentCardHeader>

          <p>O PPGEDU faz parte da FFP que tem como Diretor o(a) Professor(a)</p>
          <S.Input placeholder="Nome do diretor(a)" />

          <p>Currículo Lattes</p>
          <S.Input placeholder="Lattes do diretor(a)" />

          <p>e Vice Professor(a) Dr(a)</p>
          <S.Input placeholder="Nome do(a) vice diretor(a)" />

          <p>Link currículo Lattes</p>
          <S.Input placeholder="Lattes do(a) vice diretor(a)" />

          <S.ContainerButton>
            <S.EditButton>
              <span onClick={() => setIsEditing((oldValue) => !oldValue)}>
                {isEditing ? (
                  "Cancelar"
                ) : (
                  <>
                    Editar <BsPencil size={16} />
                  </>
                )}
              </span>
            </S.EditButton>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>2</S.DotRounded>
            <span>Coordenação do Programa</span>
          </S.ContentCardHeader>

          <p>Os coordenadores do Programa (geral e adjunto) são o(a) Professor(a) Dr.(a)</p>
          <S.Input placeholder="Nome do diretor(a)" />

          <p>Currículo Lattes</p>
          <S.Input placeholder="Lattes do diretor(a)" />

          <p>e Vice Professor(a) Dr(a)</p>
          <S.Input placeholder="Nome do(a) vice diretor(a)" />

          <p>Link currículo Lattes</p>
          <S.Input placeholder="Lattes do(a) vice diretor(a)" />

          <S.ContainerButton>
            <S.EditButton>
              <span onClick={() => setIsEditing((oldValue) => !oldValue)}>
                {isEditing ? (
                  "Cancelar"
                ) : (
                  <>
                    Editar <BsPencil size={16} />
                  </>
                )}
              </span>
            </S.EditButton>
          </S.ContainerButton>
        </S.ContentCard>
      </S.ContainerCards>
    </>
  );
};

export default Form;
