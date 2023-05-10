const INDEX_TO_LETTERS = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
  8: "I",
  9: "J",
  10: "K",
  11: "L",
  12: "M",
  13: "N",
  14: "O",
  15: "P",
  16: "Q",
  17: "R",
  18: "S",
  19: "T",
  20: "U",
  21: "V",
  22: "W",
  23: "X",
  24: "Y",
  25: "Z"
};

export const formateStringToDate = (date: string) => {
  const formatedString = date.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, "$3-$2-$1");

  return new Date(formatedString);
};

export const formateDatePickerObject = (date: Date) => {
  return date.toISOString().split("T")[0].split("-").reverse().join().replaceAll(",", "/");
};

export const formatDateToEn_UsFormat = (date = new Date()) => {
  return new Intl.DateTimeFormat("en-US").format(date).replaceAll("/", "-");
};

export const formatDateToPt_BrFormat = (date = new Date()) => {
  return new Intl.DateTimeFormat("pt-BR").format(date);
};

export const formatIndexToLetter = (index: number) =>
  INDEX_TO_LETTERS[index as keyof typeof INDEX_TO_LETTERS];

export const formatStringDateToPtBr = (date = new Date().toISOString()) => {
  return new Intl.DateTimeFormat("pt-br").format(formateStringToDate(date));
};

type HTMLTagsTypes = "strong" | "em" | "del" | "br";

enum WhatsappTags {
  strong = "*",
  em = "_",
  del = "~",
  br = "\n"
}

type WhatsappTagsTypes = "*" | "_" | "~" | "\n";

enum HTMLTags {
  "*" = "strong",
  "_" = "em",
  "~" = "del",
  "\n" = "br"
}

export function formatTextForWhatsApp(html: string) {
  const paragraphs = html.match(/<\s*p[^>]*>(.*?)<\s*\/\s*p\s*>/gis) || [];

  const whatsappText = paragraphs.map(
    (paragraph) =>
      paragraph
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\s*\/?\s*strong\s*?>/gi, "*")
        .replace(/<\s*\/?\s*em\s*?>/gi, "_")
        .replace(/<\s*\/?\s*del\s*?>/gi, "~")
        .replace(/<\s*\/?\s*p\s*?>/gi, "") + "\n"
  );

  return whatsappText.join("");
}

export const convertWhatsappTextToHtml = (whatsappText: string) => {
  const boldRegex = /\*([^*]+)\*/g;
  const italicRegex = /_([^_]+)_/g;
  const strikeRegex = /~([^~]+)~/g;

  const html = whatsappText
    .replace(/\n/g, "<br>")
    .replace(boldRegex, "<strong>$1</strong>")
    .replace(italicRegex, "<em>$1</em>")
    .replace(strikeRegex, "<del>$1</del>");

  return html;
};
