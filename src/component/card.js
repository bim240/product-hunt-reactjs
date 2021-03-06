import React from "react";

const Card = props => {
  return (
    <div>
      <div className="list_container">
        <div className="product_container">
          <div className="img_prodect">
            <img src={props.img}></img>
          </div>
          <div className="product_details">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <div>
              {props.tag.map(v => (
                <button className="btn tags">{v}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="popular_container">
          <button onClick={() => props.updatePopular(props.id)}>
            <div> &#9650;</div>
            <div>{props.popular}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
