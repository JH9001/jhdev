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

const ContactForm = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box
      sx={{
        pl: "4%",
        pr: "4%",
        pt: "6%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        onSubmit={handleFormSubmit}
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
          <Form onSubmit={handleSubmit}>
            <Card sx={{ maxWidth: "50rem" }}>
              <Typography
                sx={{
                  fontSize: "h5",
                  fontWeight: 500,
                  pt: "1.5rem",
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
                  pb: "1rem",
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
                        pb: "1%",
                      }}
                    >
                      Name
                    </Typography>
                    <TextField
                      variant="outlined"
                      type="text"
                      placeholder="Enter Your Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      name="name"
                      error={!!touched.name && errors.name}
                      sx={{ width: 1, bgcolor: "#dfe0e1" }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Typography
                      sx={{
                        fontSize: "h7",
                        fontWeight: 500,
                        pb: "1%",
                      }}
                    >
                      Email
                    </Typography>
                    <TextField
                      variant="outlined"
                      type="text"
                      placeholder="Enter Your Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={!!touched.email && errors.email}
                      sx={{ width: 1, bgcolor: "#dfe0e1" }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Typography
                      sx={{
                        fontSize: "h7",
                        fontWeight: 500,
                        pb: "1%",
                      }}
                    >
                      Message
                    </Typography>
                    <TextField
                      variant="outlined"
                      type="text"
                      placeholder="Enter Your Message"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.message}
                      name="message"
                      error={!!touched.message && errors.message}
                      multiline
                      rows={4}
                      sx={{ width: 1, bgcolor: "#dfe0e1" }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        width: 1,
                        bgcolor: "#666767",
                        ":hover": {
                          bgcolor: "#f67011",
                        },
                      }}
                    >
                      Submit
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
};
export default ContactForm;
