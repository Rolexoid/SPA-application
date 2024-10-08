import React from 'react';
import { Formik } from 'formik';
import { FormControl, InputLabel, Input, FormHelperText, Button, Stack, Box } from '@mui/material';
import { useLoginUserMutation } from '../api/userApi';
import useAuth from '../hooks/useAuth';

const AuthorizationForm = () => {

  const [loginUser] = useLoginUserMutation();
  const { logIn } = useAuth(); 

  const onSubmit = async ({ username, password }) => {
    try {
      const response = await loginUser({ username, password }).unwrap();
      logIn(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Formik onSubmit={onSubmit} initialValues={{ username: '', password: ''}}>
        {({
          handleSubmit, handleChange, values
        }) => (
          <form onSubmit={handleSubmit}>
            <h1 className='text-center'>Авторизация пользователя</h1>
              <Stack spacing={2} sx={{ alignItems: 'center'}}>
                <FormControl>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    id="username"
                    aria-describedby="username-text"
                    required
                    value={values.username}
                    onChange={handleChange}
                    variant='filled'
                  />
                  <FormHelperText id="username-feedback">Feedback</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      id="password"
                      aria-describedby="password-text"
                      required
                      value={values.password}
                      onChange={handleChange}
                      variant='filled'
                    />
                    <FormHelperText id="password-feedback">Feedback</FormHelperText>
                </FormControl>
                <Button variant='contained' color='primary' type='submit'>Отправить</Button>
              </Stack>
          </form>
        )}
      </Formik>
    </Box>
  )
};

export default AuthorizationForm;