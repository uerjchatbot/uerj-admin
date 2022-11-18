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
