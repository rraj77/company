import * as Yup from "yup";
export const vatTableSchema = Yup.object({
  name: Yup.string().required("please enter name"),
  tax: Yup.string()
    .matches(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/, "Enter valid tax number")
    .required("please enter tax"),
  description: Yup.string()
    .required("please enter description"),
});
