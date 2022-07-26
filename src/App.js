import './index.css';
import {useState} from 'react';
import Menu from "./components/Menu"
import GameContext from "./helpers/Context"
import Quiz from "./components/Quiz"

const App = () => {
  const [gameState, setGameState] = useState("menu") // menu, playing ,finished
  const [userName, setUserName] = useState("")
  const [score, setScore] = useState(0)

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="my-6 text-4xl">Quiz App</h1>
      <GameContext.Provider value={{ 
        gameState,
        setGameState,
        userName,
        setUserName,
        score,
        setScore
      }} >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz/>}
      </GameContext.Provider>
    </div>
  );
}

export default App;
