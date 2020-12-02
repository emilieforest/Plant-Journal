import React from 'react';
import { Link } from 'react-router-dom';

const PlantShowCard = (props) => {
  console.log("WHAT IS", props.plant.sci_name);
  return (
    <div className="container">
      <h5 className="card-title">Scientific Name: {props.plant.sci_name}</h5>
      <h5 className="">Nickmane: {props.plant.nickname}</h5>
      <p className="card-text">Description: {props.plant.description}</p>
      <div className="needs">
        Sun Needs: {props.plant.sun}
        Water Needs: {props.plant.water}
      </div>
        <p className="">{props.plant.is_dead}</p>
      <div className="plantButtons">
        <Link to={`/plants/${props.plant._id}/edit`}
      className="plantButton">Edit
      </Link>
      <Link to={`/plants/graveyard`}>G.i.P</Link>
    </div>
    </div>
  );
}

export default PlantShowCard;
