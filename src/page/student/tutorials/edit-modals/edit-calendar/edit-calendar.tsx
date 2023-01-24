import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker } from "rsuite";

import * as S from "./styles";
import { useModal } from "@/hooks/useModal";
import { IEditCalendarModalData } from "@/models/students/tutorials";
import { useLoading } from "@/hooks/useLoading";
import { EditTextButton } from "@/components/edit-text-button";
import { TutorialServices } from "@/services/student/tutorial.service";
import { formatDateToPt_BrFormat, formateStringToDate } from "@/utils/formarter";

type Props = {
  data: IEditCalendarModalData;
};

const EditTitle = ({ data }: Props) => {
  const { setLoading } = useLoading();

  const [processPeriodDate, setProcessPeriodDate] = useState("");
  const [documentSubmissionDeadlineDate, setDocumentSubmissionDeadlineDate] = useState("");
  const [documentationEvaluationDate, setDocumentEvaluationDate] = useState("");
  const [analysisResultDate, setAnalysisResultDate] = useState("");
  const [resubmissionDocumentsDate, setResubmissionDocumentsDate] = useState("");
  const [projectPresentationDate, setProjectPresentationDate] = useState("");

  const { setIsVisible } = useModal();

  const renderTextEditor = useCallback(() => {
    if (
      !processPeriodDate ||
      !documentSubmissionDeadlineDate ||
      !documentationEvaluationDate ||
      !analysisResultDate ||
      !resubmissionDocumentsDate ||
      !projectPresentationDate
    )
      return <></>;

    return (
      <S.DatesContainer>
        <S.DateContainer>
          <p>{data.datesArr.childrens[0].title.split("|")[0]}: </p>
          <DatePicker
            oneTap
            format="dd/MM/yyyy"
            defaultValue={formateStringToDate(processPeriodDate)}
            style={{ width: 150 }}
            onChange={(e) => {
              handleEditDate(
                data.datesArr.childrens[0].id,
                formatDateToPt_BrFormat(e || new Date())
              );
              setProcessPeriodDate(formatDateToPt_BrFormat(e || new Date()));
            }}
          />
        </S.DateContainer>

        <S.DateContainer>
          <p>{data.datesArr.childrens[1].title.split("|")[0]}: </p>
          <DatePicker
            oneTap
            format="dd/MM/yyyy"
            defaultValue={formateStringToDate(documentSubmissionDeadlineDate)}
            style={{ width: 150 }}
            onChange={(e) => {
              handleEditDate(
                data.datesArr.childrens[1].id,
                formatDateToPt_BrFormat(e || new Date())
              );
              setDocumentSubmissionDeadlineDate(formatDateToPt_BrFormat(e || new Date()));
            }}
          />
        </S.DateContainer>

        <S.DateContainer>
          <p>{data.datesArr.childrens[2].title.split("|")[0]}: </p>
          <DatePicker
            oneTap
            format="dd/MM/yyyy"
            defaultValue={formateStringToDate(documentationEvaluationDate)}
            style={{ width: 150 }}
            onChange={(e) => {
              handleEditDate(
                data.datesArr.childrens[2].id,
                formatDateToPt_BrFormat(e || new Date())
              );
              setDocumentEvaluationDate(formatDateToPt_BrFormat(e || new Date()));
            }}
          />
        </S.DateContainer>

        <S.DateContainer>
          <p>{data.datesArr.childrens[3].title.split("|")[0]}: </p>
          <DatePicker
            oneTap
            format="dd/MM/yyyy"
            defaultValue={formateStringToDate(analysisResultDate)}
            style={{ width: 150 }}
            onChange={(e) => {
              handleEditDate(
                data.datesArr.childrens[3].id,
                formatDateToPt_BrFormat(e || new Date())
              );
              setAnalysisResultDate(formatDateToPt_BrFormat(e || new Date()));
            }}
          />
        </S.DateContainer>

        <S.DateContainer>
          <p>{data.datesArr.childrens[4].title.split("|")[0]}: </p>
          <DatePicker
            oneTap
            format="dd/MM/yyyy"
            defaultValue={formateStringToDate(resubmissionDocumentsDate)}
            style={{ width: 150 }}
            onChange={(e) => {
              handleEditDate(
                data.datesArr.childrens[4].id,
                formatDateToPt_BrFormat(e || new Date())
              );
              setResubmissionDocumentsDate(formatDateToPt_BrFormat(e || new Date()));
            }}
          />
        </S.DateContainer>

        <S.DateContainer>
          <p>{data.datesArr.childrens[5].title.split("|")[0]}: </p>
          <DatePicker
            oneTap
            format="dd/MM/yyyy"
            defaultValue={formateStringToDate(projectPresentationDate)}
            style={{ width: 150 }}
            onChange={(e) => {
              handleEditDate(
                data.datesArr.childrens[5].id,
                formatDateToPt_BrFormat(e || new Date())
              );
              setProjectPresentationDate(formatDateToPt_BrFormat(e || new Date()));
            }}
          />
        </S.DateContainer>
      </S.DatesContainer>
    );
  }, [
    processPeriodDate,
    documentSubmissionDeadlineDate,
    documentationEvaluationDate,
    analysisResultDate,
    resubmissionDocumentsDate,
    projectPresentationDate
  ]);

  const handleEditData = async () => {
    try {
      setLoading(true);

      const response = await TutorialServices.getHomeData(data.datesArr.id);

      data.setData(response.data);

      setIsVisible(false);

      toast.success("Datas atualizadas com sucesso");

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao atualizar o tutorial");
      setLoading(false);
    }
  };

  const handleEditDate = async (dateId: number, newDate: string) => {
    try {
      await TutorialServices.updateCalendarData(dateId, newDate);

      const response = await TutorialServices.getHomeData(data.datesArr.id);

      data.setData(response.data);
    } catch (error) {
      toast.error("Houve um erro ao atualizar a data");
    }
  };

  useEffect(() => {
    if (data.datesArr.childrens.length > 0) {
      setProcessPeriodDate(() => {
        const childrenDate = data.datesArr.childrens[0].title.split("|")[1];
        return childrenDate === "00/00/00" ? formatDateToPt_BrFormat(new Date()) : childrenDate;
      });

      setDocumentSubmissionDeadlineDate(() => {
        const childrenDate = data.datesArr.childrens[1].title.split("|")[1];
        return childrenDate === "00/00/00" ? formatDateToPt_BrFormat(new Date()) : childrenDate;
      });

      setDocumentEvaluationDate(() => {
        const childrenDate = data.datesArr.childrens[2].title.split("|")[1];
        return childrenDate === "00/00/00" ? formatDateToPt_BrFormat(new Date()) : childrenDate;
      });

      setAnalysisResultDate(() => {
        const childrenDate = data.datesArr.childrens[3].title.split("|")[1];
        return childrenDate === "00/00/00" ? formatDateToPt_BrFormat(new Date()) : childrenDate;
      });

      setResubmissionDocumentsDate(() => {
        const childrenDate = data.datesArr.childrens[4].title.split("|")[1];
        return childrenDate === "00/00/00" ? formatDateToPt_BrFormat(new Date()) : childrenDate;
      });

      setProjectPresentationDate(() => {
        const childrenDate = data.datesArr.childrens[5].title.split("|")[1];
        return childrenDate === "00/00/00" ? formatDateToPt_BrFormat(new Date()) : childrenDate;
      });
    }
  }, [data]);

  return (
    <S.Container>
      {renderTextEditor()}

      <EditTextButton event={handleEditData} />
    </S.Container>
  );
};

export default EditTitle;