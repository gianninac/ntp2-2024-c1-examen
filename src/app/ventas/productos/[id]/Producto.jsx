"use client";
import "./Products.css";

export default function Producto(props) {
  return (
    <li className="user-item">
      <div className="card user-item__content">
        <div className="user-item__info">
          <h2>Name:{props.name}</h2>
          <h2>Price: {props.price}</h2>
          <h2>Quantity: {props.quantity}</h2>
          <h3></h3>
        </div>
      </div>
    </li>
  );
}
