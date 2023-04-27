import React from "react";
import { useForm } from "@formspree/react";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";

import { Form, Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const userSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  message: yup.string().required("required"),
});

function ContactFormSpree() {
  const [state, handleSubmit] = useForm("xpzejebo");
  if (state.succeeded) {
    return (
      <Box
        sx={{
          ml: "4%",
          mr: "4%",
          mt: "6%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "h5",
            fontWeight: 500,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Thanks for getting in touch!
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        ml: "4%",
        mr: "4%",
        mt: "6%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form
            action="https://formspree.io/f/xpzejebo"
            onSubmit={handleSubmit}
            method="POST"
          >
            <Card sx={{ maxWidth: "50rem" }}>
              <Typography
                sx={{
                  fontSize: "h5",
                  fontWeight: 500,
                  mt: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Contact Me
              </Typography>
              <Typography
                sx={{
                  fontSize: "h7",
                  color: "#f67011",
                  mb: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                ( I'll get back to you! )
              </Typography>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid xs={12} sm={6} item>
                    <Typography
                      sx={{
                        fontSize: "h7",
                        fontWeight: 500,
                        mb: "1%",
                      }}
                    >
                      Name
                    </Typography>
                    <TextField
                      id="name"
                      name="name"
                      variant="outlined"
                      placeholder="Enter Your Name"
                      sx={{ width: 1, bgcolor: "#dfe0e1" }}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      error={!!touched.name && errors.name}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Typography
                      sx={{
                        fontSize: "h7",
                        fontWeight: 500,
                        mb: "1%",
                      }}
                    >
                      Email
                    </Typography>
                    <TextField
                      id="email"
                      type="text"
                      name="email"
                      variant="outlined"
                      placeholder="Enter Your Email"
                      sx={{ width: 1, bgcolor: "#dfe0e1" }}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      error={!!touched.email && errors.email}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Typography
                      sx={{
                        fontSize: "h7",
                        fontWeight: 500,
                        mb: "1%",
                      }}
                    >
                      Message
                    </Typography>
                    <TextField
                      id="message"
                      name="message"
                      variant="outlined"
                      multiline
                      rows={4}
                      placeholder="Enter Your Message"
                      sx={{ width: 1, bgcolor: "#dfe0e1" }}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.message}
                      error={!!touched.message && errors.message}
                    />
                  </Grid>
                  <Grid
                    xs={12}
                    item
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        width: 1,
                        height: "60px",
                        bgcolor: "#666767",
                        ":hover": {
                          bgcolor: "#f67011",
                        },
                      }}
                    >
                      <Typography fontSize="1.35rem" fontWeight={500}>
                        Submit
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default ContactFormSpree;
