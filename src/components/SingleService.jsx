import React from "react";

const SingleService = (props) => {
  return (
    <>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary"></i>
          <i className={`fas ${props.icon} fa-stack-1x fa-inverse`}></i>
        </span>
        <h4 className="my-3">{props.serviceName}</h4>
        <p className="text-muted"> {props.serviceDescription}</p>
      </div>
    </>
  );
};

export default SingleService;
