import { useQuizStore } from "../../store"
import { AnswersSet } from "../AnswersSet"
import HUD from "../HUD"
import { Modal } from "../Modal"

export function Game() {
  const isModalActive = useQuizStore((s) => s.isModalActive)
  const question = useQuizStore((s) => s.question)

  return (
    <>
      <div className="h-full flex flex-col justify-between items-center  w-full">
        <div className="h-[4%] w-full">
          <HUD />
        </div>
        <div className="h-[20%] w-f flex items-center">
          <p className="text-[5cqi] text-white text-center max-h-full">
            {question.title}
          </p>
        </div>
        <div
          className="h-[40%] flex items-center justify-center w-full bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: "url(" + question.questionImage + ")",
          }}
        ></div>
        <div className="h-[40%] w-full mt-[5%] mb-[3%]">
          <AnswersSet />
        </div>
      </div>
      {isModalActive && <Modal />}
    </>
  )
}
