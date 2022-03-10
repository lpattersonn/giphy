import React from "react";

export default function GiphyList(props) {
  const { list } = props;
  const result = list.map((element) => {
    return (
      <div key={element.id} className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={element.images.fixed_width.url}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{element.title}</h5>
        </div>
      </div>
    );
  });
  return <div>{result}</div>;
}
