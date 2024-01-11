import { useState } from "react";

const Square = ({ value }) => {
  // const [value, setValue] = useState(null);

  const handleClick = () => {
    //  setValue("X");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-white border dorder-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="flex">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>

      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>

      <div className="flex">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
};

export default Board;
