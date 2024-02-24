import { SiGooglemeet, SiGmail } from "react-icons/si";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import img from "../assets/main.jpg";
import data from "../data/upgs.json";

export default function Programa() {
  const upg = data.find((upg) => upg.id == localStorage.getItem("upg_id"));
  let grado;
  if (localStorage.getItem("grado") == "M") {
    grado = upg.maestrias.find(
      (maestria) => maestria.nombre == localStorage.getItem("nombre_grado")
    );
  } else if (localStorage.getItem("grado") == "D") {
    grado = upg.doctorados.find(
      (doctorado) => doctorado.nombre == localStorage.getItem("nombre_grado")
    );
  }

  return (
    <div className="flex flex-wrap gap-10 h-screen py-14 mx-6 text-center">
      <div className="flex flex-col flex-wrap flex-1 h-full items-center justify-center min-w-80">
        <img className="w-full h-3/4 object-cover border" src={img} alt="Ref" />
        <h2 className="text-2xl font-semibold text-red-800 mt-4">
          {grado.nombre}
        </h2>
      </div>
      <div className="flex-1">
        <h2 className="text-4xl text-left font-semibold text-red-800">
          Reseña
        </h2>
        <p className="mt-4 text-left">{grado.reseña}</p>
        <div className="flex flex-wrap gap-4 justify-around mt-8">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">
              Modalidad
            </h3>
            <p className="text-base bg-red-800 text-white font-medium rounded-full py-2 px-4">
              {grado.modalidad}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">
              Planes de estudio
            </h3>
            <p className="text-base">
              Revisa{" "}
              <a
                className="underline"
                href={
                  grado.plan == ""
                    ? "https://sum.unmsm.edu.pe/loginWebSum/planes.htm"
                    : grado.plan
                }
              >
                aquí
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-around mt-8">
          <div className="flex flex-col items-center py-4 px-16 shadow-md">
            <h3 className="text-2xl font-semibold text-red-800">
              Horario de atención
            </h3>
            <p className="mt-5 text-xl">{grado.horario}</p>
          </div>
          <div className="flex flex-col items-center py-4 px-16 shadow-md">
            <h3 className="text-2xl font-semibold text-red-800">
              Asesoría virtual
            </h3>
            <a
              className="mt-4 border border-red-800 text-white bg-red-800 text-2xl rounded-full p-3 hover:text-red-800 hover:bg-white duration-300"
              href={grado.link}
              target="_blank"
            >
              <SiGooglemeet />
            </a>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl text-left font-semibold text-red-800">
            Contacto
          </h2>
          <div className="flex flex-wrap justify-around my-8">
            <a
              className="border border-red-800 text-white bg-red-800 text-2xl rounded-full p-3 hover:text-red-800 hover:bg-white duration-300"
              href={upg.contactos[0].link}
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              className="border border-red-800 text-white bg-red-800 text-2xl rounded-full p-3 hover:text-red-800 hover:bg-white duration-300"
              href={upg.contactos[1].link}
              target="_blank"
            >
              <TbWorld />
            </a>
            <a
              className="border border-red-800 text-white bg-red-800 text-2xl rounded-full p-3 hover:text-red-800 hover:bg-white duration-300"
              href={"mailTo:" + upg.contactos[2].link}
              target="_blank"
            >
              <SiGmail />
            </a>
            <a
              className="border border-red-800 text-white bg-red-800 text-2xl rounded-full p-3 hover:text-red-800 hover:bg-white duration-300"
              href={"tel:" + upg.contactos[3].link}
              target="_blank"
            >
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
