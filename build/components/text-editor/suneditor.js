import { jsx as _jsx } from "react/jsx-runtime";
import { convertWhatsappTextToHtml } from "@/utils/formarter";
import { useRef } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { pt_br } from "suneditor/src/lang";
import plugins from "suneditor/src/plugins";
const options = {
    plugins: plugins,
    lang: pt_br,
    buttonList: [["bold", "italic"]],
    minHeight: "100%"
};
const TextEditor = ({ value, setValue, placeholder = "Digite aqui", fontSize = 24 }) => {
    const editorRef = useRef();
    const getSunEditorInstance = (sunEditor) => (editorRef.current = sunEditor);
    const setDefaultStyle = `font-size: ${fontSize}px; font-family: Lato`;
    return (_jsx(SunEditor, { defaultValue: convertWhatsappTextToHtml(value), placeholder: placeholder, setOptions: options, setDefaultStyle: setDefaultStyle, getSunEditorInstance: getSunEditorInstance, onChange: () => {
            if (editorRef.current && editorRef.current.getText().length > 0) {
                const text = editorRef?.current?.getContents(true);
                setValue(text);
            }
        } }));
};
export default TextEditor;
//# sourceMappingURL=suneditor.js.map