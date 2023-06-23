/* eslint-disable no-unused-vars */
import { Button as ButtonComponent } from "@/components/button";
import { useLoading } from "@/hooks/useLoading";
import { Degree, DegreeTranspile, degrees } from "@/models/Degree";
import { Question } from "@/models/Question";
import { List } from "@/models/comunication";
import * as Private from "@/routes/paths/paths.private";
import { ComunicationService } from "@/services/comunication.service";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  List as MuiList
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./styles";
interface UseLocationState {
  state: Question;
}

export interface DialogProps {
  open: boolean;
  onClose: () => void;
}

const Comunications: React.FC = () => {
  const { state } = useLocation() as UseLocationState;
  const { setLoading } = useLoading();

  const [openDialog, setOpenDialog] = React.useState(false);

  const [comunications, setComunications] = React.useState<List>({ data: [], meta: {} });
  const [comunictionId, setComunictionId] = React.useState<string>("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleToNewForm(): void {
    navigate(`${pathname}/new-comunication`, {
      state
    });
  }

  const getComunications = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const { data } = await ComunicationService.list();

      setComunications(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [state.id, setComunications]);

  useEffect(() => {
    getComunications();
  }, [getComunications, state.id]);

  const handleBackNavigation = () =>
    navigate(Private.EGRESS_PATH(), {
      state
    });

  const sendComunication = async (data: Degree) => {
    try {
      setOpenDialog(false);

      setLoading(true);

      await ComunicationService.send(data);

      setLoading(false);

      toast.success("E-mail com a comunicação enviado com sucesso!");
    } catch (error) {
      toast.error("Houve um erro ao enviar comunicação");

      console.error(error);
    }
  };

  function SendDialog({ onClose, open }: DialogProps) {
    return (
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>Enviar para o público</DialogTitle>
        <MuiList sx={{ pt: 0 }}>
          {degrees.map((item) => (
            <ListItem key={item.id}>
              <ListItemButton
                onClick={() => sendComunication({ id: comunictionId, degree: item.degree })}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "blue", color: "white" }}>
                    {item.icon && <item.icon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={DegreeTranspile[item.degree]} />
              </ListItemButton>
            </ListItem>
          ))}
        </MuiList>
      </Dialog>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.SearchContainer>
          <S.Input type="text" placeholder="Pesquisar" />
          <ButtonComponent type="button">
            <span>
              <BsSearch size={16} />
            </span>
          </ButtonComponent>
        </S.SearchContainer>

        <S.ButtonGroup>
          <ButtonComponent type="button" onClick={handleToNewForm}>
            <span>
              <BsPlusLg size={16} />
              Nova Comunicação
            </span>
          </ButtonComponent>
          <ButtonComponent type="button" outline onClick={handleBackNavigation}>
            <span>Voltar</span>
          </ButtonComponent>
        </S.ButtonGroup>
      </S.Header>
      <S.FormList>
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {comunications.data.length > 0 &&
              comunications.data?.map((comunication) => (
                <tr key={comunication.id}>
                  <td>{comunication.title}</td>
                  <S.Actions>
                    {/* <a href={form.form_url} target="_blank" rel="noreferrer">
                      <Button variant="contained" color="primary" size="large">
                        <BsEye size={22} />
                      </Button>
                    </a> */}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        setComunictionId(comunication.id);
                        setOpenDialog(true);
                      }}>
                      <FiSend size={22} />
                    </Button>
                  </S.Actions>
                </tr>
              ))}
          </tbody>
        </table>
      </S.FormList>
      <SendDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </S.Container>
  );
};

export default Comunications;
