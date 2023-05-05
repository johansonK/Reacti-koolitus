import React, { useEffect, useState } from 'react';
import config from "../../data/config.json";

function Floora() {
  const [sisu, setSisu] = useState('');

  useEffect(() => {
    fetch(config.flooraDbUrl)
      .then(response => response.json())
      .then(json => setSisu(json.sisu || ''));
  }, []);

  return (
    <div>
      <h1>Floora</h1>
      <p>{sisu}</p>
    </div>
  );
}

export default Floora;
