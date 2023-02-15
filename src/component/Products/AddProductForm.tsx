import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { formSchema } from './Schema/schemas';
import style from '../../styles/styles.module.scss';
import { Product } from './TableModel';
import { useEffect } from 'react';
export interface AddProductFormPro {
  onSubmitProductForm: (inputs: Product) => void;
  userProducts: Product;
  setuserProducts: React.Dispatch<React.SetStateAction<Product>>;
}
export default function AddProductForm({
  onSubmitProductForm,
  userProducts,
  setuserProducts
}: AddProductFormPro) {
  const initialValues: Product = {
    product_name: userProducts.product_name,
    category: userProducts.category,
    sub_category: userProducts.sub_category,
    description: userProducts.description,
    company_id: userProducts.company_id
  };

  const { values, touched, errors, handleChange, handleSubmit, resetForm, setErrors } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values, action) => {
      onFormSubmit(values);
      action.resetForm();
    }
  });
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserProducts({ ...userProducts, [name]: value });
    handleChange(e);
  };
  const onFormSubmit = (values: Product) => {
    onSubmitProductForm(values);
    setuserProducts({
      product_name: '',
      category: '',
      sub_category: '',
      description: '',
      company_id: ''
    });
  };

  const ProductSubmit = (e: React.FormEvent) => {
    values.product_name = userProducts.product_name;
    values.category = userProducts.category;
    values.sub_category = userProducts.sub_category;
    values.description = userProducts.description;
    values.company_id = userProducts.company_id;
    e.preventDefault();
    handleSubmit();
  };
  useEffect(() => {
    setErrors({});
  }, [userProducts]);
  const resetErrors = () => {
    setErrors({});
  };

  const handleReset = () => {
    resetForm();
    setuserProducts({
      product_name: '',
      category: '',
      sub_category: '',
      description: '',
      company_id: ''
    });
  };
  return (
    <Box
      sx={{ paddingLeft: '1rem' }}
      component="form"
      onSubmit={ProductSubmit}
      noValidate
      autoComplete="off"
    >
      <Box className={style.title}>
        <Typography variant="h5">
          {userProducts.company_id ? 'Edit' + ' ' + userProducts.product_name : 'Add company'}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box className={style.input_field} sx={{ paddingRight: '1rem' }}>
          <TextField
            size="small"
            label="product_name"
            type="text"
            name="product_name"
            fullWidth
            value={userProducts.product_name}
            onChange={handleValue}
          />
          {errors.product_name && touched.product_name ? (
            <p className={style.form_error}>{errors.product_name}</p>
          ) : null}
        </Box>
        <Box className={style.input_field}>
          <TextField
            size="small"
            label="category"
            type="text"
            fullWidth
            name="category"
            value={userProducts.category}
            onChange={handleValue}
          />
          {errors.category && touched.category ? (
            <p className={style.form_error}>{errors.category}</p>
          ) : null}
        </Box>
      </Box>

      <Box className={style.input_field}>
        <TextField
          size="small"
          id="outlined-required"
          label="sub_category"
          fullWidth
          type="text"
          name="sub_category"
          value={userProducts.sub_category}
          onChange={handleValue}
        />

        {errors.sub_category && touched.sub_category ? (
          <p className={style.form_error}>{errors.sub_category}</p>
        ) : null}
      </Box>

      <Box className={style.input_field}>
        <TextField
          size="small"
          id="outlined-required"
          label="description"
          fullWidth
          type="text"
          name="description"
          value={userProducts.description}
          onChange={handleValue}
        />

        {errors.description && touched.description ? (
          <p className={style.form_error}>{errors.description}</p>
        ) : null}
      </Box>

      <Box className={style.input_field} sx={{ display: 'flex' }}>
        <Box sx={{ paddingRight: '1rem' }}>
          <Button type="button" variant="contained" onClick={handleReset} size="small">
            RESET
          </Button>
        </Box>
        <Box textAlign={'end'} sx={{ paddingRight: '1rem' }}>
          <Button type="button" variant="contained" onClick={resetErrors} size="small">
            RESET ERRORS
          </Button>
        </Box>
        <Box textAlign={'end'}>
          <Button type="submit" variant="contained" size="small">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
