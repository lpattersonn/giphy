import React, { useState } from "react";
import axios from "axios";

export default function Form(props) {
  const { setList } = props;
  const [search, setSearch] = useState("");

  // Search Giphy for search term
  const handleSubmit = () => {
    axios.get("/search", { params: { search: `${search}` } }).then((res) => {
      console.log(res.data.data);
      setList(res.data);
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
          handleSubmit();
        }}
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Giphy"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
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
