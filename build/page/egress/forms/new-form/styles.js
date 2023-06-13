import styled from "styled-components";
export const Container = styled.div `
  padding: 0 5rem;
`;
export const Header = styled.header `
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5rem;
`;
export const ButtonGroup = styled.div `
  width: 20%;
  display: flex;
  gap: 1.5rem;
`;
export const BoxForm = styled.div `
  box-shadow: 0px 4px 4px rgba(184, 190, 194, 0.6);
  border-radius: 2px;
  max-width: 920px;
  width: 100%;
  display: flex;
  gap: 2.25rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
`;
export const FormTitle = styled.input `
  max-width: 1314px;
  width: 100%;
  height: 7.625rem;
  padding: 2rem 2.5625rem;
  font-weight: 400;
  font-size: 3rem;
`;
export const QuestionGroup = styled.div `
  max-width: 58.9375rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 36px;
`;
export const QuestionInputItem = styled.div `
  display: flex;
  align-items: center;
  gap: 1.5rem;

  label {
    font-weight: 400;
    font-size: 1.5rem;
  }

  input {
    max-width: 56.25rem;
    width: 100%;
    height: 5.8125rem;
    padding: 2rem 2.5625rem;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;
export const QuestionTitle = styled.input `
  max-width: 58.9375rem;
  width: 100%;
  height: 7.125rem;
  padding: 2rem 2.5625rem;
  font-weight: 500;
  font-size: 2rem;
`;
export const FormOptions = styled.div `
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 400;
    font-size: 1.625rem;
    color: #004266;
  }
`;
export const BoxOptions = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.0625rem;
`;
export const ItemOption = styled.div `
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.5rem;
    color: #242626;
  }
  span {
    font-weight: 400;
    font-size: 1.25rem;
    color: #919699;
  }
`;
//# sourceMappingURL=styles.js.map