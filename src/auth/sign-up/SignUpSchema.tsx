import * as Yup from "yup";
export const signUpSchema = Yup.object({
  name: Yup.string().required("please enter name"),
  email: Yup.string()
    .email("Enter valid email")
    .required("please enter username"),
  password: Yup.string().required("please enter password"),
  confirmPassword: Yup.string().required("please enter confirm password"),
});
