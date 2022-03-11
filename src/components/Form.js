import React, { useState } from "react";
import axios from "axios";
import "../style/Form.css";

export default function Form(props) {
  const { setList } = props;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  // Search Giphy for search term
  const handleSubmit = () => {
    axios
      .get("/search", { params: { search: `${search}`, result: `${result}` } })
      .then((res) => {
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            class="form-control"
            placeholder="Enter Search Term"
          />
          <input
          onChange={(e) => {
            setResult(e.target.value)
          }}
            type="text"
            class="form-control"
            placeholder="Enter Number Of Results"
          />
          <div className="input-group-append">
            <button
              disabled={search.length < 1}
              className="btn btn-primary"
              type="submit"
            >
              Search Giphy
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
