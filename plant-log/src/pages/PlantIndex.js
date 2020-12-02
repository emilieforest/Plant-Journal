import React from 'react';
import PlantList from '../components/PlantList'
import PlantModel from '../models/Plant';

class PlantIndex extends React.Component  {
  state = {
    plants: [],
    loading: true,
  }

  componentDidMount() {
    PlantModel.all().then((data) => {
      console.log("Data:", data);
      this.setState({plants: data.plants});
    })
  }

  deletePlant = (id) => {
    PlantModel.delete(id).then((data) => {
      this.setState((prevState) => {
        const updatedPlants = prevState.plants.filter((plant) => plant._id !== id);
        return {plants: updatedPlants}
      });
    });
  }
  
  render() {
    return (
      <div className="container">
        <h1>Plant Profiles</h1>
          <div className="container">
            <PlantList 
            plantsList={this.state.plants}
            deletePlant={this.deletePlant} />
        </div>
      </div>
    )
  }
}

export default PlantIndex;