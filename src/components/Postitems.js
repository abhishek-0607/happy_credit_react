import React from "react";

export const Postitems = (props) => {
  const getUser = async (user) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user}`
    );
    const data = await res.json();
    console.log(data);
    alert(`name:-${data.name}, email:-${data.email}, phone:-${data.phone}`);
  };
  return (
    <div>
      <div className="card">
        {/* <img src={imgUrl} className="card-img-top" alt="" height="200px" /> */}
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.body}...</p>
          <button
            onClick={() => getUser(props.userId)}
            target="norerror"
            className="btn btn-sm btn-dark"
          >
            Read more...
          </button>
        </div>
      </div>
    </div>
  );
};
