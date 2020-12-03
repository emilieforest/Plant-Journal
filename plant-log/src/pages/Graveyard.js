// import React, { useEffect, useState } from 'react';
// import PlantModel from '../models/Plant';
// import GraveyardCard from '../components/GraveyardCard';


// const Graveyard = (props) => {
//   const [plant, setPlant] = useState([]);
//   useEffect(() => {
//     PlantModel.graveyard().then((res) => {
//       console.log("ARE WE RENDERING",res.data.plant);
//       const plant = res.data.plant
//       let plants = plant.map((plant, index) => {
//         <GraveyardCard  plant={plant} index={index} />
//       })
//       setPlant(plants)
//     })
//   }, []);

//   return (
//     <div className="container">
//       <h1>Growing in Peace</h1>
//       {plant}
//     </div>
//   );
// }

// export default Graveyard;

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