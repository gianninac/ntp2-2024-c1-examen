"use client";
import "./Products.css";
import Producto from "./Producto";

const ProductList = (props) => {
  return (
    <ul className="users-list">
      {props.items.map((item) => (
        <Producto
          name={item.name}
          price={item.price.$numberDecimal}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );
};
export default ProductList;
