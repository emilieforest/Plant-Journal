import React from 'react';
import PlantModel from '../models/Plant';

class PlantEdit extends React.Component {
  state = {
    sci_name: '',
    nickname: '',
    description: '',
    sun: '',
    water: '',
    is_dead: false
  }

  componentDidMount() {
    const plantId = this.props.match.params.id;
    plantModel.getOne(plantId)
    .then((data) => {
      this.setState({
        sci_name: data.plant.sci_name,
        ninckname: data.plant.nickname,
        description: data.plant.description,
        sun: data.plant.sun,
        water: data.plant.water,
        is_dead: data.plant.is_dead
      })
    })
  }

  handleInputChange = (event) => {
    if (event.target.name === 'is_dead') {
      this.setState((prevState) => {
        return {is_dead: !prevState.is_dead};
      });
    } else {
      this.setState({ [event.target.name]: event.target.value});
    }
  }

  formSubmit = (event) => {
    event.preventDefault() ;
    const plantId = this.props.match.params.id;
    plantModel.update(plantId, this.state)
    .then((data) => {
      console.log("updated Plant:", data);
      this.props.history.push(`/plants/${plantId}`)
    })
  }

  render() {
    console.log("help", this.props);
    return (
      <div>
        <h2>Edit Plant</h2>
        <form onSubmit={this.formSubmit}>
          <label htmlFor="sci_name">Scientific Name</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.sci_name}
            type="text"
            name="sci_name"/>
          <label htmlFor="nickname">Nickname</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.nickname}
            type="text"
            name="nickname"/>
          <label htmlFor="description">Description</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.description}
            type="text"
            name="description"/>
          <label htmlFor="sun">Sun</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.sun}
            type="number"
            name="sun"/>
          <label htmlFor="water">Water</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.water}
            type="number"
            name="water"/>
        </form>
      </div>
    )
  }
}

export default PlantEdit;