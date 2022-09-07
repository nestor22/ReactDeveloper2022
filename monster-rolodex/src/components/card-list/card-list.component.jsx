import { Component } from "react";
import "./card-list.style.css";
import "./card-container.style.css";
import Card from "./card.componet";
const CardList = ({ monsters } ) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
