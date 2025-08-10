import { useEffect, useState, useRef } from "react";
import Loading from "./Loading";
export default function Cards({ score, highScore, setScore, setHighScore }) {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  //Game state

  const [clickedIds, setClickedIds] = useState([]);
  const [isRoundLoading, setIsRoundLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [usedIds, setUsedIds] = useState([]);
  const getCardsRef = useRef(async function getCards() {
    try {
      // If fewer than 6 Pokémon left, game over
      if (usedIds.length > 1025 - 6) {
        throw new Error("No more unique Pokémon available!");
      }

      const randomSet = new Set();
      while (randomSet.size < 6) {
        const newNumber = Math.floor(Math.random() * 1025) + 1;
        randomSet.add(newNumber);
      }
      const fetches = [...randomSet].map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) =>
          res.json()
        )
      );
      const result = await Promise.all(fetches);
      setCards(result);
      setUsedIds((prev) => [...prev, ...randomSet]);
    } catch (err) {
      setError(err.message || "Failed to fetch cards");
    }
  });
  useEffect(() => {
    getCardsRef.current();
  }, []);
  if (error) return <div>{error}</div>;
  if (cards.length === 0) return <Loading />;

  function shuffleCards(cards) {
    const array = cards.slice();
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function GameOver() {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div />
        <p
          className="text-gray-900 text-3xl text-center"
          style={{ fontFamily: '"Rubik Gemstones", cursive' }}
        >
          Your Score: {score}
        </p>
        <p
          className="text-gray-900 text-3xl text-center"
          style={{ fontFamily: '"Rubik Gemstones", cursive' }}
        >
          Highest Score: {highScore}
        </p>
        <button
          className="px-6 py-3 rounded-lg bg-yellow-300 text-gray-900 text-xl shadow hover:brightness-95"
          style={{ fontFamily: '"Rubik Gemstones", cursive' }}
          onClick={() => {
            setUsedIds([]);
            startNewRound({ resetScore: true });
          }}
        >
          Replay
        </button>
      </div>
    );
  }

  async function startNewRound({ resetScore = false } = {}) {
    try {
      setIsRoundLoading(true);
      await getCardsRef.current();
      setClickedIds([]);
      if (resetScore) setScore(0);
      setGameOver(false);
    } finally {
      setIsRoundLoading(false);
    }
  }

  async function handleCardClick(id) {
    if (gameOver || isRoundLoading) return;
    if (clickedIds.includes(id)) {
      setHighScore((prev) => (score > prev ? score : prev));
      setGameOver(true);
      return;
    }
    const nextClicked = [...clickedIds, id];
    const nextScore = score + 1;
    setClickedIds(nextClicked);
    setScore(nextScore);

    if (nextClicked.length === 6) {
      setHighScore((prev) => (nextScore > prev ? nextScore : prev));
      await startNewRound();
      return;
    }
    setCards((prev) => shuffleCards(prev));
  }

  return (
    <div className="relative">
      {/* Overlay Loading when fetching the next round */}
      {isRoundLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <Loading />
        </div>
      )}
      {gameOver ? (
        <GameOver />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mx-auto justify-items-center w-fit">
          {cards.map((card) => (
            <button
              type="button"
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="
                bg-gray-200 border-2 border-blue-200 rounded-xl shadow-2xl flex flex-col items-center p-4
                w-[160px] h-[200px]
                sm:w-[220px] sm:h-[280px]
                md:w-[243px] md:h-[306px]
                lg:w-[270px] lg:h-[340px]
                transition-transform hover:scale-105 hover:shadow-orange-300 hover:bg-gray-100
                "
            >
              <img
                src={card.sprites.other["official-artwork"].front_default}
                alt={card.name}
                className="
                w-[160px] h-[200px]
                sm:w-[220px] sm:h-[280px]
                md:w-[243px] md:h-[306px]
                lg:w-[270px] lg:h-[340px]
                object-contain
                "
              />
              <div
                className="capitalize mt-2 text-xl"
                style={{ fontFamily: '"Delius Swash Caps", cursive' }}
              >
                {card.name}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
