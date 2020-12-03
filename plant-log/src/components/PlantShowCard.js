import React from 'react';
import { Link } from 'react-router-dom';

const PlantShowCard = (props) => {
  // addToGrave() {

  // }
  return (
    <div className="">
      <h5>Scientific Name: {props.plant.sci_name}</h5>
      <h5>Nickmane: {props.plant.nickname}</h5>
      <p>Description: {props.plant.description}</p>
      <div className="needs">
        Sun Needs: {props.plant.sun}
        Water Needs: {props.plant.water}
      </div>
        <p className="">{props.plant.is_dead}</p>
      <div className="plantButtons">
        <Link to={`/plants/${props.plant._id}/edit`}
      className="plantButton"><button>Edit</button>
      </Link>
        <button >G.i.P</button>
    </div>
    </div>
  );
}

export default PlantShowCard;
