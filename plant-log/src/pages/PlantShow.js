import React, { useEffect, useState } from 'react';
import PlantModel from '../models/Plant';
import Plant from '../components/Plant';

const PlantShow = (props) => {
  const [plant, setPlant] = useState('');
  useEffect(() => {
    PlantModel.getById(props.match.url.split("/")[2]).then((res) => {
      console.log(res.data);
      const {plant} = res.data
    setPlant(<Plant plant={plant} />)
    })
  }, []);


  return (
    <div className="plant-show">
      {plant}
    </div>
  );
}

export default PlantShow;
