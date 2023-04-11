import React from 'react';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import styles from './../../styles/styles.module.scss';
import { signInSchema } from './SignInSchema';
import { userLogin } from '../../api/userApi';


export default function SignIn() {
   const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: ''
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: async (values, action) => {
      const data = await userLogin(values);
    
      localStorage.setItem('userData', JSON.stringify(data.data.user));
      localStorage.setItem('token', data.data.token);
      
      if(data.status===200){
         navigate('/');        
      }
      
      
      action.resetForm();
    }
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  const signInForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <Box className={styles.sign}>
      <Box className={styles.sign_in}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box className={styles.input_field}>
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Username"
              id="email"
              size="small"
              value={values.email}
              onChange={signInForm}
              onBlur={handleBlur}
            />
            {errors.email != null && (touched.email ?? false) ? (
              <span className={styles.form_error}>{errors.email}</span>
            ) : null}
          </Box>
          <Box className={styles.input_field}>
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              label="Password"
              id="password"
              size="small"
              value={values.password}
              onChange={signInForm}
              onBlur={handleBlur}
            />
            {errors.password != null && (touched.password ?? false) ? (
              <span className={styles.form_error}>{errors.password}</span>
            ) : null}
          </Box>
          <Button type="submit" fullWidth variant="contained">
            Sign in
          </Button>
        </Box>
        <p>
          <b>Forgot password?</b>
        </p>
        <p>
          <span>Dont have an account? &nbsp;</span>
          <b>
            <NavLink to="/SignUp">Sign up here</NavLink>
          </b>
        </p>
      </Box>
     
    </Box>
  );
}
