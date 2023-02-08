import * as Yup from "yup";

export const formSchema=Yup.object({
    first_name: Yup.string().required("Please enter your first_name"),
    last_name:Yup.string().required("Please enter your last_name"),
    email:Yup.string().email("Enter valid email").required("Please enter your email"),
    phone_no: Yup.string().matches(/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/, "Enter valid phone number").required("Please enter your phone_no"),
    gst: Yup.string().matches(
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
        "Enter valid gst number"
      ).required("Please enter your gst"),
})