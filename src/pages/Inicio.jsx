import { NavLink } from "react-router-dom";
import fondo from "../assets/main_fondo.jpg";
import areas from "../data/areas.json";

export default function Inicio() {
  const goToUpgs = (area_id) => {
    localStorage.setItem("area_id", area_id);
  };

  return (
    <div
      className="flex max-md:flex-col h-screen text-white text-lg text-center"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {areas.map((item) => {
        return (
          <NavLink
            key={item.id}
            onClick={(e) => goToUpgs(item.id)}
            to="/upg"
            className="flex flex-1 bg-black opacity-70 hover:opacity-45 transition-all items-center justify-center cursor-pointer"
          >
            <h4>{item.nombre}</h4>
          </NavLink>
        );
      })}
    </div>
  );
}
