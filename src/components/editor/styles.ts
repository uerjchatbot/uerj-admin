import styled from "styled-components";

export const Container = styled.div``;

export const ContainerEditor = styled.div`
  width: 100%;

  .editor {
    background: #ffffff;
    border: 1.09778px solid #cbd6e2;
    border-radius: 0px 0 3px 3px;
    padding: 16px;
  }

  aside.emoji-picker-react {
    position: absolute;
    z-index: 20;
    right: 70px;
  }
`;

export const Tooltip = styled.div`
  background-color: ${({ theme }) => theme.colors.blue.lightBlue};
  width: 100%;
  height: 40px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 1px 10px -1px rgba(0, 0, 0, 0.12),
    0px 4px 4px rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  display: flex;
  align-items: center;
`;

export const IconTooltip = styled.div<{ active: boolean }>`
  margin-left: 24px;
  cursor: pointer;
  background-color: ${({ active, theme }) => (active ? theme.colors.blue.blueDark : "none")};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.black.blackMedium)};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ active }) => (active ? "4px" : "0")};
`;

export const PickerContainer = styled.div``;
