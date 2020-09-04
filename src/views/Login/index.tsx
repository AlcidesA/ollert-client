import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Section, Title, Wrapper } from './styles'
import { Button, TextField, Box } from '@material-ui/core'
import Api from '../../providers/Api'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required()
    }),
    onSubmit: async values => {
      console.log(values)
    }
  })

  return (
    <Section>
      <Wrapper>
        <Title>Login to ollert</Title>

        <form action="#" onSubmit={formik.handleSubmit}>
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
            placeholder="Enter password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <Box mt={2}>
            <Button fullWidth type="submit" color="primary" variant="contained">Log in</Button>
          </Box>
        </form>
      </Wrapper>
    </Section>
  )
}

export default Login
