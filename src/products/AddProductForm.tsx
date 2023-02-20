import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { formSchema } from '../schemas/schemas';
import style from '../styles/styles.module.scss';

import { useEffect } from 'react';
import { AddProductFormPro, IProduct } from '../interfaces/product';

export default function AddProductForm({
  onSubmitProductForm,
  userProducts,
  setuserProducts
}: AddProductFormPro) {
  const initialValues: IProduct = {
    id: userProducts.id,
    name: userProducts.name,
    category: userProducts.category,
    subCategory: userProducts.subCategory,
    description: userProducts.description,
    tax: userProducts.tax,
    discount: userProducts.discount,
    price:userProducts.price
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
    if (e.target.name === 'discount' || e.target.name === 'tax') {
      const value = Number(e.target.value);
      if (value <= 100) {
        setuserProducts({ ...userProducts, [name]: value });
      }
    } else {
      setuserProducts({ ...userProducts, [name]: value });
    }

    handleChange(e);
  };
  const onFormSubmit = (values: IProduct) => {
    onSubmitProductForm(values);
    setuserProducts({
      id: 0,
      name: '',
      category: '',
      subCategory: '',
      description: '',
      tax: 0,
      discount: 0,
      price:0,
    });
  };

  const ProductSubmit = (e: React.FormEvent) => {
    values.id = userProducts.id;
    values.name = userProducts.name;
    values.category = userProducts.category;
    values.subCategory = userProducts.subCategory;
    values.description = userProducts.description;
    values.tax = userProducts.tax;
    values.discount = userProducts.discount;
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
      id: 0,
      name: '',
      category: '',
      subCategory: '',
      description: '',
      tax: 0,
      discount: 0,
      price:0,
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
          {!Number.isNaN(userProducts.id) ? 'Edit' + ' ' + userProducts.name : 'Add product'}
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
            value={userProducts.name}
            onChange={handleValue}
          />
          {errors.name != null && (touched.name ?? false) ? (
            <p className={style.form_error}>{errors.name}</p>
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
          {errors.category != null && (touched.category ?? false) ? (
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
          value={userProducts.subCategory}
          onChange={handleValue}
        />

        {errors.subCategory != null && (touched.subCategory ?? false) ? (
          <p className={style.form_error}>{errors.subCategory}</p>
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

        {errors.description != null && (touched.description ?? false) ? (
          <p className={style.form_error}>{errors.description}</p>
        ) : null}
      </Box>

      <Box className={style.input_field}>
        <TextField
          size="small"
          id="outlined-required"
          type="number"
          label="tax"
          fullWidth
          InputProps={{ inputProps: { min: 0, max: 100 } }}
          name="tax"
          value={userProducts.tax === 0 ? '' : userProducts.tax}
          onChange={handleValue}
        />

        {errors.tax != null && (touched.tax ?? false) ? (
          <p className={style.form_error}>{errors.tax}</p>
        ) : null}
      </Box>
      <Box className={style.input_field}>
        <TextField
          size="small"
          id="outlined-required"
          label="discount"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 100 } }}
          fullWidth
          name="discount"
          value={userProducts.discount === 0 ? '' : userProducts.discount}
          onChange={handleValue}
        />

        {errors.discount != null && (touched.discount ?? false) ? (
          <p className={style.form_error}>{errors.discount}</p>
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
