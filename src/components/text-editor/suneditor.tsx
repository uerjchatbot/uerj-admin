import React, { useRef } from "react";

import SunEditor from "suneditor-react";
import SetOptions from "suneditor-react/dist/types/SetOptions";
import SunEditorCore from "suneditor/src/lib/core";
import { pt_br } from "suneditor/src/lang";
import plugins from "suneditor/src/plugins";
import "suneditor/dist/css/suneditor.min.css";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const options = {
  plugins: plugins,
  lang: pt_br,
  buttonList: [["bold", "italic", "underline", "undo", "redo", "fullScreen"]],
  minHeight: "100%"
};

const TextEditor = ({ value, setValue }: Props) => {
  const editorRef = useRef<SunEditorCore>();

  const getSunEditorInstance = (sunEditor: SunEditorCore) => (editorRef.current = sunEditor);

  return (
    <SunEditor
      defaultValue={value}
      placeholder="Digite aqui"
      setOptions={options as SetOptions}
      getSunEditorInstance={getSunEditorInstance}
      onChange={() => {
        if (editorRef.current && editorRef.current.getText().length > 0) {
          const text = editorRef?.current?.getText();
          setValue(text);
        }
      }}
    />
  );
};

export default TextEditor;
