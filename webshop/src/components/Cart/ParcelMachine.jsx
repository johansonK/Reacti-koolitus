import React from 'react'
import { useState, useEffect} from 'react';

function ParcelMachine() {

 const [parcelMachines, setParcelMachines] = useState([]);

 useEffect(() => {
  fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())//res--> response, json l6pp peab olema sama
      .then(json => setParcelMachines(json))// n2itab kuhu tulemus l2heb st json l2heb setParcelMachinesisse
    }, []);
    // eelnev on v6tmine, kui method ja body siis on saatmine
    

  return (
    <select>{parcelMachines
        .filter((pm) => pm.NAME !== "1. eelistus Omnivas")
        .filter((pm) => pm.A0_NAME === "EE")
        // .sort((a,b) => a.ZIP.localeCompare(b.ZIP)
        .map((pm) => (
            <option key={pm.NAME}>{pm.NAME}</option> 
        ))}
    </select>          
  )
}
//* radio button && dpdsmart uus Select*/
export default ParcelMachine