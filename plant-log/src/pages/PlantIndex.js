import React from 'react';
import axios from 'axios';
import PlantList from '../components/PlantList'

class PlantIndex extends React.Component  {
  state = {
    plants: [],
    loading: true,
  }

  
  render() {
    return (
      <div>
        <h1>Plant Profiles</h1>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <PlantList plantsList={this.state.plants} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlantIndex;