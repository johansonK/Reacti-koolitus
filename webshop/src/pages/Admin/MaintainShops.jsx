import React, {useRef, useState, useEffect} from 'react'
import config from "../../data/config.json"

function MaintainShops() {

  const [shops, setShops] = useState([]);
  const [dbShop, setDbShop] = useState([]);
  const nameRef = useRef()
  const openTimeRef = useRef()
  const latitudeRef = useRef()
  const longitudeRef = useRef()

  
  
  useEffect(() => {
    fetch(config.shopsDbUrl)
    .then (res => res.json())
    .then (json => {      
      setShops(json || []);
      setDbShop(json || []);
    })

  }, []);



  const addShop = () => {
    dbShop.push({
      "name": nameRef.current.value,
      "openTime": openTimeRef.current.value,
      "latitude": latitudeRef.current.value,
      "longitude": longitudeRef.current.value
    })

    nameRef.current.value="";
    openTimeRef.current.value="";
    latitudeRef.current.value="";
    longitudeRef.current.value="";
    fetch(config.shopsDbUrl, {"method" : "PUT", "body": JSON.stringify(dbShop)})
    //.then(res => res.json())
    //.then(() => navigate("/admin/maintain-product"))
  
  }

  const removeShop = (index) => {
    shops.splice(index, 1);
    setShops(shops.slice());
    fetch(config.shopsDbUrl, {
      "method": "PUT",
      "body": JSON.stringify(shops)
    })
  }
  //KUVADA K6IKI POODE
  //LISADA UUT POODI L2BI VORMI
  //KUSTUTADA YHTE POODI
  //shops.push({"name": nameRef.current.value, "openTime": openTime.current.value, ...});
  //neli labelid

  //ei osanud siduda olemas olevate poodidega
  //millegip2rast v6tab aega, et ilmuks lehele uus pood
  //---fetch muudab koodi asynkroonseks, mis ei ole eriti ilus ja tekitab ebavajalikke pause, 
  //---seep2rast vajalikud mingid muudatused (MILLISED NEED OLI)
  //ei oska suunata poodide lehele

  //joogipoes probleem untracked firebase asjad, ka config, ei saa teha npm run buildi

  return (
    <div>
      <label>Name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Open time</label> <br />
      <input ref={openTimeRef} type="text" /> <br />
      <label >Latitude</label> <br />
      <input ref={latitudeRef}  type="text" /> <br />
      <label>Longitude</label> <br />
      <input ref={longitudeRef} type="text" /> <br /> <br />
      <button onClick={addShop}>Add</button> <br /> <br />

      {shops.map((shop, index) => 
        <div key={index}>
          <div>{shop.name}</div>
          <div>{shop.openTime}</div>
          <div>{shop.latitude}</div>
          <div>{shop.longitude}</div> <br />
          <button onClick={() => removeShop(index)}>Remove</button> <br /> <br />
          </div> )}

    </div>
  )
}

export default MaintainShops