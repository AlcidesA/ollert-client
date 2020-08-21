import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
    <form onSubmit={formik.handleSubmit}>
      <input
        name="name"
        type="name"
        placeholder="Enter full name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <input
        name="password"
        type="password"
        placeholder="Create password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm