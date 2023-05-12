import React, { useEffect, useState } from 'react';
import config from "../../data/config.json";
import { useNavigate } from 'react-router-dom';

function HaldaAvaleht() {
  const [sisu, setSisu] = useState('');
  const [sisu2, setSisu2] = useState('');
  const [sisu3, setSisu3] = useState('');
  const [sisu4, setSisu4] = useState('');
  const [sisu5, setSisu5] = useState('');

  useEffect(() => {
    fetch(config.avalehtDbUrl)
    .then(response => response.json())
    .then(data => {
      setSisu(data.sisu || '');
      setSisu2(data.sisu2 || '');
      setSisu3(data.sisu3 || '');
      setSisu4(data.sisu4 || '');
       setSisu5(data.sisu5 || '');
    })
    }, []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch(config.avalehtDbUrl, {
      method: "PUT",
      body: JSON.stringify({ sisu, sisu2, sisu3, sisu4, sisu5 })
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""><h1>Muuda avalehte</h1></label>   
      <textarea name="lynk" className="tekst" cols="100" rows="10" value={sisu} onChange={(e) => setSisu(e.target.value)} ></textarea>
      <textarea name="lynk" className="tekst" cols="100" rows="3" value={sisu2} onChange={(e) => setSisu2(e.target.value)} ></textarea>
      <textarea name="lynk" className="tekst" cols="100" rows="3" value={sisu3} onChange={(e) => setSisu3(e.target.value)} ></textarea>
      <textarea name="lynk" className="tekst" cols="100" rows="3" value={sisu4} onChange={(e) => setSisu4(e.target.value)} ></textarea>
      <textarea name="lynk" className="tekst" cols="100" rows="3" value={sisu5} onChange={(e) => setSisu5(e.target.value)} ></textarea>
      <button type="submit">Lisa sisu</button>
    </form>
  );
}

export default HaldaAvaleht;
