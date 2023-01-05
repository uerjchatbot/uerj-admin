import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { IMasterHomeData } from "@/models/master";
import { MasterServices } from "@/services/master/home.service";

type Props = {
  data: string | undefined;
  setData: React.Dispatch<React.SetStateAction<IMasterHomeData | undefined>>;
};

const EditHomeTitle = ({ data, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [text, setText] = useState("");

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      const response = await MasterServices.updateHomeTitle(text);

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

export default EditHomeTitle;
