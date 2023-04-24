import React, { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(checkIfLoggedIn());

  function checkIfLoggedIn() {
    if (sessionStorage.getItem("token") !== null) {
      //6iges arenduses 
      //pean kontrollima ka tokeni valiidsust (kas on p2ris)
      //pean kontrollima ka aegumisaega
      return true;
    } else {
      return false;
    }
  }


  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider };