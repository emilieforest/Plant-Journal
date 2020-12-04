import React, { useEffect, useState } from 'react';
import Plant from '../components/Plant';
import PlantModel from '../models/Plant';

const Graveyard = (props) => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    PlantModel.all().then((res) => {
      const {plants} = res.data
      // console.log("Pls", plants)
      const bbies = plants.map((plant, index) => {
        if (plant.is_dead == true) {
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

export default Graveyard;