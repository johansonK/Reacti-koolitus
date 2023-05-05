import React, { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";
import { useNavigate } from 'react-router-dom';

function HaldaAvaleht() {
  const [dbAvaleht, setDbAvaleht] = useState(null);
  const sisuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(config.avalehtDbUrl)
      .then(response => response.json())
      .then(json => setDbAvaleht(json))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = () => {
    const updatedDbAvaleht = {
      sisu: sisuRef.current.value
    };

    fetch(config.avalehtDbUrl, {
      method: "PUT",
      body: JSON.stringify(updatedDbAvaleht),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        setDbAvaleht(json);
        navigate("/admin/halda-avaleht");
      })
      .catch(error => console.error(error));
  };

  if (dbAvaleht === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Halda Avaleht</h1>
      <input type="text" defaultValue={dbAvaleht.sisu} ref={sisuRef} />
      <button onClick={handleSubmit}>Salvesta</button>
    </div>
 

  );
}

export default HaldaAvaleht;
