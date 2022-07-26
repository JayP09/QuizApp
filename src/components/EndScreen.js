import React,{useContext} from "react"
import GameContext from "../helpers/Context"
import { Questions } from "../helpers/Questions"

const EndScreen = () => {
    const {setGameState,userName,setUserName,score,setScore} = useContext(GameContext)

    const restartQuiz = () => {
        setScore(0)
        setGameState("menu")
        setUserName("")        
    }

    return (
        <div className="flex flex-col justify-center items-center h-[28rem] w-[28rem] bg-[#46B2E0] text-center rounded-xl">
            <h1 className='my-6 text-4xl text-white font-bold'>Quiz Finished</h1>
            <h2 className='text-2xl my-4 text-white font-bold'>{userName}</h2>
            <h1 className="my-6 text-4xl text-white font-bold">{score}/{Questions.length}</h1>
            <button className="cursor-pointer w-[330px] p-4 m-2 border-none rounded-xl font-base outline-none bg-[#27B74E] text-white font-bold"
            onClick={restartQuiz}
            >Restart Quiz</button>
        </div>
    )
}

export default EndScreen