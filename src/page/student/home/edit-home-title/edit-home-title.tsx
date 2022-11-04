import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { IStudentHomeData } from "@/models/student";
import { StudentServices } from "@/services/student/home.service";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {
  data: string | undefined;
  setData: React.Dispatch<React.SetStateAction<IStudentHomeData | undefined>>;
};

const EditHomeTitle = ({ data, setData }: Props) => {
  const { setIsVisible } = useModal();

  const [text, setText] = useState("");

  useEffect(() => {
    if (data && data?.length > 0) {
      setText(data);
    }
  }, [data]);

  const renderTextEditor = useCallback(() => {
    if (text.length === 0) return <></>;

    return <TextEditor value={text} setValue={setText} />;
  }, [text]);

  const handleEditText = async () => {
    try {
      const response = await StudentServices.updateHomeTitle(text);

      setData(response.data);

      setIsVisible(false);
    } catch (error) {
      toast.error("Houve um erro ai salvar o texto");
    }
  };

  console.log("text 1:", text);

  return (
    <div>
      {renderTextEditor()}
      <EditTextButton event={handleEditText} />
    </div>
  );
};

export default EditHomeTitle;
