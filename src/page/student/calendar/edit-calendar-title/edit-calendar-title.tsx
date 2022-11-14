import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useModal } from "@/hooks/useModal";
import { ICalendarTitleData } from "@/models/student";
import { TextEditor } from "@/components/text-editor";
import { CalendarServices } from "@/services/student/calendar.service";
import { EditTextButton } from "@/components/edit-text-button";

type Props = {
  data: string | undefined;
  setData: React.Dispatch<React.SetStateAction<ICalendarTitleData>>;
  questionId: number;
};

const EditCalendarTitle = ({ data, setData, questionId }: Props) => {
  const { setIsVisible } = useModal();

  const [text, setText] = useState("");

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      const response = await CalendarServices.updateTitle(questionId, text);

      setData(response.data);

      setIsVisible(false);

      toast.success("Texto alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  useEffect(() => {
    if (data && data?.length > 0) {
      setText(data);
    }
  }, [data]);

  return (
    <div>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditCalendarTitle;
