import { AnswersSet } from "../AnswersSet"
import HUD from "../HUD"
import { Modal } from "../Modal"
// import { End } from "./Defeat"
import questions from "../../models/friends-quiz-data.json"
import { useQuizStore } from "../../store/quizStore"
import { useViewStore } from "../../store/viewStore"

export function Quiz() {
  const questionIndex = useQuizStore((s) => s.questionIndex)
  console.log("quiz")

  // const isEndModalActive = useQuizStore((s) => s.endModal.isActive)

  return (
    <>
      <div className="h-full flex flex-col justify-between items-center  w-full">
        <div className="h-[4%] w-full">
          <HUD />
        </div>
        <div className="h-[20%] w-f flex items-center">
          <p className="text-[5cqi] text-white text-center max-h-full">
            {questions[questionIndex].title}
          </p>
        </div>
        <div
          className="h-[40%] flex items-center justify-center w-full bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage:
              "url(" +
              "questionImages/" +
              questions[questionIndex].questionImage +
              ")",
          }}
        >
          {/* <img src={question.image} alt="Image" className="h-full max-w-full" /> */}
        </div>
        <div className="h-[40%] w-full mt-[5%] mb-[3%]">
          <AnswersSet />
        </div>
      </div>
      <Modal />
      {/* {isEndModalActive && <End  />} */}
    </>
  )
}
