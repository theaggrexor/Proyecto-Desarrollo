import React, { useState } from 'react';

function RegistroForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div >
      <h1>Registro</h1>
      <form>
        <div>
          <label htmlFor="nombre" >
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" >
            Correo Electrónico:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" >
            Contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" >
          Registrarse
        </button>
      </form>
    </div>
  );
  }

export default RegistroForm