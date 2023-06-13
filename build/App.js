import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/rsuite.min.css";
import "suneditor/dist/css/suneditor.min.css";
import RoutesComponent from "@/routes/routes.component";
import GlobalStyle from "@/styles/global.style";
import Theme from "@/styles/theme";
import Loading from "./components/Loading";
import { AppProvider } from "./hooks";
import { EditTextModal } from "./components/edit-text-modal";
function App() {
    return (_jsx(_Fragment, { children: _jsx(AppProvider, { children: _jsxs(ThemeProvider, { theme: Theme, children: [_jsx(Loading, {}), _jsx(RoutesComponent, {}), _jsx(GlobalStyle, {}), _jsx(ToastContainer, { theme: "colored" }), _jsx(EditTextModal, {})] }) }) }));
}
export default App;
//# sourceMappingURL=App.js.map