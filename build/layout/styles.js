import styled from "styled-components";
export const Container = styled.div `
  display: flex;
  width: 100%;
  height: 100%;
`;
export const Content = styled.div `
  width: ${({ rendedMenu }) => (rendedMenu ? "calc(100% - 100px)" : "100%")};
  overflow-y: scroll;
`;
//# sourceMappingURL=styles.js.map