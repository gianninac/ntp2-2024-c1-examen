// "use client";
// import { useState, useEffect } from "react";
// import ListaVentas from "./ListaVentas";

// const VentaPage = () => {
//   const [ventas, setVentas] = useState([]);

//   useEffect(() => {
//     fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=10&page=1")
//       .then((response) => response.json())
//       .then((data) => {
//         setVentas(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);
//   return (
//     <div>
//       <ListaVentas ventas={ventas} />
//     </div>
//   );
// };
// export default VentaPage;

//Intento punto 4 - paginado
"use client";
import { useState, useEffect } from "react";
import ListaVentas from "./ListaVentas";

const VentaPage = () => {
  const [ventas, setVentas] = useState([]);
  const [numeroDePagina, setNumeroDePagina] = useState(1);

  useEffect(() => {
    fetch(
      `https://salesbackend.azurewebsites.net/api/sales?pageSize=10&page=${numeroDePagina}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVentas(data);
      })
      .catch((error) => console.log(error));
  }, [numeroDePagina]);

  const manejarCambioPagina = (nuevaPagina) => {
    setNumeroDePagina(nuevaPagina);
  };

  return (
    <div>
      <ListaVentas
        ventas={ventas}
        numeroDePagina={numeroDePagina}
        onChangePage={manejarCambioPagina}
      />
    </div>
  );
};
export default VentaPage;
