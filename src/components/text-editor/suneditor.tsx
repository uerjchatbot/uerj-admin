import { convertWhatsappTextToHtml } from "@/utils/formarter";
import React, { useRef } from "react";

import SunEditor from "suneditor-react";
import SetOptions from "suneditor-react/dist/types/SetOptions";
import "suneditor/dist/css/suneditor.min.css";
import { pt_br } from "suneditor/src/lang";
import SunEditorCore from "suneditor/src/lib/core";
import plugins from "suneditor/src/plugins";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  fontSize?: number;
};

const options = {
  plugins: plugins,
  lang: pt_br,
  buttonList: [["bold", "italic"]],
  minHeight: "100%"
};

const TextEditor = ({ value, setValue, placeholder = "Digite aqui", fontSize = 24 }: Props) => {
  const editorRef = useRef<SunEditorCore>();

  const getSunEditorInstance = (sunEditor: SunEditorCore) => (editorRef.current = sunEditor);

  const setDefaultStyle = `font-size: ${fontSize}px; font-family: Lato`;

  return (
    <SunEditor
      defaultValue={convertWhatsappTextToHtml(value)}
      placeholder={placeholder}
      setOptions={options as SetOptions}
      setDefaultStyle={setDefaultStyle}
      getSunEditorInstance={getSunEditorInstance}
      onChange={() => {
        if (editorRef.current && editorRef.current.getText().length > 0) {
          const text = editorRef?.current?.getContents(true);
          setValue(text);
        }
      }}
    />
  );
};

export default TextEditor;
