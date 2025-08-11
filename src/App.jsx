import { useState } from "react";
import Cards from "./components/Cards";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="bg-cover bg-center bg-[url('/background1.png')] min-h-screen flex flex-col">
      <div className="flex-shrink-0 py-4">
        <ScoreBoard score={score} highScore={highScore} level={level} />
      </div>
      <div className="flex-grow overflow-auto">
        <Cards
          score={score}
          level={level}
          highScore={highScore}
          setScore={setScore}
          setHighScore={setHighScore}
          setLevel={setLevel}
        />
      </div>
    </div>
  );
}

export default App;
