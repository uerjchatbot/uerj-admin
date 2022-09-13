import { ThemeProvider } from "styled-components";

import RoutesComponent from "@/routes/routes.component";
import GlobalStyle from "@/styles/global.style";
import Theme from "@/styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <RoutesComponent />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
