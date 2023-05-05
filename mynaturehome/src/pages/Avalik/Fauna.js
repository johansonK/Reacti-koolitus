import React, { useEffect, useState } from 'react';
import config from "../../data/config.json";

function Fauna() {
  const [sisu, setSisu] = useState('');

  useEffect(() => {
    fetch(config.faunaDbUrl)
      .then(response => response.json())
      .then(json => setSisu(json.sisu || ''));
  }, []);

  return (
    <div>
      <h1>Fauna</h1>
      <p>{sisu}</p>
    </div>
  );
}

export default Fauna;
