import { NavLink } from "react-router-dom";
import fondo from "../assets/main.jpg";
import logo from "../assets/logo.png";
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
            to="/feria/upg"
            className="flex flex-col justify-center items-center flex-1 bg-black text-2xl font-bold opacity-70 hover:opacity-55 transition-all cursor-pointer"
          >
            <p>{item.nombre}</p>
            <img src={logo} className="w-32" alt="Alt" />
          </NavLink>
        );
      })}
    </div>
  );
}
