import React from 'react';
import axios from 'axios';
import PlantList from '../components/PlantList';

const endPoint = `https://super-crud.herokuapp.com/todos`;

class PlantModel extends React.Component {
  state = {
    plants: [],
    loading: true,
  }


    static all = () => {
      let request = axios.get(endPoint);
      return request;
    };

  render() {
    return (
      <div>
        please
        <PlantList />
      </div>
    )
  }
};

export default PlantModel;