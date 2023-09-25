import React from 'react';
import Login from "./components/Login";
import Registro from "./components/Registro";


function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <Login />
      <Registro/>
    </div>
  );
}

export default App;