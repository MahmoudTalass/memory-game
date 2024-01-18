import Header from "./components/Header";
import Footer from "./components/Footer";
import Game from "./components/Game";
import { useState } from "react";

export default function App() {
   const [highestScore, setHighestScore] = useState(0);

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
               key={crypto.randomUUID()}
            />
         </main>
         <Footer />
      </>
   );
}
