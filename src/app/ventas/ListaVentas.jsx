import "./ventas.css";
import Venta from "./Venta";

const ListaVentas = (props) => {
  return (
    <ul className="users-list">
      {props.ventas.map((venta) => (
        <Venta
          _id={venta._id}
          saleDate={venta.saleDate}
          storeLocation={venta.storeLocation}
          purchaseMethod={venta.purchaseMethod}
        />
      ))}
    </ul>
  );
};
export default ListaVentas;
