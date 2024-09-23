// "use client";
// import "./Products.css";

// export default function Producto(props) {
//   return (
//     <li className="user-item">
//       <div className="card user-item__content">
//         <div className="user-item__info">
//           <h2>Name:{props.name}</h2>
//           <h2>Price: {props.price}</h2>
//           <h2>Quantity: {props.quantity}</h2>
//           <h3></h3>
//         </div>
//       </div>
//     </li>
//   );
// }

//Código con imágenes

"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

export default function Producto(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const accessKey = "XUdbiuQU0B3OiC5eOpwyvv8LC_YX5m2ZAao732VJ-i0";

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${props.name}&client_id=${accessKey}`
        );
        if (response.data.results.length > 0) {
          setImageUrl(response.data.results[0].urls.small);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [props.name]);

  return (
    <li className="user-item">
      <div className="card user-item__content">
        <div className="user-item__info">
          <h2>Name: {props.name}</h2>
          <h2>Price: {props.price}</h2>
          <h2>Quantity: {props.quantity}</h2>
          {imageUrl && <img src={imageUrl} alt={props.name} />}
        </div>
      </div>
    </li>
  );
}
