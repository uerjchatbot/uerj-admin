import React, { useMemo, useState, useCallback } from "react";
import isHotkey from "is-hotkey";
import Picker from "emoji-picker-react";

import {
  Editable,
  withReact,
  useSlate,
  Slate,
  RenderElementProps,
  RenderLeafProps,
  ReactEditor
} from "slate-react";
import { Editor as EditorSlate, createEditor, BaseEditor } from "slate";

import { IconTooltip, Tooltip, ContainerEditor, PickerContainer } from "./styles";
import { BoldIcon, EmojiIcon, ItalicIcon, UnderlineIcon } from "@/assets/icons/editor-icons";
import Theme from "@/styles/theme";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline"
};

type TypeProps = "bold" | "italic" | "underline" | "emoji";

const toggleMark = (editor: BaseEditor & ReactEditor, format: string) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    EditorSlate.removeMark(editor, format);
  } else {
    EditorSlate.addMark(editor, format, true);
  }
};

const isMarkActive = (editor: BaseEditor & ReactEditor, format: string) => {
  const marks: any = EditorSlate.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }: any) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const renderIcon = (type: TypeProps) => {
  const icons = {
    bold: BoldIcon,
    italic: ItalicIcon,
    underline: UnderlineIcon,
    emoji: EmojiIcon
  };

  return icons[type];
};

const MarkButton = ({ format, onClick }: { format: TypeProps; onClick?: () => void }) => {
  const isEmoji = format === "emoji";
  const editor = useSlate();
  const Icon = renderIcon(format);
  const active = isMarkActive(editor, format);
  const size = isEmoji ? "100%" : "14";

  return (
    <IconTooltip
      active={active}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
        if (isEmoji && onClick) {
          onClick();
        }
      }}>
      <Icon size={size} color={active ? Theme.colors.white : Theme.colors.black.blackMedium} />
    </IconTooltip>
  );
};

const Editor: React.FC = () => {
  const [canShowEmojiPicker, setCanShowEmojiPicker] = useState<boolean>(false);
  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "Olá, como vai?" }]
    },
    {
      type: "paragraph",
      children: [
        { text: "Você acessou o portal online do " },
        {
          text: " Programa de Pós Graduação em Educação - Processos Formativos e Desigualdades Sociais da Faculdade de Formação de Professores da UERJ.",
          bold: true
        }
      ]
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Aqui você encontra informações sobre os programas de mestrado e doutorado, bolsas, editais e tutoriais."
        }
      ]
    },
    {
      type: "paragraph",
      children: [{ text: "Selecione a opção referente ao seu título de ingresso no PPGEdu:" }]
    }
  ]);

  const setEmoji = (emj: string) => {
    editor.insertText(` ${emj}`);
  };

  const onClickEmoji = () => {
    setCanShowEmojiPicker(!canShowEmojiPicker);
  };

  const onLeavePicker = () => {
    setCanShowEmojiPicker(false);
    editor.removeMark("emoji");
  };

  const onHandleHotKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event as any)) {
        event.preventDefault();
        const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
        toggleMark(editor, mark);
      }
    }
  };

  useMemo(() => {
    editor.selection?.focus;
  }, [canShowEmojiPicker]);

  return (
    <ContainerEditor>
      {canShowEmojiPicker && (
        <PickerContainer onMouseLeave={() => onLeavePicker()}>
          <Picker onEmojiClick={(ev, emojiObject) => setEmoji(emojiObject.emoji)} />
        </PickerContainer>
      )}
      <Slate editor={editor} value={value as any} onChange={(value) => setValue(value as any)}>
        <Tooltip>
          <MarkButton format="bold" />
          <MarkButton format="italic" />
          <MarkButton format="underline" />
          <MarkButton format="emoji" onClick={() => onClickEmoji()} />
        </Tooltip>
        <Editable
          className="editor"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Digite algo..."
          spellCheck
          autoFocus
          lang="pt"
          onKeyDown={onHandleHotKey}
        />
      </Slate>
    </ContainerEditor>
  );
};

export default Editor;
