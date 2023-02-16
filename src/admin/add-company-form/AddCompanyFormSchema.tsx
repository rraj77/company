import * as Yup from 'yup';
export const companySchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string().email('Enter valid email').required('Please enter your email'),
  phone: Yup.string()
    .matches(/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/, 'Enter valid phone number')
    .required('Please enter mobile number'),
  pan: Yup.string()
    .matches(/([A-Z]){5}([0-9]){4}([A-Z]){1}$/, 'Enter valid pan number')
    .required('Please enter pan'),
  gst: Yup.string()
    .matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Enter valid gst number')
    .required('Please enter gst'),
  cin: Yup.string()
    .matches(
      /^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/,
      'Enter valid cin number'
    )
    .required('Please enter cin')
});
