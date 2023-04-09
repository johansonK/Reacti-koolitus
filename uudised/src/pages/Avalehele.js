import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


function Avalehele() {

  const [postitused, uuendaPostitused] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then ( res => res.json())
    .then (data => uuendaPostitused(data))
  }, []);


  return (
    <div>
       <div> See on avaleht, nahtav localhost:3001 aadressil </div>
       <img src="https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png" alt="kohalikud uudised" />
      {postitused.map(element => 
        <div>
          <div><i>{element.userId}</i></div>
          <div><u>{element.id}</u></div>
          <div><b>{element.title}</b></div>
          <div>{element.body}</div>
          <Link to={"kasutaja-postitus/" + element.userId}>
          <button>Koik kasutaja postitused</button>
          </Link>
          <Link to={"vaata-postitus/" + element.Id}>
          <button>Vaata postitust</button>
          </Link>
        </div> )}
    </div>
  )
}

export default Avalehele