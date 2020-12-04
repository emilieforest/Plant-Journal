import React, { useEffect, useState } from 'react';
import PlantModel from '../models/Plant';
import PlantShowCard from '../components/PlantShowCard';

const PlantShow = (props) => {
  const [plant, setPlant] = useState('');
  useEffect(() => {
    PlantModel.getById(props.match.params.id)
    .then((res) => {
      const {plant} = res.data
      setPlant(<PlantShowCard plant={plant} />)
    })
  }, []);


  return (
    <div className="container">
      {plant}
    </div>
  );
}

export default PlantShow;