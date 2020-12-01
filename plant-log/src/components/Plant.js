import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function Plant(props) {
  return (
    <li className="plantCard">
      <Link to={`/plants/${props.plant._id}`} className="plantCardLink">
        <h5 className="">Scientific Name: {props.plant.sci_name}</h5>
        <h5 className="">Nickmane: {props.plant.nickname}</h5>
        <p className="">Description: {props.plant.description}</p>
        <p className="">Sun Needs: {props.plant.sun}</p>
        <p className="">Water Needs: {props.plant.water}</p>
        <p className="">{props.plant.is_dead}</p>
      </Link>
      <div className="plantButtons">
        <Link to={`/plants/${props.plant._id}/edit`}
        className="plantButton">Edit
        </Link>
        <button >G.i.P</button>
        </div>
    </li>
  )
}

export default Plant;