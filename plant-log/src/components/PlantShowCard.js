import React from 'react';
import { Link } from 'react-router-dom';
import PlantModel from '../models/Plant';
import { withRouter } from 'react-router-dom';

const PlantShowCard = (props) => {
  console.log("this is plant show card", props.plant)
  if (!props.plant) {
    return <h1>Loading...</h1>
  }

  const handleDelete = ()  => {
    PlantModel.delete(props.plant._id);
    props.history.push('/plants')
  }

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
      ><button className="plantButton">Edit</button>
      </Link>
        <button className="plantButton" onClick={handleDelete}>Delete</button>
    </div>
    </div>
  );
}

export default withRouter(PlantShowCard);
