import { Button, TextField, useMediaQuery } from "@mui/material";
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
    <Box>
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
            <Box>
              <TextField
                variant="outlined"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && errors.name}
              />
              <TextField
                variant="outlined"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && errors.email}
              />
              <TextField
                variant="outlined"
                type="text"
                label="Message"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.message}
                name="message"
                error={!!touched.message && errors.message}
                multiline
                rows={4}
              />
            </Box>
            <Box>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default ContactForm;
