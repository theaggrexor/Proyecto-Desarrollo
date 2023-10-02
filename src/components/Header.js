import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Cart } from "./Cart.jsx";
import { Filters } from "./Filters";

export default function NavBar() {
  let Links = [];

  let [open, setOpen] = useState(false);
  let [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="fixed">
      <div className="md:flex items-center justify-between px-5">
        <div className="cursor-pointer flex items-center">
          <Link to="/">
            <img
              className="h-10"
              src="https://th.bing.com/th/id/OIP.9nB7zDTSjd36vcaisOYNlQHaFI?w=255&h=180&c=7&r=0&o=5&pid=1.7"
              alt="Logo FashionCode"
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div className="text-center md:w-auto w-full">
          <h1 className="text-3xl font-bold text-indigo-600 mx-auto ml-auto lg:ml-0">
            FashionCode
          </h1>
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
                className="text-gray-800 hover:text-indigo-600 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-5 md:text-center md:mr-4 md:pr-4 md:text-sm text-xl md:my-0 my-7">
            <button
              onClick={() => setDropdownVisible(!dropdownVisible)}
              className="text-gray-800 hover:text-indigo-600 duration-500"
            >
              {dropdownVisible ? "Cerrar" : "INICIAR SESIÓN"}
            </button>
            {dropdownVisible && (
              <div className="bg-white border shadow-md absolute top-full left-0 mt-2 py-2 px-4">
                <Login />
              </div>
            )}
          </li>
          <li className="md:ml-5 md:text-center md:mr-4 md:pr-4 md:text-sm text-xl md:my-0 my-7">
            <Cart />
          </li>
        </ul>
      </div>
      <div className="text-center">
        <Filters />
      </div>
    </div>
  );
}
