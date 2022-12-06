import React from "react";

export const Home = () => {
  return (
    <div>
    <div className="container my-3">
  
      <h2>Add a note</h2>

      <form className="my-3">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      <hr />

      <div className="container my-3">
      <h2>Your notes</h2>
      </div>
    </div>
  );
};
