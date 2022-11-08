export const convertToHtml = (text: string) => {
  return text.replaceAll("\n", "<br />").replaceAll("\b", "");
};
