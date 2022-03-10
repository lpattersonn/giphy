import React from "react";

export default function GiphyList(props) {
  const { list } = props;
  const result = list.map((element) => {
    return (
      <article key={element.id}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={element.images.fixed_width.url}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
          </div>
        </div>
      </article>
    );
  });
  return <div>{result}</div>;
}
