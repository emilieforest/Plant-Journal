import React from 'react';
import PlantModel from '../models/Plant';

class NewPlant extends React.Component {
  state = {
    sci_name: '',
    nickname: '',
    description: '',
    sun: '',
    water: '',
    is_dead: false
  };

  handleInputChange = (event) => {
    if (event.target.name === 'completed') {
      this.setState((prevState) => {
        return { completed: !prevState.completed };
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    
    PlantModel.create(this.state)
      .then((data) => {
        this.props.history.push('/plants');
      });
  }

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <h2>Add a New Plant</h2>
        <form onSubmit={this.handleFormSubmit}>
          
          <div className="formGroup">
            <label
              className="formGroupLabel" 
              htmlFor="sci-name"
            >
              Scientific Name
            </label>
            <input 
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.sci_name}
              type="text" 
              name="sci_name" 
            />
          </div>
          <div className="formGroup">
            <label
              className="formGroupLabel" 
              htmlFor="nickname"
            >
              Nickname
            </label>
            <input 
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.nickname}
              type="text" 
              name="nickname" 
            />
          </div>
          <div className="formGroup">
            <label
              className="formGroupLabel" 
              htmlFor="coverArtUrl"
            >
              Description
            </label>
            <input 
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.description}
              type="text" 
              name="description"
            />
          </div>
          <div className="formGroup">
            <label
              className="formGroupLabel" 
              htmlFor="coverArtUrl"
            >
              Sun
            </label>
            <input 
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.sun}
              type="number" 
              name="sun"
              min="0"
              max="5"
            />
          </div>
          <div className="formGroup">
            <label
              className="formGroupLabel" 
              htmlFor="coverArtUrl"
            >
              Water
            </label>
            <input 
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.water}
              type="number" 
              name="water"
              min="0"
              max="5"
            />
          </div>
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

          <input type="submit" value="Add New Plant"/>
        </form>
      </div>
    );
  }
}

export default NewPlant;