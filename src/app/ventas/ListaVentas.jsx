// import "./ventas.css";
// import Venta from "./Venta";

// const ListaVentas = (props) => {
//   return (
//     <ul className="users-list">
//       {props.ventas.map((venta) => (
//         <Venta
//           _id={venta._id}
//           saleDate={venta.saleDate}
//           storeLocation={venta.storeLocation}
//           purchaseMethod={venta.purchaseMethod}
//         />
//       ))}
//     </ul>
//   );
// };
// export default ListaVentas;

// Intento punto 4 - paginado
import "./ventas.css";
import Venta from "./Venta";

const ListaVentas = (props) => {
  const { ventas, numeroDePagina, onChangePage } = props;

  return (
    <div>
      <ul className="users-list">
        {ventas.map((venta) => (
          <Venta
            key={venta._id} // Asegúrate de agregar la key aquí
            _id={venta._id}
            saleDate={venta.saleDate}
            storeLocation={venta.storeLocation}
            purchaseMethod={venta.purchaseMethod}
            numeroDePagina={numeroDePagina} // Asegúrate de pasar esto
          />
        ))}
      </ul>

      <div className="pagination-controls">
        <button
          onClick={() => onChangePage(numeroDePagina - 1)}
          disabled={numeroDePagina <= 1}
        >
          Anterior
        </button>
        <span>Página {numeroDePagina}</span>
        <button onClick={() => onChangePage(numeroDePagina + 1)}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ListaVentas;
