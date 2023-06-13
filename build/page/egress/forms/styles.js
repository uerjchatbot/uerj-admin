import styled from "styled-components";
export const Container = styled.div `
  padding: 0 5rem;
`;
export const Header = styled.header `
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
`;
export const SearchContainer = styled.div `
  width: 50%;
  display: flex;
  gap: 1rem;
`;
export const ButtonGroup = styled.div `
  width: 50%;
  display: flex;
  gap: 1.5rem;
`;
export const Input = styled.input `
  min-width: 90%;
  padding-left: 1rem;
`;
export const FormList = styled.div `
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    tr:not(first-child) {
      border-bottom: 2px solid ${({ theme }) => theme.colors.grey.extraLightGrey};
    }

    th {
      font-size: 1rem;
      padding: 1rem;
      text-align: left;
      background: ${({ theme }) => theme.colors.blue.mediumLightBlue};
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 1rem;
      font-size: 1rem;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;
export const Actions = styled.td `
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;
export const Button = styled.button `
  background-color: ${({ theme, isDelete }) => (isDelete ? "red" : theme.colors.blue.normalBlue)};
  height: 3rem;
  width: 3rem;
  color: ${({ theme }) => theme.colors.white.white};
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;
//# sourceMappingURL=styles.js.map