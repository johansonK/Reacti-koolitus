import React, { useEffect, useState } from 'react';
import config from "../../data/config.json";

function Veekogud() {
  const [sisu, setSisu] = useState('');

  useEffect(() => {
    fetch(config.veekogudDbUrl)
      .then(response => response.json())
      .then(json => setSisu(json.sisu || ''));
  }, []);

  return (
    <div>
      <h1>Veekogud</h1>
      <p>{sisu}</p>
    </div>
  );
}

export default Veekogud;
