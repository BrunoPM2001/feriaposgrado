import { SiGooglemeet, SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import img1 from "../assets/magisters.png";
import img2 from "../assets/doctores.png";
import doc1 from "../assets/doc_bio.jpeg";
import doc2 from "../assets/doc_salud.jpeg";
import data from "../data/upgs.json";
import { useState } from "react";

export default function Programa() {
  const [pop1, setPop1] = useState(false);
  const [pop2, setPop2] = useState(false);

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

  const imagenCargar = () => {
    if (grado.nombre == "Doctorado en Ciencias de la Salud") {
      return doc2;
    } else if (grado.nombre == "Doctorado en Ciencias Biológicas") {
      return doc1;
    } else {
      return localStorage.getItem("grado") == "M" ? img1 : img2;
    }
  };

  return (
    <div className="flex flex-wrap gap-10 h-screen py-14 mx-6 text-center">
      <div className="flex flex-col flex-wrap flex-1 h-full items-center justify-center min-w-80">
        <img
          className="w-full h-3/4 object-cover border"
          src={imagenCargar()}
          alt="Ref"
        />
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
                target="_blank"
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
            <p className="mt-3 text-xl text-center">
              {upg.dia} de Marzo
              <br />
              {grado.horario}
            </p>
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
              className="relative border border-red-800 text-white bg-red-800 text-2xl rounded-full p-3 hover:text-red-800 hover:bg-white duration-300"
              href={"mailTo:" + upg.contactos[2].link}
              target="_blank"
              onMouseEnter={() => {
                setPop1(true);
              }}
              onMouseLeave={() => {
                setPop1(false);
              }}
            >
              <div
                id="popover-correo"
                class={`absolute ${
                  pop1 ? "" : "invisible"
                } -right-0 -top-24 z-10 inline-block w-fit text-sm text-black transition-opacity duration-300 bg-white border border-red-800 rounded-lg shadow-sm opacity-100`}
              >
                <div class="px-3 py-2 bg-red-800 border-b border-red-800 rounded-t-lg">
                  <h3 class="font-bold text-white">Correo</h3>
                </div>
                <div class="px-3 py-2">
                  <p>{upg.contactos[2].link}</p>
                </div>
              </div>
              <SiGmail />
            </a>
            <a
              className="relative border border-red-800 text-white bg-red-800 text-2xl rounded-full p-3 hover:text-red-800 hover:bg-white duration-300"
              href={"tel:" + grado.wsp[0].link}
              target="_blank"
              onMouseEnter={() => {
                setPop2(true);
              }}
              onMouseLeave={() => {
                setPop2(false);
              }}
            >
              <div
                id="popover-tel"
                class={`absolute ${
                  pop2 ? "" : "invisible"
                } -right-0 -top-24 z-10 inline-block w-36 text-sm text-black transition-opacity duration-300 bg-white border border-red-800 rounded-lg shadow-sm opacity-100`}
              >
                <div class="px-3 py-2 bg-red-800 border-b border-red-800 rounded-t-lg">
                  <h3 class="font-bold text-white">Teléfono</h3>
                </div>
                <div class="px-3 py-2">
                  <p>{grado.wsp[0].link}</p>
                </div>
              </div>
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
