import React,{useContext, useState} from "react"
import { Questions } from "../helpers/Questions"
import GameContext from "../helpers/Context"

const Quiz = () => {
    const [currentQuestion , setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const {setScore, setGameState} = useContext(GameContext)

    const nextQuestion = () => {
        if(Questions[currentQuestion].answer === optionChosen) {
            setScore((oldValue) => oldValue + 1)
        } else if(optionChosen === "") {
            return alert('Select Answer')
        }
        setCurrentQuestion((oldValue) => oldValue + 1)
        setOptionChosen("")
    }

    const finishQuiz = () => {
        if(Questions[currentQuestion].answer === optionChosen) {
            setScore((oldValue) => oldValue + 1)
        } else if(optionChosen === "") {
            return alert('Select Answer')
        }
        setGameState("finished")
        setOptionChosen("")
    }

    return (
        <div className="flex flex-col justify-center items-center text-white w-[35rem] h-[35rem] p-4 rounded-xl bg-[#46B2E0] text-center">
            <h1 className="my-6 text-2xl">{Questions[currentQuestion].questionText}</h1>
            <div>
                {Questions[currentQuestion].options.map((option) => (
                    <div className={`p-4 m-2 border-none rounded-xl font-base outline-none w-[300px]  ${optionChosen === option ? "bg-[#1FAA59] text-white":"bg-white text-black"}`}
                        onClick={() => setOptionChosen(option)}
                    >{option}</div>
                ))}
            </div>
            {currentQuestion === Questions.length - 1 ? (
                <button className="cursor-pointer w-[330px] p-4 m-2 border-none rounded-xl font-base outline-none bg-[#27B74E] text-white font-bold"
                    onClick={finishQuiz}
                >Finish Quiz</button>
            ):(
                <button className="cursor-pointer w-[330px] p-4 m-2 border-none rounded-xl font-base outline-none bg-[#27B74E] text-white font-bold"
                    onClick={nextQuestion}
                >Next Question</button>
            )}
           
        </div>
    )
}

export default Quiz
