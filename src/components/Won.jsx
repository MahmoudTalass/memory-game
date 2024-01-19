/* eslint-disable react/prop-types */
export default function Won({ handleShowStartScreen, handleBestScore }) {
   return (
      <div className="won-game-screen">
         <p>You won!</p>
         <button
            className="play-again-btn"
            onClick={() => {
               handleShowStartScreen();
               handleBestScore(0);
            }}
         >
            Play again
         </button>
      </div>
   );
}
