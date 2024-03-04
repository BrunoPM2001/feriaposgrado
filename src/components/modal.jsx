import { motion } from "framer-motion";
import { useState } from "react";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-2 z-10"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

const DataModal = ({ handleClose }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const enviarData = (e) => {
    e.preventDefault();
    fetch(
      "https://posgrado.unmsm.edu.pe/feria/enviardata.php?input1=" +
        input1 +
        "&input2=" +
        input2 +
        "&input3=" +
        input3 +
        "&input4=" +
        localStorage.getItem("nombre_grado"),
      {
        method: "GET",
        mode: "no-cors",
      }
    ).then((response) => {
      console.log(response);
      handleClose();
    });
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="m-auto p-4  max-h-[500px] max-w-[800px] flex rounded-md"
      >
        <div className="flex rounded-md bg-white">
          <form className="p-8" onSubmit={(e) => enviarData(e)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nombres completos
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => {
                  setInput1(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Teléfono
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => {
                  setInput2(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Correo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => {
                  setInput3(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default DataModal;
