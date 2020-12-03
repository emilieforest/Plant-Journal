import Axios from "axios";
const url = `http://localhost:4000/plants`;

class PlantModel {
  static all() {
    return Axios.get(url)
  }

  static create(newPlant) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newPlant)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error in fetching date in plantmodel.create', err);
      return {plant: {}}
    })
  }

  static getById(id) {
    let request = Axios.get(`${url}/${id}`)
      return request
    
  }

  static update(plantId, updatedPlant) {
    return fetch(`${url}/${plantId}/edit`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPlant)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in plantmodel.update', err);
      return { plant: {} }
    })
  }

  static delete(plantId) {
    return fetch(`${url}/${plantId}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error fetching data in plantmodel.delete", err);
      return { plant: {} }
    })
  }

  static graveyard() {
    return Axios.get('http://localhost:4000/plants/graveyard')
  }
}

export default PlantModel;