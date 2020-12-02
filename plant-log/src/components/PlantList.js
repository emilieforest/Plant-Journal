import React, { useEffect, useState } from 'react';
import Plant from './Plant';
import PlantModel from '../models/Plant';

const PlantList = (props) => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    PlantModel.all().then((res) => {
      const {plants} = res.data
      console.log("Pls", plants)
      const bbies = plants.map((plant, index) => {
        return <Plant key={index} plant={plant} />
      })
      setPlants(bbies)
    })
  },[])

  const plantsArr = props.plantsList.map((plantObj) => (
    <Plant key={plantObj.id} plant={plantObj} />
  ));
  return (
    <>
    {plants}
    </>
  )
}

export default PlantList;