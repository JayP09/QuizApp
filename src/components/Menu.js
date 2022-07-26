import React,{useContext} from "react"
import GameContext from "../helpers/Context"

const Menu = () => {
    const {gameState, setGameState, userName, setUserName} = useContext(GameContext)

    return (
        <div className="flex flex-col justify-center items-center bg-[#46B2E0] h-[500px] w-[500px] text-white rounded-xl">
            <label className="text-white text-base">Enter your Name</label>
            <input 
                type="text" 
                value={userName}
                placeholder="name" 
                required className="p-3 m-2 w-[300px] border-none rounded-md text-base outline-none text-black"
                onChange={(e) => setUserName(e.target.value)}
            />
            <button 
                className="cursor-pointer w-[300px] p-3 m-2 bg-[#27B74E] rounded-xl"
                onClick={() => setGameState("playing")}
            >Start Quiz</button>
        </div>
    )
}

export default Menu