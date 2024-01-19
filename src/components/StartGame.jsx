/* eslint-disable react/prop-types */
export default function StartGame({
   handleDifficulity,
   handleShowGame,
   handleShowStartScreen,
   handleBestScore,
}) {
   function startGame(difficulity) {
      handleShowGame();
      handleShowStartScreen();
      handleDifficulity(difficulity);
      handleBestScore(0);
   }
   return (
      <div className="start-game-container">
         <p className="game-instruction-text">
            Get points by clicking each image only once!
         </p>
         <p className="select-difficulty-text">Select difficulity</p>
         <div className="difficulity-options">
            <button
               className="difficulity-option-btn"
               onClick={() => startGame(4)}
            >
               Easy
            </button>
            <button
               className="difficulity-option-btn"
               onClick={() => startGame(8)}
            >
               Medium
            </button>
            <button
               className="difficulity-option-btn"
               onClick={() => startGame(12)}
            >
               Hard
            </button>
         </div>
      </div>
   );
}
