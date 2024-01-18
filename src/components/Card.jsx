/* eslint-disable react/prop-types */
export default function Card({ name, img, id, handleClickStatus }) {
   return (
      <button className="card" onClick={() => handleClickStatus(id)}>
         <img src={img} alt={name} className="card-img" />
         <p className="card-text">{name}</p>
      </button>
   );
}
