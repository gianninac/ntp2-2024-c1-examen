"use client";
import Customer from "./Customer";
import { useState, useEffect } from "react";

const ClientPage = ({ params }) => {
  const [cliente, setCliente] = useState([]);
  const { id } = params;
  useEffect(() => {
    fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=10&page=1")
      .then((response) => response.json())
      .then((data) => {
        setCliente(data.find((venta) => venta._id === id).customer);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Customer cliente={cliente} />
    </div>
  );
};
export default ClientPage;
