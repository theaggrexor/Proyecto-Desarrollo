import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registro from "../components/Registro";

function LoginForm() {
  const [email] = useState("");
  const [password] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${isRegistering ? 'hidden' : ''}`}>
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={email}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value={password}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Iniciar Sesión
        </button>
        <br></br>
        <Link
          to="#"
          onClick={toggleForm}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          ¿No tienes una cuenta? Regístrate aquí.
        </Link>
      </form>
      {isRegistering && <Registro />}
    </div>
  );
}

export default LoginForm;
