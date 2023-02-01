import * as Yup from "yup";
export const signInSchema = Yup.object({
  email: Yup.string()
    .email("Enter valid email")
    .required("please enter username"),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    .required("please enter password"),
});
