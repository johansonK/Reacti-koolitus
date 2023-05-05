import React, { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";
import { useNavigate } from 'react-router-dom';

function Avaleht() {
  const [avaleht, setAvaleht] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(config.avalehtDbUrl)
      .then(response => response.json())
      .then(json => setAvaleht(json))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const updatedAvaleht = {
      sisu: inputValue
    };

    fetch(config.avalehtDbUrl, {
      method: "PUT",
      body: JSON.stringify(updatedAvaleht),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        setAvaleht(json);
        setInputValue("");
      })
      .catch(error => console.error(error));
  };

  if (avaleht === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Avaleht</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Lisa/Muuda</button>
      {avaleht.sisu && <p>{avaleht.sisu}</p>}
    </div>
  );
}

export default Avaleht;
