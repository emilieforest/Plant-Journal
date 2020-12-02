import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function Plant(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3">
      <li className="plantCard">
        <Link to={`/plants/${props.plant._id}`} className="plantCardLink">
          <h5 className="card-title">Scientific Name: {props.plant.sci_name}</h5>
          <h5 className="">Nickmane: {props.plant.nickname}</h5>
          <p className="card-text">Description: {props.plant.description}</p>
          <div className="needs">
          Sun Needs: {props.plant.sun}
          Water Needs: {props.plant.water}
          </div>
          <p className="">{props.plant.is_dead}</p>
        </Link>
        <div className="plantButtons">
          <Link to={`/plants/${props.plant._id}/edit`}
          className="plantButton">Edit
          </Link>
          <Link to={`/plants/graveyard`}>G.i.P</Link>
        </div>
      </li>
    </div>
  )
}

export default Plant;