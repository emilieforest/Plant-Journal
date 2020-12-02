import React from 'react';
import { Link } from 'react-router-dom';

const PlantShowCard = (props) => {
  return (
    <div className="container">
      <h5 className="card-title">Scientific Name: {props.plant.sci_name}</h5>
      <h5 className="">Nickmane: {props.plant.nickname}</h5>
      <p className="card-text">Description: {props.plant.description}</p>
      <div className="needs">
        Sun Needs: {props.plant.sun}
        Water Needs: {props.plant.water}
      </div>
    </div>
  );
}

export default PlantShowCard;