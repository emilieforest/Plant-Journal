import React, { useEffect, useState } from 'react';
import PlantModel from '../models/Plant';
import GraveyardCard from '../components/GraveyardCard';

const Graveyard = (props) => {
  const [plant, setPlant] = useState('');
  useEffect(() => {
    PlantModel.getById(props.match.url.split("/")[2]).then((res) => {
      console.log("ARE WE RENDERING",res.data);
      const {plant} = res.data
    setPlant(<GraveyardCard  plant={plant} />)
    })
  }, []);


  return (
    <div className="container">
      <h1>Growing in Peace</h1>
      {plant}
    </div>
  );
}

export default Graveyard;