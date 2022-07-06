import { Tile } from "../Tile/Tile";
import { RestartBtn } from "../RestartBtn";
import { useGameState } from "../../Hooks/useGameState";
import "./App.css";

const App = () => {
  const [board, moves, solved, isTileRight, newGame, move, images] =
    useGameState();

  return (
    <div className="game-container">
      <section className="game-header">
        <div className="point-container">
          <div className="moves">
            <h4>Number of turns:</h4>
            <span>{moves}</span>
          </div>
          <div className="moves">
            <h1 className="title">Puzzle game</h1>
          </div>
          <div className="moves">
            <h4>Your score:</h4>
            <span> {500 - moves}</span>
          </div>
        </div>
      </section>
      <div
        className="board"
        style={{
          width: `${Math.sqrt(board.length) * 130}px`,
          height: `${Math.sqrt(board.length) * 130}px`,
        }}
      >
        {board.slice(0, -1).map((pos, index) => (
          <Tile
            index={index}
            key={pos}
            pos={pos}
            onClick={move(index)}
            isRight={isTileRight(index)}
            gap={Math.sqrt(board.length)}
            images={images}
          />
        ))}
        {solved && (
          <>
            <div
              className="overlay"
              style={{
                width: `${Math.sqrt(board.length) * 130}px`,
                height: `${Math.sqrt(board.length) * 130}px`,
              }}
            ></div>
            <section className="modal-reset">
              <h1>Congratulations !!! </h1>
              <RestartBtn onClick={newGame} />
            </section>
          </>
        )}
      </div>
      <RestartBtn onClick={newGame} />
    </div>
  );
};

export default App;
