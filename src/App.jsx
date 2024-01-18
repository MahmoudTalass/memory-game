import Header from "./components/Header";
import Footer from "./components/Footer";
import Game from "./components/Game";
import { useState, useEffect } from "react";

export default function App() {
   const [highestScore, setHighestScore] = useState(0);
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      async function fetchCharacters() {
         setCharacters(null);
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

         if (!ignore) {
            // setClickStatus(clickStatusInitial);
            setCharacters(charactersSimplified);
         }
      }
      let ignore = false;
      fetchCharacters();
      return () => {
         ignore = true;
      };
   }, []);

   function handleHighestScore(newHighest) {
      setHighestScore(newHighest);
   }

   return (
      <>
         <Header />
         <main>
            <Game
               highestScore={highestScore}
               handleHighestScore={handleHighestScore}
               characters={characters}
               key={crypto.randomUUID()}
            />
         </main>
         <Footer />
      </>
   );
}
