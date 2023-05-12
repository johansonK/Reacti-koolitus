import React, { useEffect, useState } from 'react';
import config from "../../data/config.json";

function Veekogud() {
  const [sisu, setSisu] = useState('');
  const [sisu2, setSisu2] = useState('');
  const [sisu3, setSisu3] = useState('');
  const [sisu4, setSisu4] = useState('');
  const [sisu5, setSisu5] = useState('');

  useEffect(() => {
    fetch(config.veekogudDbUrl)
    .then(response => response.json())
    .then(json => {
      setSisu(json.sisu || '');
      setSisu2(json.sisu2 || '');
      setSisu3(json.sisu3 || '');
      setSisu4(json.sisu4 || '');
      setSisu5(json.sisu5 || '');
    })
}, []);

  return (
    <div className="pohitekst">
      <h1>Veekogud</h1>
      <h2>{sisu}</h2>
      <p>{sisu2}</p>
      <h3>{sisu3}</h3>
      <p>{sisu4}</p>
      <p>{sisu5}</p>
    </div>
  );
}

export default Veekogud;
