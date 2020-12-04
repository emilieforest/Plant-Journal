import React, { useEffect, useState } from 'react';
import Plant from './Plant';
import PlantModel from '../models/Plant';

const PlantList = (props) => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    PlantModel.all().then((res) => {
      const {plants} = res.data
      // console.log("Pls", plants)
      const bbies = plants.map((plant, index) => {
        if (plant.is_dead == false) {
          return <Plant plant={plant} index={index} />
        }
      })
      setPlants(bbies)
    })
  },[])

  return (
    <>
    {plants}
    </>
  )
}

export default PlantList;