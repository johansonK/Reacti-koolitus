import { useState } from 'react';
import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.9137, 25.6641], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4219, 24.7939], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4272, 24.7231], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3779, 26.7308], zoom: 13})}>Tasku</button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;