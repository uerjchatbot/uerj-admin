import React from "react";
import { BsPencil, BsTrash } from "react-icons/bs";

import * as S from "./styles";

import { Button } from "@/components/button";
import { useModal } from "@/hooks/useModal";
import { EditPageDescription } from "../../edit_modals/page_description";
import { EditFirstQuestion } from "../../edit_modals/first_question";
import { EditSecondQuestion } from "../../edit_modals/second_question";
import { IEventChildrenData } from "@/models/events";
import { EventServices } from "@/services/student/events.service";
import { formatIndexToLetter, formatStringDateToPtBr } from "@/utils/formarter";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {
  title?: string;
  firstEvent?: IEventChildrenData;
  secondEvent?: IEventChildrenData;
};

const Form = ({ title, firstEvent, secondEvent }: Props) => {
  const { setTitle, setComponent, setIsVisible } = useModal();

  return (
    <>
      <S.DescriptionContainer>
        {title && <div>{title}</div>}
        {/* {title && <div dangerouslySetInnerHTML={{ __html: title.replaceAll("\n", "<br />") }} />} */}

        <S.ContainerButton>
          <Button outline={true} type={"button"}>
            {/* <span onClick={handleOpenEditTitleModal}> */}
            <span>
              Editar <BsPencil size={16} />
            </span>
          </Button>
        </S.ContainerButton>
      </S.DescriptionContainer>

      <S.ContainerCards>
        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>1</S.DotRounded>
            {firstEvent && <span>{firstEvent.question}</span>}
          </S.ContentCardHeader>

          {firstEvent?.childrens && (
            <>
              <S.HourAndDateContainer>
                {firstEvent?.childrens[0].title.split("|").map((test: string, index) => {
                  return (
                    <div key={`section - ${test}`}>
                      <S.EventTitle>
                        <strong>{index + 1} - </strong>
                        {test.split("/")[0]}
                      </S.EventTitle>
                      <S.EventData>
                        {test.split("/")[1].includes("-")
                          ? formatStringDateToPtBr(test.split("/")[1])
                          : test.split("/")[1]}
                      </S.EventData>
                    </div>
                  );
                })}

                <S.AddBankingButton>
                  Adicionar banca <AiOutlinePlus size={20} />
                </S.AddBankingButton>
              </S.HourAndDateContainer>

              <S.EventTitle>
                <strong>3 - </strong>
                Banca
              </S.EventTitle>

              <S.BankingTeachersContainer>
                {firstEvent?.childrens[1].title.split("|").map((test: string, index) => {
                  return (
                    <S.BankingTeachers key={`section - ${test}`}>
                      <div>
                        <S.EventTitle>
                          <strong>{formatIndexToLetter(index)} - </strong> {test.split("/")[0]}
                        </S.EventTitle>
                        <S.EventData className="banking-data">{test.split("/")[1]}</S.EventData>
                      </div>

                      <button>
                        <BsTrash size={20} />
                      </button>
                    </S.BankingTeachers>
                  );
                })}
              </S.BankingTeachersContainer>
            </>
          )}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              {/* <span onClick={handleOpenEditFirstQuestionModal}> */}
              <span>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>

        <S.ContentCard>
          <S.ContentCardHeader>
            <S.DotRounded>2</S.DotRounded>
            {secondEvent && <span>{secondEvent.question}</span>}
          </S.ContentCardHeader>

          {secondEvent?.childrens && (
            <>
              <S.HourAndDateContainer>
                {secondEvent?.childrens[0].title.split("|").map((test: string, index) => {
                  return (
                    <div key={`section - ${test}`}>
                      <S.EventTitle>
                        <strong>{index + 1} - </strong>
                        {test.split("/")[0]}
                      </S.EventTitle>
                      <S.EventData>
                        {test.split("/")[1].includes("-")
                          ? formatStringDateToPtBr(test.split("/")[1])
                          : test.split("/")[1]}
                      </S.EventData>
                    </div>
                  );
                })}

                <S.AddBankingButton>
                  Adicionar banca <AiOutlinePlus size={20} />
                </S.AddBankingButton>
              </S.HourAndDateContainer>

              <S.EventTitle>
                <strong>3 - </strong>
                Banca
              </S.EventTitle>

              <S.BankingTeachersContainer>
                {secondEvent?.childrens[1].title.split("|").map((test: string, index) => {
                  return (
                    <S.BankingTeachers key={`section - ${test}`}>
                      <div>
                        <S.EventTitle>
                          <strong>{formatIndexToLetter(index)} - </strong> {test.split("/")[0]}
                        </S.EventTitle>
                        <S.EventData className="banking-data">{test.split("/")[1]}</S.EventData>
                      </div>

                      <button>
                        <BsTrash size={20} />
                      </button>
                    </S.BankingTeachers>
                  );
                })}
              </S.BankingTeachersContainer>
            </>
          )}

          <S.ContainerButton>
            <Button outline={true} type={"button"}>
              {/* <span onClick={handleOpenEditSecondQuestionModal}> */}
              <span>
                Editar <BsPencil size={16} />
              </span>
            </Button>
          </S.ContainerButton>
        </S.ContentCard>
      </S.ContainerCards>
    </>
  );
};

export default Form;
