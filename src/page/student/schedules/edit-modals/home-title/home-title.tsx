import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { ISchedulesHomeData } from "@/models/students/schedules";
import { EditTextButton } from "@/components/edit-text-button";
import { useModal } from "@/hooks/useModal";
import { TextEditor } from "@/components/text-editor";
import { SchedulesServices } from "@/services/student/schedules.service";
import { useLoading } from "@/hooks/useLoading";

type Props = {
  id: number;
  data: string;
  setData: React.Dispatch<React.SetStateAction<ISchedulesHomeData>>;
};

const HomeTitle = ({ id, data, setData }: Props) => {
  const { setLoading } = useLoading();
  const { setIsVisible } = useModal();

  const [text, setText] = useState("");

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      setLoading(true);

      await SchedulesServices.updateTitle(id, text);

      const response = await SchedulesServices.getHomeData(id);

      setData(response.data);

      setIsVisible(false);

      toast.success("Texto alterado com sucesso!");

      setLoading(false);
    } catch (error) {
      toast.error("Houve um erro ao salvar o texto");
      setLoading(false);
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

export default HomeTitle;
