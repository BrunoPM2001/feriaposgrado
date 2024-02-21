import { NavLink } from "react-router-dom";
import upgs from "../data/upgs.json";

export default function Upg() {
  const goToMyD = (upg_id) => {
    localStorage.setItem("upg_id", upg_id);
  };

  const upgs_select = upgs.filter(
    (upg) => upg.area == localStorage.getItem("area_id")
  );

  return (
    <div className="flex max-md:flex-col h-screen text-white text-lg text-center">
      {upgs_select.map((item) => {
        return (
          <NavLink
            key={item.id}
            onClick={(e) => goToMyD(item.id)}
            to="/myd"
            className="flex flex-1 bg-gray-700 hover:bg-gray-800 transition-all items-center justify-center cursor-pointer"
          >
            <h4>{item.nombre}</h4>
          </NavLink>
        );
      })}
    </div>
  );
}
