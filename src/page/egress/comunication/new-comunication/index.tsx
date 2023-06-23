import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import React from "react";

import * as Private from "@/routes/paths/paths.private";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button as ButtonComponent } from "@/components/button";
import { Comunication } from "@/models/comunication";
import { ComunicationService } from "@/services/comunication.service";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import * as S from "./styles";

interface UseLocationState {
  state: Comunication;
}

const form = z.object({
  title: z.string().nonempty({ message: "Informe título da comunicação" }),
  text: z.string().nonempty({ message: "Informe conteúdo da comunicação" })
});

export type FormCreate = z.infer<typeof form>;

const NewComunication: React.FC = () => {
  const { state } = useLocation() as UseLocationState;

  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<FormCreate>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(form)
  });

  const handleBackNavigation = () => navigate(Private.EGRESS_COMUNICATIONS(), { state });

  async function createForm(data: FormCreate) {
    try {
      await ComunicationService.create(data);

      toast.success("Comunicação criada com sucesso");
      handleBackNavigation();
    } catch (error) {
      toast.error("Houve um erro ao criar a comunicação");

      console.log(error);
    }
  }

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
            <Grid container spacing={2} style={{ width: "100%" }}>
              <Grid item xs={12}>
                <TextField
                  placeholder="Titulo da comunicação"
                  label={errors.title?.message ?? "Titulo da comunicação"}
                  style={{ width: "100%" }}
                  size="small"
                  error={Boolean(errors.title?.message)}
                  {...register("title")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  rows={4}
                  placeholder="Conteúdo da comunicação"
                  label={errors.title?.message ?? "Conteúdo da comunicação"}
                  style={{ width: "100%" }}
                  size="small"
                  error={Boolean(errors.text?.message)}
                  {...register("text")}
                />
              </Grid>

              <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
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

export default NewComunication;
