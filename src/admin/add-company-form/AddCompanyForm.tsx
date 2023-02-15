import React, { useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { AddCompanyFormProps, CompanyTypes } from '../../interfaces/interfaces';
import { companySchema } from './AddCompanyFormSchema';
import styles from '../../styles/styles.module.scss';

const { forwardRef, useImperativeHandle } = React;
const AddCompanyForm = forwardRef(
  ({ onSubmitCompanyForm, editCompany, setEditCompany }: AddCompanyFormProps, ref) => {
    const initialValues: CompanyTypes = {
      name: editCompany.name,
      email: editCompany.email,
      phone: editCompany.phone,
      pan: editCompany.pan,
      gst: editCompany.gst,
      cin: editCompany.cin,
      id: editCompany.id
    };

    const formik = useFormik({
      initialValues,
      validationSchema: companySchema,
      onSubmit: (values, action) => {
        // onSubmitForm(values);
        values.id = editCompany.id;
        onSubmitCompanyForm(values);
        setEditCompany({
          id: '',
          name: '',
          email: '',
          phone: '',
          pan: '',
          gst: '',
          cin: ''
        });
        action.resetForm();
      }
    });
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    useImperativeHandle(ref, () => ({
      onNewForm() {
        setEditCompany({
          id: '',
          name: '',
          email: '',
          phone: '',
          pan: '',
          gst: '',
          cin: ''
        });
        formik.resetForm();
      }
    }));

    useEffect(() => {
      formik.resetForm();
    }, [editCompany]);

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
      setEditCompany({ ...editCompany, [e.target.name]: e.target.value });
    };

    const handleFormData = (e: React.FormEvent) => {
      values.name = editCompany.name;
      values.email = editCompany.email;
      values.phone = editCompany.phone;
      values.pan = editCompany.pan;
      values.gst = editCompany.gst;
      values.cin = editCompany.cin;
      values.id = editCompany.id;
      handleSubmit();
      e.preventDefault();
    };

    return (
      <Box>
        <Box className={styles.title}>
          <Typography variant="h5">
            {editCompany.id ? 'Edit' + ' ' + editCompany.name : 'Add company'}
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleFormData} noValidate>
          <Box className={styles.input_field}>
            <TextField
              name="name"
              label="Enter company name"
              variant="outlined"
              size="small"
              value={editCompany.name}
              onChange={onChangeValue}
              onBlur={handleBlur}
              id="name"
              fullWidth
            />
            {errors.name && touched.name ? (
              <span className={styles.form_error}>{errors.name}</span>
            ) : null}
          </Box>
          <Box className={styles.input_field}>
            <TextField
              name="email"
              label="Enter email"
              variant="outlined"
              size="small"
              value={editCompany.email}
              onChange={onChangeValue}
              fullWidth
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <span className={styles.form_error}>{errors.email}</span>
            ) : null}
          </Box>
          <Box className={styles.input_field}>
            <TextField
              name="phone"
              label=" Enter phone number"
              variant="outlined"
              size="small"
              value={editCompany.phone}
              onChange={onChangeValue}
              fullWidth
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (
              <span className={styles.form_error}>{errors.phone}</span>
            ) : null}
          </Box>
          <Box className={styles.input_field}>
            <TextField
              name="pan"
              label="Enter pan number"
              variant="outlined"
              size="small"
              value={editCompany.pan}
              onChange={onChangeValue}
              fullWidth
              onBlur={handleBlur}
            />
            {errors.pan && touched.pan ? (
              <span className={styles.form_error}>{errors.pan}</span>
            ) : null}
          </Box>
          <Box className={styles.input_field}>
            <TextField
              name="gst"
              label="Enter gst number"
              variant="outlined"
              size="small"
              value={editCompany.gst}
              onChange={onChangeValue}
              fullWidth
              onBlur={handleBlur}
            />
            {errors.gst && touched.gst ? (
              <span className={styles.form_error}>{errors.gst}</span>
            ) : null}
          </Box>
          <Box className={styles.input_field}>
            <TextField
              name="cin"
              label="Enter cin number"
              variant="outlined"
              size="small"
              fullWidth
              value={editCompany.cin}
              onChange={onChangeValue}
              onBlur={handleBlur}
            />
            {errors.cin && touched.cin ? (
              <span className={styles.form_error}>{errors.cin}</span>
            ) : null}
          </Box>
          <Button fullWidth type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    );
  }
);

export default AddCompanyForm;
