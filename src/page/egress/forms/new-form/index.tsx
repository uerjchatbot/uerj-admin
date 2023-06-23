import { Box, Button, CircularProgress, Grid, MenuItem, TextField } from "@mui/material";
import React, { Fragment } from "react";

import * as Private from "@/routes/paths/paths.private";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button as ButtonComponent } from "@/components/button";
import { Question } from "@/models/Question";
import { OptionsFormAPI } from "@/models/form";
import { FormService } from "@/services/form/form.service";
import { getLetterFromAlphabet } from "@/utils/formarter";
import { useFieldArray, useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import * as S from "./styles";

interface UseLocationState {
  state: Question;
}

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

export type FormCreate = z.infer<typeof form>;
export type FormQuestions = z.infer<typeof question>;

const NewForm: React.FC = () => {
  const { state } = useLocation() as UseLocationState;

  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
    getValues
  } = useForm<FormCreate>({
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

  async function createForm(data: FormCreate) {
    try {
      await FormService.build({
        title: data.title,
        questions: data.questions.map(({ mode, options, title }) => ({
          type: mode,
          title,
          options: options as OptionsFormAPI[]
        }))
      });

      toast.success("Formulário criado com sucesso");
      handleBackNavigation();
    } catch (error) {
      toast.error("Houve um erro ao criar o formulário");

      console.log(error);
    }
  }

  const addOption = (index: number) => {
    getValues;
    const questionField = getValues(`questions.${index}`);

    if (questionField) {
      const newOption = { value: "" };
      update(index, {
        ...questionField,
        options: [...questionField.options, newOption]
      });
    }
  };

  const removeOption = (index: number, opindex: number) => {
    const questionField = getValues(`questions.${index}`);

    if (questionField) {
      update(index, {
        ...questionField,
        options: questionField.options.filter((o, i) => i !== opindex)
      });
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.ButtonGroup>
          <ButtonComponent type="button" outline onClick={handleBackNavigation}>
            <span>Voltar</span>
          </ButtonComponent>
        </S.ButtonGroup>
      </S.Header>

      {isSubmitting && (
        <Box
          sx={{
            display: "flex",
            flex: 1,
            height: "30vh",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <CircularProgress />
        </Box>
      )}

      {!isSubmitting && (
        <form onSubmit={handleSubmit(createForm)}>
          <S.BoxForm>
            <Grid container spacing={2} style={{ width: "100%" }} rowGap={5}>
              <Grid container spacing={2} style={{ width: "100%" }}>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Titulo do formulário"
                    label={errors.title?.message ?? "Titulo do formulário"}
                    style={{ width: "100%" }}
                    size="small"
                    error={Boolean(errors.title?.message)}
                    {...register("title")}
                  />
                </Grid>

                {questions.map((question, index) => (
                  <Fragment key={question.id}>
                    <Grid item xs={1} alignItems="center" justifyContent="flex-end" display="flex">
                      <span style={{ fontSize: "1.3rem", fontWeight: "bolder" }}>{index + 1}</span>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        placeholder="Questão"
                        label={errors?.questions?.[index]?.title?.message ?? "Questão"}
                        style={{ width: "100%" }}
                        size="small"
                        // defaultValue={field.text}
                        error={Boolean(errors?.questions?.[index]?.title?.message)}
                        {...register(`questions.${index}.title` as const)}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        select
                        style={{ width: "100%" }}
                        defaultValue={question.mode ?? "Selecione tipo"}
                        error={Boolean(errors?.questions?.[index]?.mode?.message)}
                        {...register(`questions.${index}.mode` as const)}
                        size="small">
                        <MenuItem value="Selecione tipo" selected disabled>
                          <span style={{ opacity: "0.5" }}>Selecione tipo</span>
                        </MenuItem>
                        <MenuItem value="RADIO">Uma escolha</MenuItem>
                        <MenuItem value="CHECKBOX">Mais de uma escolha</MenuItem>
                      </TextField>
                    </Grid>

                    {question.options?.map((option, opindex) => (
                      <Fragment key={`${question.id}_option_${opindex}`}>
                        <Grid
                          item
                          xs={2}
                          alignItems="center"
                          justifyContent="flex-end"
                          display="flex">
                          <span style={{ fontSize: "1.3rem", fontWeight: "bolder" }}>
                            {getLetterFromAlphabet(opindex + 1).toLocaleLowerCase()}
                          </span>
                        </Grid>

                        <Grid item xs={7}>
                          <TextField
                            placeholder="Opção"
                            label={
                              errors?.questions?.[index]?.options?.[opindex]?.value?.message ??
                              "Opção"
                            }
                            style={{ width: "100%" }}
                            size="small"
                            defaultValue={option.value ?? ""}
                            error={Boolean(
                              errors?.questions?.[index]?.options?.[opindex]?.value?.message
                            )}
                            {...register(`questions.${index}.options.${opindex}.value` as const)}
                          />
                        </Grid>

                        {opindex === 0 && (
                          <Grid item xs={3} alignItems="center" display="flex">
                            <Button
                              onClick={() => addOption(index)}
                              variant="contained"
                              color="success"
                              size="large"
                              style={{ height: "100%" }}>
                              <IoMdAdd size={20} style={{ color: "#ffffff" }} />
                            </Button>
                          </Grid>
                        )}

                        {!(opindex === 0) && (
                          <Grid item xs={3} alignItems="center" display="flex">
                            <Button
                              variant="outlined"
                              color="error"
                              style={{ height: "100%" }}
                              onClick={() => removeOption(index, opindex)}>
                              <AiFillDelete size={20} style={{ color: "#e4310d" }} />
                            </Button>
                          </Grid>
                        )}
                      </Fragment>
                    ))}
                  </Fragment>
                ))}
              </Grid>

              <Grid item justifyContent="center" display="flex" style={{ flex: 1 }} gap={2}>
                <Button
                  variant="contained"
                  color="info"
                  onClick={() =>
                    append({
                      title: "",
                      options: [
                        {
                          value: ""
                        }
                      ],
                      mode: "RADIO"
                    })
                  }>
                  <IoMdAdd size={20} style={{ color: "#ffffff" }} /> Adicionar questão
                </Button>

                <Button variant="contained" color="success" type="submit">
                  Salvar
                </Button>
              </Grid>
            </Grid>
          </S.BoxForm>
        </form>
      )}
    </S.Container>
  );
};

export default NewForm;
