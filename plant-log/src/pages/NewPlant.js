import React from 'react';
import { Redirect } from 'react-router-dom';
import PlantModel from '../models/Plant';
import {withRouter} from 'react-router-dom';

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
    if (event.target.name === 'is_dead') {
      this.setState((prevState) => {
        return { is_dead: !prevState.is_dead };
      });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    PlantModel.create(this.state)
    .then(res => res.status === 200 ? window.location.href = '/' : null)
    // .then((data) => {
    //   // console.log(data);
    //   this.props.history.push(`/plants`)
    // })
  }

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <h2>Add a New Plant</h2>
        <form onSubmit={this.formSubmit}>
          
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
              htmlFor="is_dead"
            >
              Is your plant dead?
            </label>
            <input 
              onChange={this.handleInputChange}
              className="formGroupInput"
              value={this.state.is_dead}
              type="checkbox" 
              id="is_dead" 
              name="is-dead"
            />
          </div>
          <input type="submit" value="Add New Plant" />
        </form>
      </div>
    );
  }
}

export default withRouter(NewPlant);