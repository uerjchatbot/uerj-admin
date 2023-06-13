import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, CircularProgress, Grid, MenuItem, TextField } from "@mui/material";
import { Fragment } from "react";
import * as Private from "@/routes/paths/paths.private";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button as ButtonComponent } from "@/components/button";
import { FormService } from "@/services/form/form.service";
import { getLetterFromAlphabet } from "@/utils/formarter";
import { useFieldArray, useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import * as S from "./styles";
const option = z.object({
    value: z.string().nonempty({ message: "Informe opção" })
});
const question = z.object({
    title: z.string().nonempty({ message: "Informe questão" }),
    options: z.array(option),
    mode: z.enum(["CHECKBOX", "RADIO"])
});
const form = z.object({
    title: z.string().nonempty({ message: "Informe título do formulário" }),
    questions: z.array(question)
});
const NewForm = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { register, formState: { errors, isSubmitting }, control, handleSubmit } = useForm({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(form),
        defaultValues: {
            questions: [
                {
                    title: "",
                    options: [
                        {
                            value: ""
                        }
                    ],
                    mode: "RADIO"
                }
            ]
        }
    });
    const { fields: questions, append, update } = useFieldArray({ name: "questions", control });
    const handleBackNavigation = () => navigate(Private.EGRESS_FORMS(), { state });
    async function createForm(data) {
        try {
            const [access_token] = document.cookie.split(";").map((c) => c.split("=")[1]);
            const { data: form_create } = await FormService.create({
                title: data.title,
                token: access_token,
                questionId: state.id
            });
            await FormService.createQuestion({
                token: access_token,
                formId: form_create.id,
                questions: data.questions.map(({ mode, options, title }) => ({
                    type: mode,
                    title,
                    options: options
                }))
            });
            toast.success("Formulário criado com sucesso");
            handleBackNavigation();
        }
        catch (error) {
            console.log(error);
        }
    }
    return (_jsxs(S.Container, { children: [_jsx(S.Header, { children: _jsx(S.ButtonGroup, { children: _jsx(ButtonComponent, { type: "button", outline: true, onClick: handleBackNavigation, children: _jsx("span", { children: "Voltar" }) }) }) }), isSubmitting && (_jsx(Box, { sx: {
                    display: "flex",
                    flex: 1,
                    height: "30vh",
                    alignItems: "center",
                    justifyContent: "center"
                }, children: _jsx(CircularProgress, {}) })), !isSubmitting && (_jsx("form", { onSubmit: handleSubmit(createForm), children: _jsx(S.BoxForm, { children: _jsxs(Grid, { container: true, spacing: 2, style: { width: "100%" }, rowGap: 5, children: [_jsxs(Grid, { container: true, spacing: 2, style: { width: "100%" }, children: [_jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { placeholder: "Titulo do formul\u00E1rio", label: errors.title?.message ?? "Titulo do formulário", style: { width: "100%" }, size: "small", error: Boolean(errors.title?.message), ...register("title") }) }), questions.map((question, index) => (_jsxs(Fragment, { children: [_jsx(Grid, { item: true, xs: 1, alignItems: "center", justifyContent: "flex-end", display: "flex", children: _jsx("span", { style: { fontSize: "1.3rem", fontWeight: "bolder" }, children: index + 1 }) }), _jsx(Grid, { item: true, xs: 8, children: _jsx(TextField, { placeholder: "Quest\u00E3o", label: errors?.questions?.[index]?.title?.message ?? "Questão", style: { width: "100%" }, size: "small", 
                                                    // defaultValue={field.text}
                                                    error: Boolean(errors?.questions?.[index]?.title?.message), ...register(`questions.${index}.title`) }) }), _jsx(Grid, { item: true, xs: 3, children: _jsxs(TextField, { select: true, style: { width: "100%" }, defaultValue: question.mode ?? "Selecione tipo", error: Boolean(errors?.questions?.[index]?.mode?.message), ...register(`questions.${index}.mode`), size: "small", children: [_jsx(MenuItem, { value: "Selecione tipo", selected: true, disabled: true, children: _jsx("span", { style: { opacity: "0.5" }, children: "Selecione tipo" }) }), _jsx(MenuItem, { value: "RADIO", children: "Uma escolha" }), _jsx(MenuItem, { value: "CHECKBOX", children: "Mais de uma escolha" })] }) }), question.options?.map((option, opindex) => (_jsxs(Fragment, { children: [_jsx(Grid, { item: true, xs: 2, alignItems: "center", justifyContent: "flex-end", display: "flex", children: _jsx("span", { style: { fontSize: "1.3rem", fontWeight: "bolder" }, children: getLetterFromAlphabet(opindex + 1).toLocaleLowerCase() }) }), _jsx(Grid, { item: true, xs: 7, children: _jsx(TextField, { placeholder: "Op\u00E7\u00E3o", label: errors?.questions?.[index]?.options?.[opindex]?.value?.message ??
                                                                "Opção", style: { width: "100%" }, size: "small", defaultValue: option.value ?? "", error: Boolean(errors?.questions?.[index]?.options?.[opindex]?.value?.message), ...register(`questions.${index}.options.${opindex}.value`) }) }), opindex === 0 && (_jsx(Grid, { item: true, xs: 3, alignItems: "center", display: "flex", children: _jsx(Button, { onClick: () => {
                                                                const questionField = questions[index];
                                                                if (questionField) {
                                                                    const newOption = { value: "" };
                                                                    update(index, {
                                                                        ...questionField,
                                                                        options: [...questionField.options, newOption]
                                                                    });
                                                                }
                                                            }, variant: "contained", color: "success", size: "large", style: { height: "100%" }, children: _jsx(IoMdAdd, { size: 20, style: { color: "#ffffff" } }) }) })), !(opindex === 0) && (_jsx(Grid, { item: true, xs: 3, alignItems: "center", display: "flex", children: _jsx(Button, { variant: "outlined", color: "error", style: { height: "100%" }, onClick: () => {
                                                                const questionField = questions[index];
                                                                if (questionField) {
                                                                    update(index, {
                                                                        ...questionField,
                                                                        options: questionField.options.filter((o, i) => i !== opindex)
                                                                    });
                                                                }
                                                            }, children: _jsx(AiFillDelete, { size: 20, style: { color: "#e4310d" } }) }) }))] }, `${question.id}_option_${opindex}`)))] }, question.id)))] }), _jsxs(Grid, { item: true, justifyContent: "center", display: "flex", style: { flex: 1 }, gap: 2, children: [_jsxs(Button, { variant: "contained", color: "info", onClick: () => append({
                                            title: "",
                                            options: [
                                                {
                                                    value: ""
                                                }
                                            ],
                                            mode: "RADIO"
                                        }), children: [_jsx(IoMdAdd, { size: 20, style: { color: "#ffffff" } }), " Adicionar quest\u00E3o"] }), _jsx(Button, { variant: "contained", color: "success", type: "submit", children: "Salvar" })] })] }) }) }))] }));
};
export default NewForm;
//# sourceMappingURL=index.js.map