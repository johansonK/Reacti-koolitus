import React, { useEffect, useState } from 'react';
import config from "../../data/config.json";

function Avaleht() {
  const [sisu, setSisu] = useState('');

  useEffect(() => {
    fetch(config.avalehtDbUrl)
      .then(response => response.json())
      .then(json => setSisu(json.sisu || ''));
  }, []);

  return (
    <div>
      <h1>Avaleht</h1>
      <p>{sisu}</p>
    </div>
  );
}

export default Avaleht;
