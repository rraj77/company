import * as Yup from 'yup';

export const formSchema = Yup.object({
	name: Yup.string().required('Please enter your name'),
	category: Yup.string().required('Please enter your category'),
	subCategory: Yup.string().required('Please enter your subCategory'),
	description: Yup.string().required('Please enter your description'),
	tax: Yup.number().min(1).max(100).required('Please enter your tax'),
	discount: Yup.number().min(1).max(100).required('Please enter your discount')
});
