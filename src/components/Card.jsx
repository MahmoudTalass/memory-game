/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Card({ name, img }) {
   return (
      <div className="card">
         <img src={img} alt={name} className="card-img" />
         <p className="card-text">{name}</p>
      </div>
   );
}
