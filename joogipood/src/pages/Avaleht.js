import React from 'react';
import joogidFailist from "../joogid.json";
import {Link} from "react-router-dom";

function Avaleht() {

  return (
    <div>Joogid:
    {joogidFailist.map((yksJook, index) => 
        <div key={index}> 
            {yksJook}
            <Link to={"/jook/" + index}>
            <button>Jook</button>
            </Link>
        </div>)}


    </div>
  )
}  

export default Avaleht