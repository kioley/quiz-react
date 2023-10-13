import { controller, useQuizStore } from "../store"
import { AnswersSet } from "./AnswersSet"
import HUD from "./HUD"
import { AnswerModal } from "./AnswerModal"
import { EndModal } from "./EndModal"

export function Quiz() {
  const question = useQuizStore((s) => s.question)

  const isEndModalActive = useQuizStore((s) => s.endModal.isActive)
  const isAnswerModalActive = useQuizStore((s) => s.answerModal.isActive)

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
          style={{ backgroundImage: "url(" + question.image + ")" }}
        >
          {/* <img src={question.image} alt="Image" className="h-full max-w-full" /> */}
        </div>
        <div className="h-[40%] w-full mt-[5%] mb-[3%]">
          <AnswersSet />
        </div>
      </div>
      {isAnswerModalActive && (
        <AnswerModal onModalOk={controller.onAnswerModalOk} />
      )}
      {isEndModalActive && <EndModal onModalOk={controller.onEndModalOk} />}
    </>
  )
}
