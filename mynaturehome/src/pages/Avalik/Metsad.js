import React, { useEffect, useState } from 'react';
import config from "../../data/config.json";

function Metsad() {
    const [sisud, setSisud] = useState([])
  //const [sisu, setSisu] = useState('');
  //const [sisu2, setSisu2] = useState('');
  //const [sisu3, setSisu3] = useState('');
  //const [sisu4, setSisu4] = useState('');
  //const [sisu5, setSisu5] = useState('');

  useEffect(() => {
    fetch(config.metsadDbUrl)
      .then(response => response.json())
      .then(data => {
        setSisud((data));
      })
  }, []);

  return (
    <div>
      <h1>Metsad</h1>
      {sisud.map((sisuData, index) => (
       <div key={index}>
         <p>{sisuData.sisu}</p>
         <p >{sisuData.sisu2}</p>
         <p >{sisuData.sisu3}</p>
         <p >{sisuData.sisu4}</p>
         <p >{sisuData.sisu5}</p>
       </div>

      ))}

    </div>
  );
}

export default Metsad;
