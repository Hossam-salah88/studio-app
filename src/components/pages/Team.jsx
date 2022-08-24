import React from "react";
import memberImg1 from "../../img/team/1.jpg";
import memberImg2 from "../../img/team/2.png";
import memberImg3 from "../../img/team/3.jpg";
import TeamMember from "../TeamMember";

const Team = () => {
  const teammembers = [
    {
      memberImg: memberImg1,
      memberName: "Parveen Anand",
      memberJopDes: "Lead Designer",
      facebookLinke: "#??",
      twitterLinke: "#??",
      linkedinLinke: "#??",
    },
    {
      memberImg: memberImg2,
      memberName: "Diana Petersen",
      memberJopDes: "Lead Marketer",
      facebookLinke: "#??",
      twitterLinke: "#??",
      linkedinLinke: "#??",
    },
    {
      memberImg: memberImg3,
      memberName: "Larry Parker",
      memberJopDes: "Lead Developer",
      facebookLinke: "#??",
      twitterLinke: "#??",
      linkedinLinke: "#??",
    },
  ];

  return (
    <>
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            {teammembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
