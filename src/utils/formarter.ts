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

export const convertToHtml = (text: string) => {
  return text.replaceAll("\n", "<br />").replaceAll("\b", "");
};

export const formateStringToDate = (date: string) => {
  const formatedString = date.split("/").reverse().join().replaceAll(",", "/");

  return new Date(formatedString);
};

export const formateDatePickerObject = (date: Date) => {
  return date.toISOString().split("T")[0].split("-").reverse().join().replaceAll(",", "/");
};

export const formatIndexToLetter = (index: number) =>
  INDEX_TO_LETTERS[index as keyof typeof INDEX_TO_LETTERS];

export const formatStringDateToPtBr = (date: string) => {
  return new Intl.DateTimeFormat("pt-br").format(formateStringToDate(date));
};
