export const RestartBtn = ({ onClick }) => {
  return (
    <div className="restart-btn-container">
      <button className="play-again" onClick={onClick}>
        PLAY AGAIN
      </button>
    </div>
  );
};
