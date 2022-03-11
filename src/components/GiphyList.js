import React from "react";
import "../style/GiphyList.css";

export default function GiphyList(props) {
  const { list } = props;

  const entries = Object.entries(list);

  // Return an array of JSX to render
  const result = () => {
    let newArray = [];
    for (let element of entries) {
      for (let array of element[1]) {
        newArray.push(
          <div key={array} className="">
            <img className="" src={array} alt="Card" />
          </div>
        );
      }
    }
    return newArray;
  };

  return <div className="GiphyList-main">{result()}</div>;
}
