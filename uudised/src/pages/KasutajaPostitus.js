import React from 'react'
import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";


function KasutajaPostitus() {
const {kasutajaId} = useParams ();      
//kasutajaId peab olema t2pselt samamoodi kirjutatud nagu app.js sees "kasutaja-postitus/:kasutajaId"

const [postitused, uuendaPostitused] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then ( res => res.json())
    .then (data => {
       const result = data.filter(element => element.userId === Number (kasutajaId));
        uuendaPostitused(result);
    })
  }, [kasutajaId]);

  //v6i useEffect(() => {
    //fetch("https://jsonplaceholder.typicode.com/posts")
    //.then ( res => res.json())
    //.then (data => uuendaPostitused (data.filter(element => element.userId === Number (kasutajaId))))
    //}, []);

  return (
    <div>
        {postitused.map(element => 
        <div>
          <div><i>{element.userId}</i></div>
          <div><u>{element.id}</u></div>
          <div><b>{element.title}</b></div>
          <div>{element.body}</div>
          {/*<Link to={"kasutaja-postitus/" + element.userId}>
          <button>Koik kasutaja postitused</button>
          </Link>*/}
        </div> )}
    </div>
  )
}

export default KasutajaPostitus