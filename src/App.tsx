import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RoutesComponent from "@/routes/routes.component";
import GlobalStyle from "@/styles/global.style";
import Theme from "@/styles/theme";
import Loading from "./components/Loading";
import { AppProvider } from "./hooks";

function App() {
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={Theme}>
          <Loading />
          <RoutesComponent />
          <GlobalStyle />
          <ToastContainer theme="colored" />
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
