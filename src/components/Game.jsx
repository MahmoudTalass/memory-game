/* eslint-disable react/prop-types */
import { useState } from "react";
import arrayShuffle from "array-shuffle";
import Card from "./Card";

export default function Game({ bestScore, handleBestScore, characters }) {
   const [score, setScore] = useState(0);
   const [clickStatus, setClickStatus] = useState({});

   let shuffledCharacters = [];
   if (characters !== null && characters.length !== 0) {
      shuffledCharacters = arrayShuffle(characters);
   }

   function handleClickStatus(cardId) {
      if (clickStatus[cardId]) {
         if (bestScore < score + 1) {
            handleBestScore(score);
         }
      } else {
         setClickStatus({ ...clickStatus, [cardId]: true });
         setScore(score + 1);
      }
   }

   return (
      <div className="game-container">
         <p>Score: {score} </p>
         <p>Best score: {bestScore}</p>
         <div className="cards-container">
            {shuffledCharacters.map((character) => {
               return (
                  <Card
                     {...character}
                     handleClickStatus={handleClickStatus}
                     key={character.id}
                  />
               );
            })}
         </div>
      </div>
   );
}
