import React from 'react';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import styles from './../../styles/styles.module.scss';
import { signUpSchema } from './SignUpSchema';

export default function SignUp() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      action.resetForm();
    }
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  const signUpForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };
  console.log(touched.password);
  return (
    <Box className={styles.sign}>
      <Box className={styles.sign_up}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box className={styles.input_field}>
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              label="Enter name"
              id="name"
              size="small"
              value={values.name}
              onChange={signUpForm}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <span className={styles.form_error}>{errors.name}</span>
            ) : null}
          </Box>
          <Box className={styles.input_field}>
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              id="email"
              size="small"
              label="Enter email"
              value={values.email}
              onChange={signUpForm}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <span className={styles.form_error}>{errors.email}</span>
            ) : null}
          </Box>
          <Box className={styles.input_field}>
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              id="password"
              size="small"
              label="Enter Password"
              value={values.password}
              onChange={signUpForm}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <span className={styles.form_error}>{errors.password}</span>
            ) : null}
          </Box>
          <Box className={styles.input_field}>
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              size="small"
              id="confirmPassword"
              value={values.confirmPassword}
              label="Enter Confirm password"
              onChange={signUpForm}
              onBlur={handleBlur}
            />
            {values.password === '' &&
              touched.confirmPassword &&
              touched.password === true &&
              values.password !== '' && (
                <span className={styles.form_error}>{errors.confirmPassword}</span>
              )}
            {values.password !== '' &&
            values.password !== values.confirmPassword &&
            values.confirmPassword !== '' &&
            touched.confirmPassword ? (
              <span className={styles.form_error}>Password not match</span>
            ) : null}
          </Box>
          <Button type="submit" fullWidth variant="contained">
            Sign up
          </Button>
        </Box>
        <p>
          <span>Already have an account?</span>
          <b>
            <NavLink to="/SignIn">Sign in here</NavLink>
          </b>
        </p>
      </Box>
    </Box>
  );
}
