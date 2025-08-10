export default function ScoreBoard({ score, highScore }) {
  return (
    <div className="m-auto mb-6">
      <div
        className="text-gray-900 text-3xl text-center"
        style={{ fontFamily: '"Rubik Gemstones", cursive' }}
      >
        Your Score: {score}
      </div>
      <div
        className="text-gray-900 text-3xl text-center"
        style={{ fontFamily: '"Rubik Gemstones", cursive' }}
      >
        Highest Score: {highScore}
      </div>
      <div
        className="text-gray-900 text-lg text-center my-2"
        style={{ fontFamily: '"Delius Swash Caps", cursive' }}
      >
        **Rule: click on each card{" "}
        <span className="font-extrabold underline text-red-700">ONCE</span>. If
        you click a card twice, the game will be over!
      </div>
    </div>
  );
}
