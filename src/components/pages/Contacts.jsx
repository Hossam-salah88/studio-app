import React, { useState } from "react";
// import FormInfo from "../FormInfo";
import Forminputs from "../Forminputs";

const Contacts = () => {
  return (
    <>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            {/* <FormInfo /> */}
            <Forminputs />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
