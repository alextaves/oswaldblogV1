import React from "react";

function CardItem(props) {
  return (
    <div className="cardItem">
      <img src={props.card.image} alt={props.card.alt} />
      <h3>{props.card.title}</h3>
      <p>{props.card.blurb}</p>
    </div>
  );
}

export default CardItem;
