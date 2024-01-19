/* eslint-disable react/prop-types */
export default function StartGame({
   handleDifficulty,
   handleShowGame,
   handleShowStartScreen,
   handleBestScore,
}) {
   function startGame(difficulty) {
      handleShowGame();
      handleShowStartScreen();
      handleDifficulty(difficulty);
      handleBestScore(0);
   }
   return (
      <div className="start-game-container buttons-container">
         <p className="game-instruction-text">
            Get points by clicking each image only once!
         </p>
         <div className="difficulty-container">
            <p className="select-difficulty-text">Select Difficulty</p>
            <div className="difficulty-options">
               <button
                  className="difficulty-option-btn"
                  onClick={() => startGame(4)}
               >
                  Easy
               </button>
               <button
                  className="difficulty-option-btn"
                  onClick={() => startGame(8)}
               >
                  Medium
               </button>
               <button
                  className="difficulty-option-btn"
                  onClick={() => startGame(12)}
               >
                  Hard
               </button>
            </div>
         </div>
      </div>
   );
}
