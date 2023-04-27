import React from 'react'

function NavigationBar() {
  return (    
        <nav className="sidebar">
          <ul>
            <li><a href="/">Avaleht</a></li>
            <li><a href="/fauna">Fauna</a></li>
            <li><a href="/floora">Floora</a></li>
            <li><a href="/metsad">Metsad</a></li>
            <li><a href="/veekogud">Veekogud</a></li>
            <li><a href="/halda-avaleht">Muuda avalehte</a></li>
           <li><a href="/halda-fauna">Muuda faunat</a></li>
            <li><a href="/halda-floora">Muuda floorat</a></li>
            <li><a href="/halda-metsad">Muuda metsi</a></li>
            <li><a href="/halda-veekogud">Muuda veekogusid</a></li>         
            
          </ul>        
      </nav>
   
  )
}

export default NavigationBar