/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Card({ name, img }) {
   const [clicks, setClicks] = useState(0);

   return (
      <div className="card">
         <img src={img} alt={name} className="card-img" />
         <p className="card-text">{name}</p>
      </div>
   );
}
