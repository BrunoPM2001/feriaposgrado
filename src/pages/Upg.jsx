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
    <div
      className="flex max-md:flex-col h-screen text-white text-lg text-center"
      style={{
        backgroundImage: `url(/feria/src/assets/Fondo-${localStorage.getItem(
          "area_id"
        )}.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {upgs_select.map((item) => {
        return (
          <NavLink
            key={item.nombre}
            onClick={(e) => goToMyD(item.id)}
            to="/feria/myd"
            className="flex flex-col flex-1 bg-black opacity-70 hover:opacity-80 text-2xl font-bold transition-all items-center justify-center cursor-pointer"
          >
            <p>{item.nombre}</p>
            <img
              src={"/feria/src/" + item.img}
              className="w-full max-h-80 px-4 object-cover"
              alt=""
            />
          </NavLink>
        );
      })}
    </div>
  );
}
