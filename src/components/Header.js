import { useState } from "react";
import { useId } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  let Links = [];

  let [open, setOpen] = useState(false);
  let [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 px-4">
        <div className="cursor-pointer flex items-center">
          <Link to="/">
            <img className="h-10" src="/" alt="Logo" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className="md:ml-5 md:text-center md:mr-4 md:pr-4 md:text-sm text-xl md:my-0 my-7"
            >
              <Link
                to={link.link}
                onClick={() => setOpen(!open)}
                className="text-black hover:text-gray-500 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-5 md:text-center md:mr-4 md:pr-4 md:text-sm text-xl md:my-0 my-7">
            <button
              onClick={() => setDropdownVisible(!dropdownVisible)}
              className="text-black hover:text-gray-500 duration-500"
            >
              {dropdownVisible ? "Cerrar" : "INICIAR SESIÓN"}
            </button>
            {dropdownVisible && (
              <div className="bg-white border shadow-md absolute top-full left-0 mt-2 py-2 px-4">
                <Login />
              </div>
            )}
          </li>
          <a href="/tu-enlace">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ fontSize: "24px"}}
            />
          </a>
        </ul>
      </div>
    </div>
  );
}
