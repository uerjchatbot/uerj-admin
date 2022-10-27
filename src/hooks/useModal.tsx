/* eslint-disable no-undef */
import React, { useState, useContext, createContext } from "react";

type Props = {
  children: React.ReactNode;
};

interface IContextData {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  component: JSX.Element;
  setComponent: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

const ModalContext = createContext({} as IContextData);

export const ModalProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [component, setComponent] = useState(<></>);

  return (
    <ModalContext.Provider
      value={{ isVisible, setIsVisible, title, setTitle, component, setComponent }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal context must be provided with ModalContext");
  }

  return context;
};
