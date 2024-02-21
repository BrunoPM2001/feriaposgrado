import { NavLink } from "react-router-dom";
import upgs from "../data/upgs.json";

export default function Upg() {
  const goToListaProgramas = (grado) => {
    localStorage.setItem("grado", grado);
  };

  const upg = upgs.find((upg) => upg.id == localStorage.getItem("upg_id"));

  return (
    <div className="flex max-md:flex-col h-screen text-white text-lg text-center">
      {upg.maestrias.length != 0 && (
        <NavLink
          onClick={(e) => goToListaProgramas("M")}
          to="/listaProgramas"
          className="flex flex-1 bg-gray-700 hover:bg-gray-800 transition-all items-center justify-center cursor-pointer"
        >
          Maestrías
        </NavLink>
      )}
      {upg.doctorados.length != 0 && (
        <NavLink
          onClick={(e) => goToListaProgramas("D")}
          to="/listaProgramas"
          className="flex flex-1 bg-gray-700 hover:bg-gray-800 transition-all items-center justify-center cursor-pointer"
        >
          Doctorados
        </NavLink>
      )}
    </div>
  );
}
