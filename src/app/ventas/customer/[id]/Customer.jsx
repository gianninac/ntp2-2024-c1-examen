// "use client";
// // import "./Cliente.css";

// export default function ClientPage(props) {
//   return (
//     <li className="user-item">
//       <div className="card user-item__content">
//         <div className="user-item__info">
//           <div className="user-item__image avatar">
//             <img src="https://randomuser.me/api/?seed=${props.customer.email}" />
//           </div>
//           <h2> Gender: {props.cliente.gender}</h2>
//           <h2> Age: {props.cliente.age}</h2>
//           <h3> email: {props.cliente.email}</h3>
//           <h3> Satisfaction: {props.cliente.satisfaction}</h3>
//         </div>
//       </div>
//     </li>
//   );
// }
"use client";
import { useEffect, useState } from "react";

export default function ClientPage(props) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Función para obtener la imagen
    const fetchImage = async () => {
      try {
        console.log(
          "Fetching image from URL:",
          `https://randomuser.me/api/?seed=${props.cliente.email}`
        ); // Debug: Log de la URL
        const response = await fetch(
          `https://randomuser.me/api/?seed=${props.cliente.email}`
        );
        const data = await response.json();
        console.log("API Response:", data);

        // Extraer la URL de la imagen
        const pictureUrl = data.results[0].picture.large;
        setImageUrl(pictureUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [props.cliente.email]); // Dependencia para volver a ejecutar si el email cambia

  return (
    <li className="user-item">
      <div className="card user-item__content">
        <div className="user-item__info">
          <div className="user-item__image avatar">
            {imageUrl && <img src={imageUrl} alt="User Avatar" />}
          </div>
          <h2> Gender: {props.cliente.gender}</h2>
          <h2> Age: {props.cliente.age}</h2>
          <h3> Email: {props.cliente.email}</h3>
          <h3> Satisfaction: {props.cliente.satisfaction}</h3>
        </div>
      </div>
    </li>
  );
}
