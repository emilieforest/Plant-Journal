import Axios from "axios";
const endPoint = `http://localhost:4000/plants`;

class PlantModel {
  static all() {
    return Axios.get(endPoint)
  }

  static getById(id) {
    return Axios.get(`http://localhost:4000/plants/${id}`)
  }
}

export default PlantModel;