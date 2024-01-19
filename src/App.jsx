import Header from "./components/Header";
import Footer from "./components/Footer";
import Game from "./components/Game";
import { useState, useEffect } from "react";
import Lost from "./components/Lost";
import StartGame from "./components/StartGame";
import Won from "./components/Won";

const clickStatusInitial = {};

export default function App() {
   const [bestScore, setBestScore] = useState(0);
   const [characters, setCharacters] = useState([]);
   const [numOfCards, setNumOfCards] = useState(0);

   const [showGame, setShowGame] = useState(false);
   const [showStartScreen, setShowStartScreen] = useState(true);
   const [showLost, setShowLost] = useState(false);
   const [showWon, setShowWon] = useState(false);

   const [error, setError] = useState();

   function handleShowLost() {
      setShowLost(!showLost);
   }

   function handleShowGame() {
      setShowGame(!showGame);
   }

   function handleShowWon() {
      setShowWon(!showWon);
   }

   function handleShowStartScreen() {
      setShowStartScreen(!showStartScreen);
   }

   function handleNumOfCards(num) {
      setNumOfCards(num);
   }

   function handleBestScore(newBest) {
      setBestScore(newBest);
   }

   useEffect(() => {
      async function fetchCharacters() {
         setCharacters(null);
         try {
            const characters = await fetch(
               "https://api.attackontitanapi.com/characters/1,2,3,4,5,12,86,87,88,124,184,188",
               { mode: "cors" }
            );

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
               setCharacters(charactersSimplified);
            }
         } catch (error) {
            setError(error);
         }
      }
      let ignore = false;
      fetchCharacters();
      return () => {
         ignore = true;
      };
   }, []);

   return (
      <>
         <Header />
         <main>
            {showGame && (
               <Game
                  bestScore={bestScore}
                  handleBestScore={handleBestScore}
                  characters={characters}
                  key={crypto.randomUUID()}
                  clickStatusInitial={clickStatusInitial}
                  numOfCards={numOfCards}
                  handleShowLost={handleShowLost}
                  handleShowGame={handleShowGame}
                  handleShowWon={handleShowWon}
               />
            )}
            {showLost && (
               <Lost
                  handleShowGame={handleShowGame}
                  handleShowLost={handleShowLost}
                  bestScore={bestScore}
                  maxPotentialScore={numOfCards}
               />
            )}

            {showStartScreen && error === undefined && (
               <StartGame
                  handleShowStartScreen={handleShowStartScreen}
                  handleShowGame={handleShowGame}
                  handleDifficulty={handleNumOfCards}
                  handleBestScore={handleBestScore}
               />
            )}
            {showWon && (
               <Won
                  handleBestScore={handleBestScore}
                  handleShowStartScreen={handleShowStartScreen}
                  handleShowWon={handleShowWon}
               />
            )}
            {error !== undefined && (
               <>
                  <h1>
                     Game cannot be played at the moment, please come back later{" "}
                  </h1>
                  <p>{error}</p>
               </>
            )}
         </main>
         <Footer />
      </>
   );
}
