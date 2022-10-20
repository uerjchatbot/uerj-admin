import React, { useState } from "react";
import * as S from "./styles";

import { BsPencil } from "react-icons/bs";

// type Props = {};

const Form = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.ContainerCards>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>4</S.DotRounded>
          <span>Professores</span>
        </S.ContentCardHeader>

        <S.DescriptionContainer>
          <p>
            Nossos professores/pesquisadores têm formação ampla e compatível com a área de
            concentração e com as linhas pesquisa do PPGEdu. Para conhecê-los melhor, você poderá
            acessar o Currículo Lattes de cada um deles através dos links abaixo.
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
      </S.ContentCard>
    </S.ContainerCards>
  );
};

export default Form;
