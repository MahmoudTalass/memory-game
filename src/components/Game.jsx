import { useState, useEffect } from "react";
import arrayShuffle from "array-shuffle";
import Card from "./Card";

export default function Game() {
   const [score, setScore] = useState(0);
   const [highestScore, setHighestScore] = useState(0);
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

      const charactersJson = await characters.json();
      const charactersSimplified = charactersJson.map((char) => {
         return {
            id: char.id,
            name: char.name,
            img: char.img,
         };
      });

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
      console.log(shuffledCharacters);
   }

   return (
      <div>
         <div className="cards-container">
            {shuffledCharacters.map((character) => {
               return <Card {...character} key={character.id} />;
            })}
            {isLoading && <p>loading...</p>}
         </div>
      </div>
   );
}
