import React from "react";

export default function Form() {
  return (
    <>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Button
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
