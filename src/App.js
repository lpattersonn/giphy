import "./style/App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import GiphyList from "./components/GiphyList.js";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        console.log(res.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section id="App">
      <GiphyList list={list} />
      <Form />
    </section>
  );
}

export default App;
