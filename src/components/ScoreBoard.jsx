export default function ScoreBoard({ score, level, highScore }) {
  return (
    <div className="m-auto mb-6">
      <div
        className="text-gray-900 text-xl sm:text-3xl text-center"
        style={{ fontFamily: '"Rubik Gemstones", cursive' }}
      >
        Score:{" "}
        <span className="text-red-600 drop-shadow-md text-3xl sm:text-5xl">
          {score}
        </span>{" "}
        | Level:{" "}
        <span className="text-purple-600 drop-shadow-md text-3xl sm:text-5xl">
          {level}
        </span>
      </div>
      <div
        className="text-gray-900 text-xl sm:text-3xl text-center"
        style={{ fontFamily: '"Rubik Gemstones", cursive' }}
      >
        Highest Score:{" "}
        <span className="text-yellow-700 drop-shadow-md text-3xl sm:text-5xl">
          {highScore}
        </span>
      </div>
      <div
        className="text-gray-900 text-md px-15 sm:text-xl text-center my-2"
        style={{ fontFamily: '"Delius Swash Caps", cursive' }}
      >
        **Rule: click on each card{" "}
        <span className="font-extrabold underline text-red-700">ONCE</span>. If
        you click a card twice, the game will be over!
      </div>
    </div>
  );
}
