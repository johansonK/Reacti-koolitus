import React, { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";
import { useNavigate } from 'react-router-dom';

function HaldaAvaleht() {
  const [sisu, setSisu] = useState('');

  useEffect(() => {
    fetch(config.avalehtDbUrl)
      .then(response => response.json())
      .then(data => setSisu(data.sisu || ''));
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(config.avalehtDbUrl, {
      method: "PUT",
      body: JSON.stringify({ sisu })
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""><h1>Muuda avalehte</h1></label>
      <input type="text" value={sisu} onChange={(e) => setSisu(e.target.value)} />
      <button type="submit">Lisa sisu</button>
    </form>
  );
}

export default HaldaAvaleht;
