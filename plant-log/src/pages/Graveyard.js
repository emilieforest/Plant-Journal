import React, { useEffect, useState } from 'react';
import PlantModel from '../models/Plant';
import PlantShowCard from '../components/PlantShowCard';

const Graveyard = (props) => {
  const [plant, setPlant] = useState('');
  useEffect(() => {
    PlantModel.getById(props.match.url.split("/")[2]).then((res) => {
      console.log("ARE WE RENDERING", res.data);
      const {plant} = res.data
    setPlant(<PlantShowCard plant={plant} />)
    })
  }, []);


  return (
    <div className="plant-show">
      {plant}
    </div>
  );
}

export default Graveyard;