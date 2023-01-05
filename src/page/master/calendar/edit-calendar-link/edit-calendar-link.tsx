import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";
import { useModal } from "@/hooks/useModal";
import { ICalendarTitleData } from "@/models/student";
import { CalendarServices } from "@/services/master/calendar.service";
import { EditTextButton } from "@/components/edit-text-button";

type Props = {
  data: string | undefined;
  setData: React.Dispatch<React.SetStateAction<ICalendarTitleData>>;
  questionId: number;
};

const EditCalendarLink = ({ data, setData, questionId }: Props) => {
  const { setIsVisible } = useModal();

  const [link, setLink] = useState(data?.split("/")[1] || "");

  const renderLinkEditor = useCallback(() => {
    if (link.length === 0) return <></>;

    return (
      <S.Input
        placeholder="Link do calendário"
        defaultValue={link}
        onChange={(e) => setLink(e.target.value)}
      />
    );
  }, [link]);

  const handleEditText = async () => {
    try {
      console.log({ link });

      const response = await CalendarServices.updateLink(questionId, link);

      setData(response.data);

      setIsVisible(false);

      toast.success("Link alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  useEffect(() => {
    if (data && data?.length > 0) {
      setLink(data?.split("/")[1]);
    }
  }, [data]);

  return (
    <div>
      {renderLinkEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditCalendarLink;
