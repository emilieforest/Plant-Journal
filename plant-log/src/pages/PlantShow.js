import React, { useEffect, useState } from 'react';
import PlantModel from '../models/Plant';
import PlantShowCard from '../components/PlantShowCard';

const PlantShow = (props) => {
  const [plant, setPlant] = useState('');
  useEffect(() => {
    PlantModel.getById(props.match.params.id)
    .then((res) => {
      const {plant} = res.data
      console.log("What is this",res.data.plant);
      setPlant(<PlantShowCard plant={plant} />)
    })
  }, []);
  console.log("HELLO", plant);


  return (
    <div className="plant-show">
      {plant}
    </div>
  );
}

export default PlantShow;