import React from "react";
import { Field, ErrorMessage } from "formik";
const FieldInput = (props) => {
  return (
    <>
      {props.elementName === "input" ? (
        <div className="form-group">
          <Field
            className="form-control"
            id={props.elementName}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            required="required"
          />
          <ErrorMessage name={props.name}>
            {(error) => <div className="error text-start">{error}</div>}
          </ErrorMessage>
        </div>
      ) : (
        <div className="form-group form-group-textarea mb-md-0">
          <Field
            className="form-control"
            as="textarea"
            id={props.elementName}
            name={props.name}
            placeholder={props.placeholder}
            required="required"
          />
          <ErrorMessage name={props.name}>
            {(error) => <div className="error text-start">{error}</div>}
          </ErrorMessage>
        </div>
      )}
    </>
  );
};

export default FieldInput;
