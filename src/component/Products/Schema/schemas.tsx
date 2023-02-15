import * as Yup from 'yup';

export const formSchema = Yup.object({
  product_name: Yup.string().required('Please enter your product_name'),
  category: Yup.string().required('Please enter your category'),
  sub_category: Yup.string().required('Please enter your sub_category'),
  description: Yup.string().required('Please enter your description')
});
