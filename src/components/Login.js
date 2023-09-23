import React, { useState } from 'react';

function LoginForm() {
  const [email] = useState('');
  const [password] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <form >
    <div>
      <label>Email:</label>
      <input type="email" value={email} />
    </div>
    <div>
      <label>Contraseña:</label>
      <input type="password" value={password} />
    </div>
    {isRegistering ? (
      <button type="submit">Registrarse</button>
    ) : (
      <button type="submit">Iniciar Sesión</button>
    )}
    <br></br><a type="button" onClick={() => setIsRegistering(!isRegistering)}>
      {isRegistering ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
    </a>
  </form>
  );
};

export default LoginForm;
