import React, { useEffect, useState } from 'react';
import config from "../../data/config.json";

function Metsad() {
  const [sisu, setSisu] = useState('');

  useEffect(() => {
    fetch(config.metsadDbUrl)
      .then(response => response.json())
      .then(json => setSisu(json.sisu || ''));
  }, []);

  return (
    <div>
      <h1>Metsad</h1>
      <p className="pohitekst">{sisu}</p>
    </div>
  );
}

export default Metsad;
