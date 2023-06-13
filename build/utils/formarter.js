export const formateStringToDate = (date) => {
    const formatedString = date.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, "$3-$2-$1");
    return new Date(formatedString);
};
export const formateDatePickerObject = (date) => {
    return date.toISOString().split("T")[0].split("-").reverse().join().replaceAll(",", "/");
};
export const formatDateToEn_UsFormat = (date = new Date()) => {
    return new Intl.DateTimeFormat("en-US").format(date).replaceAll("/", "-");
};
export const formatDateToPt_BrFormat = (date = new Date()) => {
    return new Intl.DateTimeFormat("pt-BR").format(date);
};
export function getLetterFromAlphabet(index) {
    if (index < 1 || index > 26) {
        throw new Error("Número fora do intervalo válido.");
    }
    const charCode = index + 64;
    return String.fromCharCode(charCode);
}
var WhatsappTags;
(function (WhatsappTags) {
    WhatsappTags["strong"] = "*";
    WhatsappTags["em"] = "_";
    WhatsappTags["del"] = "~";
    WhatsappTags["br"] = "\n";
})(WhatsappTags || (WhatsappTags = {}));
var HTMLTags;
(function (HTMLTags) {
    HTMLTags["*"] = "strong";
    HTMLTags["_"] = "em";
    HTMLTags["~"] = "del";
    HTMLTags["\n"] = "br";
})(HTMLTags || (HTMLTags = {}));
export function formatTextForWhatsApp(html) {
    const paragraphs = html.match(/<\s*p[^>]*>(.*?)<\s*\/\s*p\s*>/gis) || [];
    const whatsappText = paragraphs.map((paragraph) => paragraph
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\s*\/?\s*strong\s*?>/gi, "*")
        .replace(/<\s*\/?\s*em\s*?>/gi, "_")
        .replace(/<\s*\/?\s*del\s*?>/gi, "~")
        .replace(/<\s*\/?\s*p\s*?>/gi, "") + "\n");
    return whatsappText.join("");
}
export const convertWhatsappTextToHtml = (whatsappText) => {
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
//# sourceMappingURL=formarter.js.map