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

  // componentDidMount() {
  //   const plantId = this.props.match.params.id;
  //   PlantModel.getById(plantId)
  //     .then((data) => {
  //       console.log("What've got here", data.data.plant);
  //       // let data = data.data.plant
  //     this.setState({
  //       sci_name: data.sci_name,
  //       ninckname: data.nickname,
  //       description: data.description,
  //       sun: data.sun,
  //       water: data.water,
  //       is_dead: data.is_dead
  //     })
  //   })
  // }

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
    PlantModel.update(plantId, this.state)
    .then((data) => {
      console.log("updated Plant:", data);
      // this.props.history.push(`/plants/${plantId}`) 
      this.props.history.push(`/plants`)
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
            <div className="formGroup">
            <label
              className="formGroupLabel" 
              htmlFor="completed"
            >
              Is your plant dead?
            </label>
            <input 
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.is_dead}
              type="checkbox" 
              id="completed" 
              name="is-dead"
            />
          </div>
          <button onClick={this.formSubmit}>Update</button>
        </form>
      </div>
    )
  }
}

export default PlantEdit;