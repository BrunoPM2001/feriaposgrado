import { NavLink } from "react-router-dom";
import fondo1 from "../assets/fondo1.png";

export default function Inicio() {
  return (
    <div
      className="flex h-screen text-white text-lg text-center"
      style={{ backgroundImage: `url(${fondo1})` }}
    >
      <NavLink
        to="/upg"
        className="flex flex-1 bg-black opacity-70 hover:opacity-45 transition-all items-center justify-center cursor-pointer"
      >
        <h4>Ciencias de la Salud</h4>
      </NavLink>
      <NavLink
        to="/upg"
        className="flex flex-1 bg-black opacity-70 hover:opacity-45 transition-all items-center justify-center cursor-pointer"
      >
        <h4>Ciencias Básicas</h4>
      </NavLink>
      <NavLink
        to="/upg"
        className="flex flex-1 bg-black opacity-70 hover:opacity-45 transition-all items-center justify-center cursor-pointer"
      >
        <h4>Ingenierías</h4>
      </NavLink>
      <NavLink
        to="/upg"
        className="flex flex-1 bg-black opacity-70 hover:opacity-45 transition-all items-center justify-center cursor-pointer"
      >
        <h4>Ciencias Económicas y de la Gestión</h4>
      </NavLink>
      <NavLink
        to="/upg"
        className="flex flex-1 bg-black opacity-70 hover:opacity-45 transition-all items-center justify-center cursor-pointer"
      >
        <h4>Humanidades y Ciencias Jurídicas y Sociales</h4>
      </NavLink>
    </div>
  );
}
