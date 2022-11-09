import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { IHomeData } from "@/models/home";
import { HomeServices } from "@/services/home/home.service";

type Props = {
  title: string | undefined;
  setData: React.Dispatch<React.SetStateAction<IHomeData>>;
};

const EditTitle = ({ title, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [text, setText] = useState<any>("");

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      const response = await HomeServices.updateHomeData(text);

      setData((oldValue) => {
        return { ...oldValue, ...response.data };
      });

      setIsVisible(false);

      toast.success("Texto alterado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ao salvar o texto");
    }
  };

  useEffect(() => {
    if (title && title?.length > 0) {
      setText(title);
    }
  }, [title]);

  return (
    <div>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditTitle;
