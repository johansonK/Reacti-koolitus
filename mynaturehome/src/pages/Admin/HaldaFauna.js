import React, { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";
import { useNavigate } from 'react-router-dom';

function HaldaFauna() {
  const [sisu, setSisu] = useState('');

  useEffect(() => {
    fetch(config.faunaDbUrl)
      .then(response => response.json())
      .then(data => setSisu(data.sisu || ''));
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(config.faunaDbUrl, {
      method: "PUT",
      body: JSON.stringify({ sisu })
    }).then(() => {
      navigate('/fauna');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""><h1>Muuda fauna</h1></label>
      <input type="text" value={sisu} onChange={(e) => setSisu(e.target.value)} />
      <button type="submit">Lisa sisu</button>
    </form>
  );
}

export default HaldaFauna;
