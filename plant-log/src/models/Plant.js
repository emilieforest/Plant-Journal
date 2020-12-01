import Axios from "axios";
const endPoint = `http://localhost:4000/plants`;

class PlantModel {
  static all() {
    return Axios.get(endPoint)
  }
}

export default PlantModel;