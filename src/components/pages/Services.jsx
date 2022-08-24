import React from "react";
import SingleService from "../SingleService";

const Services = () => {
  const services = [
    {
      serviceName: "E-Commerce",
      serviceDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta impedit.`,
      icon: "fa-shopping-cart",
    },

    {
      serviceName: "Responsive Design",
      serviceDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta impedit.`,
      icon: "fa-laptop",
    },

    {
      serviceName: "Web Security",
      serviceDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta impedit.`,
      icon: "fa-lock",
    },
  ];
  return (
    <>
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row text-center">
            {services.map((serv, index) => (
              <SingleService {...serv} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
