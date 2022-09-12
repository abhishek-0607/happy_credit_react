import React from "react";

export const Postitems = (props) => {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" alt="" height="200px" />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.body}...</p>
          <a href="/" target="norerror" className="btn btn-sm btn-dark">
            View User
          </a>
        </div>
      </div>
    </div>
  );
};
