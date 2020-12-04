import React from 'react';
import { Link } from 'react-router-dom';

const PlantShowCard = (props) => {
  console.log("WHAT R U", props.plant);
  return (
    <div className="row row-cols-1 row-cols-md-2">
      <div className="col mb-4">
        <div className="card">
          <h5 className="card-title">Scientific Name: {props.plant.sci_name}</h5>
          <h5 className="">Nickmane: {props.plant.nickname}</h5>
          <p className="card-text">Description: {props.plant.description}</p>
          <div className="card-text">
            Sun Needs: {props.plant.sun}
            Water Needs: {props.plant.water}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantShowCard;