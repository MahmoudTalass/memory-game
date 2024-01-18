/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import arrayShuffle from "array-shuffle";
import Card from "./Card";

export default function Game({ highestScore, handleHighestScore }) {
   const [score, setScore] = useState(0);
   const [clickStatus, setClickStatus] = useState({});
   const [characters, setCharacters] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   async function fetchCharacters() {
      const characters = await fetch(
         "https://api.attackontitanapi.com/characters/1,2,3,4,5,12,86,87,88,124,184,188",
         { mode: "cors" }
      );

      if (!characters.ok) {
         return;
      }

      const clickStatusInitial = {};
      const charactersJson = await characters.json();
      const charactersSimplified = charactersJson.map((char) => {
         clickStatusInitial[char.id] = false;
         return {
            id: char.id,
            name: char.name,
            img: char.img.split("/revision")[0],
         };
      });

      setClickStatus(clickStatusInitial);
      setCharacters(charactersSimplified);
      setIsLoading(false);
      return charactersSimplified;
   }

   useEffect(() => {
      fetchCharacters();
   }, []);

   let shuffledCharacters = [];
   if (characters.length !== 0) {
      shuffledCharacters = arrayShuffle(characters);
   }

   function handleClickStatus(cardId) {
      if (clickStatus[cardId]) {
         console.log("end game");
      } else {
         setClickStatus({ ...clickStatus, [cardId]: true });
         if (highestScore < score + 1) {
            handleHighestScore(score + 1);
         }
         setScore(score + 1);
      }
   }

   return (
      <div className="game-container">
         <p>Score: {score} </p>
         <p>Highest score: {highestScore}</p>
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
            {isLoading && <p>loading...</p>}
         </div>
      </div>
   );
}
