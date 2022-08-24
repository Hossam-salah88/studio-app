import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  massage: "",
};

const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  console.log("submitProps", submitProps);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
  alert("you have submitted the form");
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().required("Required"),
  massage: Yup.string().required("Required"),
});

const Forminputs = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log("Formik props", formik);
        return (
          <>
            <Form id="contactForm">
              <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* <!-- Name input--> */}
                    <Field
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Your Name *"
                    />
                    <ErrorMessage name="name">
                      {(error) => (
                        <div className="error text-start">{error}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    {/* <!-- Email address input--> */}
                    <Field
                      className="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                    />
                    <ErrorMessage name="email">
                      {(error) => (
                        <div className="error text-start">{error}</div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="form-group mb-md-0">
                    {/* <!-- Phone number input--> */}
                    <Field
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your Phone *"
                    />
                    <ErrorMessage name="phone">
                      {(error) => (
                        <div className="error text-start">{error}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-group-textarea mb-md-0">
                    {/* <!-- Message input--> */}
                    <Field
                      className="form-control"
                      id="message"
                      name="massage"
                      as="textarea"
                      placeholder="Your Message *"
                    />
                    <ErrorMessage name="massage">
                      {(error) => (
                        <div className="error text-start">{error}</div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>

              {/* <!-- Submit Button--> */}
              <div className="text-center">
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  Send Message
                </button>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default Forminputs;
