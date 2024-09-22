"use client";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";

const ProductPage = ({ params }) => {
  const [products, setProducts] = useState([]);
  const { id } = params;
  useEffect(() => {
    fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=10&page=1")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.find((venta) => venta._id === id).items);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ProductList items={products} />
    </div>
  );
};
export default ProductPage;
