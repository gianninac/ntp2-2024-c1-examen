"use client";
import "./ventas.css";
import Link from "next/link";

export default function Venta(props) {
  return (
    <li className="user-item">
      <div className="card user-item__content">
        {/* <div className="user-item__image avatar">
          <img src={props.Picture} alt={props.UserName} />
        </div> */}
        <div className="user-item__info">
          <h2>Sale Date: {props.saleDate}</h2>
          <h2>Store Location: {props.storeLocation}</h2>
          <h2>Purchase method: {props.purchaseMethod}</h2>
          <h3></h3>
        </div>
      </div>
      <div className="card venta-item__content ">
        <Link href={`/ventas/productos/${props._id}`}>Detalle productos</Link>
        <Link href={`/ventas/customer/${props._id}`}>Detalle cliente</Link>
      </div>
    </li>
  );
}
