import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../../../assets/logo.png";
import { LoginLogo } from "../Logo";

import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

const defaultTheme = createTheme();

export default function SignUp() {
  const { register, currentUser } = useAuth();
  const navigate = useNavigate();
  if(currentUser) return navigate("/");

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <LoginLogo brand="Cuidate!" logo={Logo} />
          <Typography component="h1" variant="h5">
            Registro
          </Typography>

          <Formik
            initialValues={{
              name: "",
              last_name: "",
              email: "",
              pass: "",
              pass2: "",
              terms: "",
            }}
            validate={(values) => {
              const errors = {};
              const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

              if (!values.name) {
                errors.name = "Campo obligatorio";
              }

              if (!values.last_name) {
                errors.last_name = "Campo obligatorio";
              }

              if (!values.email) {
                errors.email = "Campo obligatorio";
              } else if (!regexpEmail.test(values.email)) {
                errors.email = "Email invalido";
              }

              if (!values.pass) {
                errors.pass = "Campo obligatorio";
              }

              if (!values.pass2) {
                errors.pass2 = "Campo obligatorio";
              } else if (values.pass !== values.pass2) {
                errors.pass2 = "Las contraseñas no coinciden";
              }
              console.log(values.terms);

              if (!values.terms) {
                errors.terms = "Debes aceptar los terminos y condiciones";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const data = {
                ...values,
                terms: values.terms && "on",
                role: 0,
              };

              register(data);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  fullWidth
                  id="name"
                  label="Nombre"
                  autoFocus
                  error={errors.name && touched.name}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.name && touched.name && errors.name}
                    />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="last_name"
                  label="Apellido"
                  name="last_name"
                  error={errors.last_name && touched.last_name}
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.last_name &&
                    touched.last_name &&
                    errors.last_name
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  error={errors.email && touched.email}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="pass"
                  label="Contraseña"
                  type="password"
                  id="pass"
                  error={errors.pass && touched.pass}
                  value={values.pass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.pass && touched.pass && errors.pass}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="pass2"
                  label="Reingrese la contraseña"
                  type="password"
                  id="pass2"
                  error={errors.pass2 && touched.pass2}
                  value={values.pass2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.pass2 && touched.pass2 && errors.pass2}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="terms"
                      color="primary"
                      value={values.terms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  }
                  label="Acepto los terminos y condiciones"
                />
                {errors.terms && touched.terms && (
                  <small style={{ color: "red" }}> {errors.terms} </small>
                )}

              </Grid>
            </Grid>
            <Button
              className='btn-register'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarme
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  ¿Ya posees una cuenta? Acceder
                </Link>
              </Grid>
            </Grid>
          </Box>
        )}
      </Formik>
     </Box>
  </Container>
</ThemeProvider>
);
}