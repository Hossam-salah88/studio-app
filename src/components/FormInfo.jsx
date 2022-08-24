import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldInput from "./FieldInput";

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

const FormInfo = () => {
  const fields = {
    section: [
      [
        {
          name: "name",
          elementName: "input",
          type: "text",
          placeholder: "Your Name *",
        },
        {
          name: "email",
          elementName: "input",
          type: "email",
          placeholder: "Your Email *",
        },

        {
          name: "phone",
          elementName: "input",
          type: "text",
          placeholder: "Your phone number",
        },
      ],
      [
        {
          name: "message",
          elementName: "textarea",
          type: "text",
          placeholder: "Your massage *",
        },
      ],
    ],
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log("Formik props", formik);

        return (
          <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              {fields.section.map((sec, secIndex) => {
                return (
                  <div className="col-md-6" key={secIndex}>
                    {sec.map((file, indexField) => {
                      return <FieldInput {...file} key={indexField} />;
                    })}
                  </div>
                );
              })}
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
        );
      }}
    </Formik>
  );
};

export default FormInfo;
