import * as yup from "yup";
const Schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});
export default Schema;
//# sourceMappingURL=login.js.map