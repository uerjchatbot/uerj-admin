import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";
import { useModal } from "@/hooks/useModal";
import { ICalendarTitleData } from "@/models/doctor";
import { CalendarServices } from "@/services/doctor/calentar.service";
import { EditTextButton } from "@/components/edit-text-button";
import { IMasterUpdateData } from "@/models/master";

type Props = {
  data: string | undefined;
  setData: React.Dispatch<React.SetStateAction<ICalendarTitleData>>;
  questionId: number;
};

const EditCalendarLink = ({ data, setData, questionId }: Props) => {
  const { setIsVisible } = useModal();

  const [updatedData, setUpdatedData] = useState<IMasterUpdateData>({
    title: data?.split("|")[0] || "",
    link: data?.split("|")[1] || ""
  });

  const renderLinkEditor = useCallback(() => {
    if (String(updatedData.link).length === 0) return <></>;

    return (
      <S.Input
        placeholder="Link do calendário"
        defaultValue={updatedData.link || ""}
        onChange={(e) => setUpdatedData({ ...updatedData, link: e.target.value })}
      />
    );
  }, [updatedData]);

  const handleEditText = async () => {
    try {
      const data: IMasterUpdateData[] = [updatedData];
      const response = await CalendarServices.updateLink(questionId, data);

      setData(response.data);

      setIsVisible(false);

      toast.success("Link alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  return (
    <div>
      {renderLinkEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditCalendarLink;
