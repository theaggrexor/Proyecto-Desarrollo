import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function LoginForm() {
  const [email] = useState('');
  const [password] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  
  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <Router>
    <form>
      <div>
        <h1>Login</h1>
        <label>Email:</label>
        <input type="email" value={email} required />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} required/>
      </div>
      <button type="submit">Iniciar Sesión</button>
      <br></br>
      <Link to="/Registro" onClick={toggleForm}>
        ¿No tienes una cuenta? Regístrate aquí.
      </Link>
    </form>
    </Router>
  );
}

export default LoginForm;

