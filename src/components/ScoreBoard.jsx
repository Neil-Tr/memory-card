import { useState } from "react";

export default function ScoreBoard({ score, level, highScore }) {
  const [showRule, setShowRule] = useState(false);
  return (
    <div className="m-auto mb-3">
      <div
        className="text-gray-900 text-xl sm:text-3xl text-center"
        style={{ fontFamily: '"Rubik Gemstones", cursive' }}
      >
        Score:{" "}
        <span className="text-red-600 drop-shadow-md text-3xl sm:text-4xl">
          {score}
        </span>{" "}
        | Level:{" "}
        <span className="text-green-700 drop-shadow-md text-3xl sm:text-4xl">
          {level}
        </span>
      </div>

      <div
        className="text-gray-900 text-xl sm:text-3xl text-center"
        style={{ fontFamily: '"Rubik Gemstones", cursive' }}
      >
        Highest Score:{" "}
        <span className="text-blue-600 drop-shadow-md text-3xl sm:text-4xl">
          {highScore}
        </span>
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-2">
        <button
          onClick={() => setShowRule(!showRule)}
          className="bg-green-600 px-3 py-1 rounded shadow-sm text-sm sm:text-base hover:bg-gray-300 transition"
        >
          {showRule ? "Hide Rule" : "Show Rule"}
        </button>
      </div>

      {/* Collapsible Rule */}
      {showRule && (
        <div
          className="text-gray-900 text-sm sm:text-lg text-center mt-2 leading-tight px-3"
          style={{ fontFamily: '"Delius Swash Caps", cursive' }}
        >
          **Rule: click on each card{" "}
          <span className="font-extrabold underline text-red-700">ONCE</span>.
          If you click a card twice, the game will be over!
        </div>
      )}
    </div>
  );
}
