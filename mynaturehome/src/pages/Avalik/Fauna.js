import React, { useEffect, useState } from 'react';
import config from "../../data/config.json";

function Fauna() {
  const [sisu, setSisu] = useState('');
  const [sisu2, setSisu2] = useState('');
  const [sisu3, setSisu3] = useState('');
  const [sisu4, setSisu4] = useState('');
  const [sisu5, setSisu5] = useState('');

  useEffect(() => {
    fetch(config.faunaDbUrl)
      .then(response => response.json())
      .then(data => {
        setSisu(data.sisu || '');
        setSisu2(data.sisu2 || '');
        setSisu3(data.sisu3 || '');
        setSisu4(data.sisu4 || '');
        setSisu5(data.sisu5 || '');
      })
  }, []);

  return (
    <div>
      <h1>Fauna</h1>
      <p>{sisu}</p>
      <p>{sisu2}</p>
      <p>{sisu3}</p>
      <p>{sisu4}</p>
      <p>{sisu5}</p>

    </div>
  );
}

export default Fauna;
