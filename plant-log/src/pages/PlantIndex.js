import React from 'react';
import PlantList from '../components/PlantList'

class PlantIndex extends React.Component  {
  state = {
    plants: [],
    loading: true,
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <div>
        <h1>Plant Profiles</h1>
          <div className="container">
            <PlantList plantsList={this.state.plants} />
        </div>
      </div>
    )
  }
}

export default PlantIndex;