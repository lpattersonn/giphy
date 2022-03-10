import "./style/App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import GiphyList from "./components/GiphyList.js";
import axios from "axios";

function App() {
  const [list, setList] = useState({});

  // Set state to search result at root path
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <section id="App">
       <Form setList={setList}/>
    <div id="App_div">
      <GiphyList list={list} />
    </div>
    </section>
  );
}

export default App;
