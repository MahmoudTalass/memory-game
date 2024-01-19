/* eslint-disable react/prop-types */
export default function StartGame({
   handleDifficulity,
   handleShowGame,
   handleShowStartGame,
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
                  handleShowStartGame();
                  handleDifficulity(4);
               }}
            >
               Easy
            </button>
            <button
               className="difficulity-option-btn"
               onClick={() => {
                  handleShowGame();
                  handleShowStartGame();
                  handleDifficulity(8);
               }}
            >
               Medium
            </button>
            <button
               className="difficulity-option-btn"
               onClick={() => {
                  handleShowGame();
                  handleShowStartGame();
                  handleDifficulity(12);
               }}
            >
               Hard
            </button>
         </div>
      </div>
   );
}
