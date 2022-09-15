import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ThemeProvider } from "styled-components";
import RoutesComponent from "@/routes/routes.component";
import GlobalStyle from "@/styles/global.style";
import Theme from "@/styles/theme";
function App() {
    return (_jsx(_Fragment, { children: _jsxs(ThemeProvider, { theme: Theme, children: [_jsx(RoutesComponent, {}), _jsx(GlobalStyle, {})] }) }));
}
export default App;
//# sourceMappingURL=App.js.map