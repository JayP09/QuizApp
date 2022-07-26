import React,{useContext, useState} from "react"
import { questions } from "../helpers/Questions"
import GameContext from "../helpers/Context"

const Quiz = () => {
    const [currentQuestion , setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const {score, setScore} = useContext(GameContext)

    const nextQuestion = () => {
        if(questions[currentQuestion].answer === optionChosen) {
            setScore((oldValue) => oldValue + 1)
        }
        setCurrentQuestion((oldValue) => oldValue + 1)
    }

    return (
        <div className="flex flex-col justify-center items-center text-white w-[30rem] h-[30rem] p-4 rounded-xl bg-[#46B2E0] text-center">
            <h1 className="my-6 text-2xl">{questions[currentQuestion].questionText}</h1>
            <div>
                {questions[currentQuestion].options.map((option) => (
                    <div className={`p-4 m-2 border-none rounded-xl font-base outline-none w-[300px]  ${optionChosen === option ? "bg-[#1FAA59] text-white":"bg-white text-black"}`}
                        onClick={() => setOptionChosen(option)}
                    >{option}</div>
                ))}
            </div>
            <button className="cursor-pointer w-[330px] p-4 m-2 border-none rounded-xl font-base outline-none bg-[#27B74E]"
                onClick={nextQuestion}
            >Next Question</button>
        </div>
    )
}

export default Quiz
