import React from "react";
import SinglePort from "../SinglePort";

// project img
import projectImg1 from "../../img/portfolio/1.jpg";
import projectImg2 from "../../img/portfolio/2.jpg";
import projectImg3 from "../../img/portfolio/3.jpg";
import projectImg4 from "../../img/portfolio/4.jpg";
import projectImg5 from "../../img/portfolio/5.jpg";
import projectImg6 from "../../img/portfolio/6.jpg";

const Portfolio = () => {
  const projects = [
    {
      projectName: "Threads",
      projectDes: "Illustration",
      projectImg: projectImg1,
      projecticon: "fa-plus",
    },
    {
      projectName: "Explore",
      projectDes: "Graphic Design",
      projectImg: projectImg2,
      projecticon: "fa-plus",
    },
    {
      projectName: "Finish",
      projectDes: "Identity",
      projectImg: projectImg3,
      projecticon: "fa-plus",
    },
    {
      projectName: "Lines",
      projectDes: "Branding",
      projectImg: projectImg4,
      projecticon: "fa-plus",
    },
    {
      projectName: "Southwest",
      projectDes: "Website Design",
      projectImg: projectImg5,
      projecticon: "fa-plus",
    },
    {
      projectName: "Window",
      projectDes: "Photography",
      projectImg: projectImg6,
      projecticon: "fa-plus",
    },
  ];
  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div classNameName="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {projects.map((project, index) => (
              <SinglePort key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
