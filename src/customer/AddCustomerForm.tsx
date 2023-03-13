import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { formSchema } from './Schema/schemas';
import style from '../styles/styles.module.scss';

import { useEffect, useState } from 'react';
import { AddCustomerFormPro, ICustomer } from '../interfaces/customer';

export default function AddCustomerForm({
  onSubmitCustomerForm,
  userCustomer,
  setuserCustomer,
  file,
  setFile
}: AddCustomerFormPro) {
  const initialValues: ICustomer = {
    avatar: userCustomer.avatar,
    first_name: userCustomer.first_name,
    last_name: userCustomer.last_name,
    email: userCustomer.email,
    phone_no: userCustomer.phone_no,
    gst: userCustomer.gst,
    id: userCustomer.id
  };

  const [fileName, setFileName] = useState('');
  const image = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(URL.createObjectURL(e.target.files[0]));
    setFileName(e.target.value);
  };
  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values, action) => {
      onFormSubmit(values);
      action.resetForm();
    }
  });

  const { values, touched, errors, handleChange, handleSubmit, resetForm, setErrors } = formik;
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserCustomer({ ...userCustomer, [name]: value });
    handleChange(e);
  };
  const onFormSubmit = (values: ICustomer) => {
    onSubmitCustomerForm(values, file);
    setErrors({});
    setuserCustomer({
      id: 0,
      avatar: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_no: 0,
      gst: ''
    });
    setFileName('');
    setFile('');
    handleReset();
  };

  const CustomerSubmit = (e: React.FormEvent) => {
    values.avatar = userCustomer.avatar;
    values.first_name = userCustomer.first_name;
    values.last_name = userCustomer.last_name;
    values.email = userCustomer.email;
    values.phone_no = userCustomer.phone_no;
    values.gst = userCustomer.gst;
    values.id = userCustomer.id;
    e.preventDefault();
    handleSubmit();
  };
  useEffect(() => {
    setErrors({});
  }, [userCustomer]);
  const resetErrors = () => {
    setErrors({});
  };

  const handleReset = () => {
    resetForm();
    setuserCustomer({
      id: 0,
      avatar: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_no: 0,
      gst: ''
    });
  };
  return (
    <Box component="form" onSubmit={CustomerSubmit} noValidate autoComplete="off">
      <Box className={style.title}>
        <Typography variant="h5">
          {userCustomer.id !== 0 ? 'Edit' + ' ' + userCustomer.first_name : 'Add Customer'}
        </Typography>
      </Box>
      <Box component="form">
        <Typography>Upload photo</Typography>
        {file !== '' ? <Box component="img" src={file} className={style.img} /> : ''}

        <Box className={style.input_field}>
          <TextField type="file" fullWidth size="small" onChange={image} value={fileName} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box className={style.input_field} sx={{ paddingRight: '1rem' }}>
          <TextField
            size="small"
            label="first_name"
            type="text"
            name="first_name"
            fullWidth
            value={userCustomer.first_name}
            onChange={handleValue}
          />
          {errors.first_name != null && (touched.first_name ?? false) ? (
            <p className={style.form_error}>{errors.first_name}</p>
          ) : null}
        </Box>
        <Box className={style.input_field}>
          <TextField
            size="small"
            label="last_name"
            type="text"
            fullWidth
            name="last_name"
            value={userCustomer.last_name}
            onChange={handleValue}
          />
          {errors.last_name != null && (touched.last_name ?? false) ? (
            <p className={style.form_error}>{errors.last_name}</p>
          ) : null}
        </Box>
      </Box>

      <Box className={style.input_field}>
        <TextField
          size="small"
          id="outlined-required"
          label="email"
          fullWidth
          type="text"
          name="email"
          value={userCustomer.email}
          onChange={handleValue}
        />

        {errors.email != null && (touched.email ?? false) ? (
          <p className={style.form_error}>{errors.email}</p>
        ) : null}
      </Box>

      <Box className={style.input_field}>
        <TextField
          size="small"
          id="outlined-required"
          label="phone_no"
          fullWidth
          name="phone_no"
          value={userCustomer.phone_no === 0 ? '' : userCustomer.phone_no}
          onChange={handleValue}
        />

        {errors.phone_no != null && (touched.phone_no ?? false) ? (
          <p className={style.form_error}>{errors.phone_no}</p>
        ) : null}
      </Box>

      <Box className={style.input_field}>
        <TextField
          size="small"
          id="outlined-required"
          label="gst"
          fullWidth
          name="gst"
          value={userCustomer.gst}
          onChange={handleValue}
        />

        {errors.gst != null && (touched.gst ?? false) ? (
          <p className={style.form_error}>{errors.gst}</p>
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
