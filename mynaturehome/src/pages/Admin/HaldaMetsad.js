import React, { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";
import { useNavigate } from 'react-router-dom';

function HaldaMetsad() {
  const [sisu, setSisu] = useState('');
  const [sisu2, setSisu2] = useState('');

  useEffect(() => {
    fetch(config.metsadDbUrl)
      .then(response => response.json())
      .then(data => setSisu(data.sisu || ''));
  }, []);


  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(config.metsadDbUrl, {
      method: "PUT",
      body: JSON.stringify({ sisu })
    }).then(() => {
      navigate('/metsad');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""><h1>Muuda metsasid</h1></label>   
      <textarea name="lynk" className="tekst" cols="100" rows="20" value={sisu} onChange={(e) => setSisu(e.target.value)} ></textarea>
      <textarea name="lynk" className="tekst" cols="100" rows="20" value={sisu2} onChange={(e) => setSisu2(e.target.value)} ></textarea>
      <button type="submit">Lisa sisu</button>
    </form>
  );
}

export default HaldaMetsad;
