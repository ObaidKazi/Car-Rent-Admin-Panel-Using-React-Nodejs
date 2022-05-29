import './App.css';
import React, { useState } from 'react';
import Dashboard from './route/dashboard/dashboard';
import { LoginContext } from './context/loginContext';
import Login from './route/login/login';
function App() {
  const [token,setToken]=useState();
  return (
    //check condition for proceed to dashbaord
    <LoginContext.Provider value={{token,setToken}}>
      {token?<Dashboard key={'test'}></Dashboard>:<Login></Login>}
    </LoginContext.Provider>
    
  );
}

export default App;
