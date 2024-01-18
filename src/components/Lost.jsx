/* eslint-disable react/prop-types */
export default function Lost({
   handleShowLost,
   handleShowGame,
   bestScore,
   maxPotentialScore,
}) {
   return (
      <div className="end-game-container">
         <p>
            Best score: {bestScore}/{maxPotentialScore}
         </p>
         <p>You lost</p>
         <button
            className="try-again-btn"
            onClick={() => {
               handleShowGame();
               handleShowLost();
            }}
         >
            Try again!
         </button>
      </div>
   );
}
