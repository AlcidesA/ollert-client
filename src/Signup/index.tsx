import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, Box } from '@material-ui/core';
import * as Yup from 'yup';
import { Section, Title, Wrapper } from './styles';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required()
    }),
    onSubmit: values => {
      console.log(values)
    },
  });


  return (
    <Section>
      <Wrapper>
        <Title>Sign up for your account</Title>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="dense"
            name="name"
            type="name"
            placeholder="Enter full name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          
          <TextField
            fullWidth
            margin="dense"
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <TextField
            fullWidth
            margin="dense"
            name="password"
            type="password"
            placeholder="Create password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <Box mt={2}>
            <Button fullWidth type="submit" color="primary" variant="contained">Submit</Button>
          </Box>
        </form>
      </Wrapper>      
    </Section>
  );
};

export default SignupForm