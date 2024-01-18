/* eslint-disable react/prop-types */
export default function Lost({
   handleShowLost,
   handleShowGame,
   highestScore,
   maxPotentialScore,
}) {
   return (
      <div className="end-game-container">
         <p>
            Highest Score: {highestScore}/{maxPotentialScore}
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
