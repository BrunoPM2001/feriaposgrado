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
    <div className="flex max-md:flex-col h-screen text-black text-lg text-center">
      {upgs_select.map((item) => {
        return (
          <NavLink
            key={item.id}
            onClick={(e) => goToMyD(item.id)}
            to="/feria/myd"
            className="flex flex-col flex-1 bg-white opacity-90 hover:opacity-70 text-2xl font-bold transition-all items-center justify-center cursor-pointer"
          >
            <p>{item.nombre}</p>
            <img src={"/feria/src/" + item.img} className="w-full p-2" alt="" />
          </NavLink>
        );
      })}
    </div>
  );
}
