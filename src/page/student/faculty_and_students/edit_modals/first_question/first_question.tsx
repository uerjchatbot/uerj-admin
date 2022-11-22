import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import SetOptions from "suneditor-react/dist/types/SetOptions";
import SunEditorCore from "suneditor/src/lib/core";
import { pt_br } from "suneditor/src/lang";
import plugins from "suneditor/src/plugins";

type Props = {
  value: string;
};

const options = {
  plugins: plugins,
  lang: pt_br,
  buttonList: [["undo", "redo", "bold", "italic", "underline", "fullScreen"]],
  minHeight: "100%"
};

const FirstQuestion = ({ value }: Props) => {
  const editorRef = useRef<SunEditorCore>();

  const getSunEditorInstance = (sunEditor: SunEditorCore) => (editorRef.current = sunEditor);

  return (
    <SunEditor
      defaultValue={value}
      placeholder="Texto"
      setOptions={options as SetOptions}
      getSunEditorInstance={getSunEditorInstance}
    />
  );
};

export default FirstQuestion;
