import { EditTextButton } from "@/components/edit-text-button";
import { TextEditor } from "@/components/text-editor";
import { useModal } from "@/hooks/useModal";
import { StudentServices } from "@/services/student/home.service";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  data: string | undefined;
};

const EditHomeTitle = ({ data }: Props) => {
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

      console.log("response:", response);

      setIsVisible(false);
    } catch (error) {
      console.log("error:", error);
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
