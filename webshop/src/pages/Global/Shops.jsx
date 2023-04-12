import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Map from '../../components/Map';
import config from "../../data/config.json"

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [shops, setShops] = useState ([])

  useEffect(() => {
    fetch(config.shopsDbUrl)
    .then (res => res.json())
    .then (json => {      
      setShops(json || []);      
    })
  }, []);

  return (<div>
    <Button onClick={() => setCoordinates({lngLat: [58.9137, 25.6641], zoom: 7})}>Kõik poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button>
    {/*<Button onClick={() => setCoordinates({lngLat: [59.4219, 24.7939], zoom: 13})}>Ülemiste</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4272, 24.7231], zoom: 13})}>Kristiine</Button>
  <Button onClick={() => setCoordinates({lngLat: [58.3779, 26.7308], zoom: 13})}>Tasku</Button>*/}

    {shops.map(element =>
        <Button onClick={() => setCoordinates({lngLat: [element.longitude, element.latitude], zoom: 13})}>{element.name}</Button>
      
      )}

    <Map mapCoordinaates={coordinaates}  />
  </div>)
}
 
export default Shops;