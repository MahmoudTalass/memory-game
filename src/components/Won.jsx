/* eslint-disable react/prop-types */
export default function Won({
   handleShowStartScreen,
   handleBestScore,
   handleShowWon,
}) {
   return (
      <div className="won-game-screen buttons-container">
         <p>You won!</p>
         <button
            className="play-again-btn"
            onClick={() => {
               handleShowStartScreen();
               handleBestScore(0);
               handleShowWon();
            }}
         >
            Play again
         </button>
      </div>
   );
}
