import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { ThreeDots } from "react-loader-spinner";
import { useLoading } from "@/hooks/useLoading";
import Theme from "@/styles/theme";
const Loading = () => {
    const { loading } = useLoading();
    return (_jsx(_Fragment, { children: _jsx(ThreeDots, { visible: loading, width: "96", color: Theme.colors.blue.mediumLightBlue, wrapperClass: "spinner", wrapperStyle: {
                width: "100vw",
                height: "100vh",
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5"
            } }) }));
};
export default Loading;
//# sourceMappingURL=index.js.map