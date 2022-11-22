import React, { useState } from "react";
import * as S from "./styles";

import { BsPencil, BsTrash } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

// type Props = {};

const names = ["Beatriz Moura", "Joyce Paiva", "Mauro Perez"];

const Form = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <S.ContainerCards>
      <S.ContentCard>
        <S.ContentCardHeader>
          <S.DotRounded>3</S.DotRounded>
          <span>Representação estudantil</span>
        </S.ContentCardHeader>

        <S.DescriptionContainer>
          <p>
            Os representantes de turma são encarregados de representar os interesses do conjunto dos
            estudantes no âmbito do Programa, bem como participar, com voz e voto, do Colegiado do
            Programa, em Comissões e em grupos de trabalho, de modo a colaborar com o êxito dos
            processos formativos e a consecução dos objetivos dos cursos de pós-graduação.
            <br />
            Cada uma das turmas em andamento dos cursos de mestrado e de doutorado conta com um
            representante titular e um suplente, ambos devidamente matriculados e eleitos pelos
            estudantes.
          </p>
          <div>
            <S.EditButton onClick={() => setIsEditing((oldValue) => !oldValue)}>
              {isEditing ? (
                <>Cancelar</>
              ) : (
                <>
                  Editar <BsPencil size={16} />
                </>
              )}
            </S.EditButton>
          </div>
        </S.DescriptionContainer>

        <S.ClassContainer>
          <S.ClassHeaderContainer>
            <p>1- mestrado</p>
            <button>
              Adicionar turma <IoIosPeople />
            </button>
          </S.ClassHeaderContainer>

          <S.ClassDataContainer>
            <S.ClassDataHeaderContainer>
              <p>
                <strong>A -</strong> Os representantes da turma Pedagogia são:
              </p>

              <div>
                <button>
                  <FiEdit />
                </button>
                <button>
                  <BsTrash />
                </button>
              </div>
            </S.ClassDataHeaderContainer>

            <S.ClassDataNamesContainer>
              <ul>
                {names.map((name: string, idx: number) => (
                  <li key={`name-${idx}`}>{name}</li>
                ))}
              </ul>
            </S.ClassDataNamesContainer>
          </S.ClassDataContainer>

          <S.ClassDataContainer>
            <S.ClassDataHeaderContainer>
              <p>
                <strong>B -</strong> Os representantes da turma Pedagogia são:
              </p>

              <div>
                <button>
                  <FiEdit />
                </button>
                <button>
                  <BsTrash />
                </button>
              </div>
            </S.ClassDataHeaderContainer>

            <S.ClassDataNamesContainer>
              <ul>
                {names.map((name: string, idx: number) => (
                  <li key={`name-${idx}`}>{name}</li>
                ))}
              </ul>
            </S.ClassDataNamesContainer>
          </S.ClassDataContainer>

          <S.ClassDataContainer>
            <S.ClassDataHeaderContainer>
              <p>
                <strong>C -</strong> Os representantes da turma Pedagogia são:
              </p>

              <div>
                <button>
                  <FiEdit />
                </button>
                <button>
                  <BsTrash />
                </button>
              </div>
            </S.ClassDataHeaderContainer>

            <S.ClassDataNamesContainer>
              <ul>
                {names.map((name: string, idx: number) => (
                  <li key={`name-${idx}`}>{name}</li>
                ))}
              </ul>
            </S.ClassDataNamesContainer>
          </S.ClassDataContainer>
        </S.ClassContainer>
      </S.ContentCard>
    </S.ContainerCards>
  );
};

export default Form;
