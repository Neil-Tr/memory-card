import { useState } from "react";
import Cards from "./components/Cards";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="bg-cover bg-center bg-[url(./src/assets/background1.png)] h-screen">
      <div className="h-30 m-auto">
        <ScoreBoard score={score} highScore={highScore} />
      </div>
      <Cards
        score={score}
        highScore={highScore}
        setScore={setScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;
