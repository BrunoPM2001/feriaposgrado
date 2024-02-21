import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import upgs from "../data/upgs.json";

export default function Upg() {
  const [lista, setLista] = useState([]);
  const upg = upgs.find((upg) => upg.id == localStorage.getItem("upg_id"));

  useEffect(() => {
    if (localStorage.getItem("grado") == "M") {
      setLista(upg.maestrias);
    } else if (localStorage.getItem("grado") == "D") {
      setLista(upg.doctorados);
    } else {
      alert("Error");
      useNavigate("/");
    }
  }, []);

  return (
    <div className="flex max-md:flex-col h-screen text-white text-lg text-center">
      {lista.map((item) => {
        return (
          <NavLink
            key={item.id}
            className="flex flex-1 bg-gray-700 hover:bg-gray-800 transition-all items-center justify-center cursor-pointer"
          >
            <h4>{item.nombre}</h4>
          </NavLink>
        );
      })}
    </div>
  );
}
