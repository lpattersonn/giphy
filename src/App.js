import "./style/App.css";
import Form from "./components/Form.js";
import GiphyList from "./components/GiphyList.js"
import React, { useState, useEffect } from "react";

function App() {
  const [list, setLsit] = useState([]);

  useEffect(() => {
    axios
  })

  return (
    <section id="App">
      <GiphyList list={list}/>
      <Form />
    </section>
  );
}

export default App;
