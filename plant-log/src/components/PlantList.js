import React from 'react';
import Plant from './Plant';

const PlantList = (props) => {
  const plantsArr = props.plantsList.map((plantObj) => (
    <Plant key={plantObj.id} plant={plantObj} />
  ));
  return (
    <>
    {plantsArr}
    </>
  )
}

export default PlantList;