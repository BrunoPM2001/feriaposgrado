import { NavLink } from "react-router-dom";
import upgs from "../data/upgs.json";

export default function Upg() {
  const goToListaProgramas = (grado, programa) => {
    localStorage.setItem("grado", grado);
    localStorage.setItem("nombre_grado", programa);
  };

  const upg = upgs.find((upg) => upg.id == localStorage.getItem("upg_id"));

  return (
    <div className="flex flex-wrap max-md:flex-col h-screen text-lg">
      {upg.maestrias.length != 0 && (
        <div className="flex flex-col flex-1 p-8 bg-white hover:bg-gray-200 text-black transition-all justify-center">
          <h1 className="text-4xl font-bold text-red-800">Maestrías</h1>
          {upg.maestrias.map((programa) => {
            return (
              <NavLink
                onClick={(e) => goToListaProgramas("M", programa.nombre)}
                to="/feria/programa"
                className="cursor-pointer text-xl hover:text-red-800"
              >
                * {programa.nombre}
              </NavLink>
            );
          })}
        </div>
      )}
      {upg.doctorados.length != 0 && (
        <div className="flex flex-col flex-1 p-8 bg-red-800 hover:bg-red-900 text-white transition-all justify-center">
          <h1 className="text-4xl font-bold">Doctorados</h1>
          <ul>
            {upg.doctorados.map((programa) => {
              return (
                <li>
                  <NavLink
                    onClick={(e) => goToListaProgramas("D", programa.nombre)}
                    to="/programa"
                    className="cursor-pointer text-xl hover:text-gray-200"
                  >
                    * {programa.nombre}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
