const Tile = ({ index, pos, onClick, gap, isRight, images }) => {
  const top = pos[0] * 125 + gap;
  const left = pos[1] * 125 + gap;

  return (
    <div
      className={isRight ? `tile tile-correct` : `tile`}
      onClick={onClick}
      style={{
        top,
        left,
        background: `url(${images[index]?.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <span>
        <h1 className="field-number"> {index + 1} </h1>
      </span>
    </div>
  );
};

export { Tile };
