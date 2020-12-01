import React from 'react';

const Plant = (props) => {
  <div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">{props.plant.sci_name}</h5>
        <h5 className="card-title">{props.plant.nickname}</h5>
        <p className="card-text">Description: {props.plant.description}</p>
        <p className="card-text">{props.plant.sun}</p>
        <p className="card-text">{props.plant.water}</p>
        <p className="card-text">{props.plant.is_dead}</p>
      </div>
    </div>
  </div>
}

export default Plant;