import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue("X");
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
  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;
