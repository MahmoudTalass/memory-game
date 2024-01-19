/* eslint-disable react/prop-types */
export default function StartGame({
   handleDifficulity,
   handleShowGame,
   handleShowStartScreen,
}) {
   return (
      <div className="start-game-container">
         <p className="game-instruction-text">
            Get points by clicking each image only once!
         </p>
         <p className="select-difficulty-text">Select difficulity</p>
         <div className="difficulity-options">
            <button
               className="difficulity-option-btn"
               onClick={() => {
                  handleShowGame();
                  handleShowStartScreen();
                  handleDifficulity(4);
               }}
            >
               Easy
            </button>
            <button
               className="difficulity-option-btn"
               onClick={() => {
                  handleShowGame();
                  handleShowStartScreen();
                  handleDifficulity(8);
               }}
            >
               Medium
            </button>
            <button
               className="difficulity-option-btn"
               onClick={() => {
                  handleShowGame();
                  handleShowStartScreen();
                  handleDifficulity(12);
               }}
            >
               Hard
            </button>
         </div>
      </div>
   );
}
