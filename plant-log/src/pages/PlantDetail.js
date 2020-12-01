import React from 'react';
import PlantModel from '../models/Plant';
import Plant from '../components/Plant';

const PlantDetail = (props) => {
  state = {
    plant: {}
  }

  componendDidMount() {
    const plantId = this.props.match.params.id;

    PlantModel.getOne(plantId)
      .then((data) => {
        this.setState({ plant: data.plant });
      });
  }

  render () {
    return (
      <div>
        <h1>One Plant</h1>
        <Plant plant={this.state.plant} />
      </div>
    )
  }
}

export default PlantDetail;