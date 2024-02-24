import { NavLink } from "react-router-dom";
import upgs from "../data/upgs.json";
import fondo1 from "../assets/areaA.jpg";
import fondo2 from "../assets/areaB.jpg";
import fondo3 from "../assets/areaC.jpg";
import fondo4 from "../assets/areaD.jpg";
import fondo5 from "../assets/areaE.jpg";

export default function Upg() {
  const goToMyD = (upg_id) => {
    localStorage.setItem("upg_id", upg_id);
  };

  const upgs_select = upgs.filter(
    (upg) => upg.area == localStorage.getItem("area_id")
  );

  const fondo = () => {
    if (localStorage.getItem("area_id") == 1) {
      return fondo1;
    } else if (localStorage.getItem("area_id") == 2) {
      return fondo2;
    } else if (localStorage.getItem("area_id") == 3) {
      return fondo3;
    } else if (localStorage.getItem("area_id") == 4) {
      return fondo4;
    } else if (localStorage.getItem("area_id") == 5) {
      return fondo5;
    }
  };

  return (
    <div
      className="flex max-md:flex-col h-screen text-white text-lg text-center"
      style={{
        backgroundImage: `url(${fondo()})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {upgs_select.map((item) => {
        return (
          <NavLink
            key={item.id}
            onClick={(e) => goToMyD(item.id)}
            to="/myd"
            className="flex flex-1 bg-black opacity-50 hover:opacity-35 text-2xl font-bold transition-all items-center justify-center cursor-pointer"
          >
            {item.nombre}
          </NavLink>
        );
      })}
    </div>
  );
}
