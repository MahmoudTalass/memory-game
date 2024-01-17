import { useState, useEffect } from "react";

export default function Game() {
   const [score, setScore] = useState(0);
   const [highestScore, setHighestScore] = useState(0);
   const [characters, setCharacters] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   async function fetchCharacters() {
      const characters = await fetch(
         "https://api.attackontitanapi.com/characters/1,2,3,4,5,12,86,87,88,124,184,188"
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

      return charactersSimplified;
   }

   useEffect(() => {
      setCharacters(fetchCharacters());
      setIsLoading(false);
   }, []);
}
