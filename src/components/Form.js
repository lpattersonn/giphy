import React, { useState } from "react";
import axios from "axios";
import "../style/Form.css";

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
        disabled={search.length < 1}
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              disabled={search.length < 1}
              className="btn btn-primary"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
