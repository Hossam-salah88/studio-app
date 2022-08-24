import React from "react";

const TeamMember = (props) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="team-member">
          <img
            className="mx-auto rounded-circle"
            src={props.memberImg}
            alt="member Img"
          />
          <h4>{props.memberName}</h4>
          <p className="text-muted">{props.memberJopDes}</p>
          <a
            className="btn btn-dark btn-social mx-2"
            href={props.twitterLinke}
            aria-label="Parveen Anand Twitter Profile"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href={props.facebookLinke}
            aria-label="Parveen Anand Facebook Profile"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href={props.linkedinLinke}
            aria-label="Parveen Anand LinkedIn Profile"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
