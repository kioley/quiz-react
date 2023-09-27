import { onEndModalOk, onAnswerModalOk, useQuizStore } from "../store"
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
      <div className="h-full flex flex-col justify-between items-center ">
        <HUD />
        <div className="h-[20%] mt-[5%] flex items-center">
          <p className="text-[5cqi] text-white text-center">
            {question.question}
          </p>
        </div>
        <div className="h-[40%] flex items-center">
          <img src={question.image} alt="Image" className="max-h-full" />
        </div>
        <div className="h-[40%] w-full mt-[5%] mb-[3%]">
          <AnswersSet />
        </div>
      </div>
      {isAnswerModalActive && <AnswerModal onModalOk={onAnswerModalOk} />}
      {isEndModalActive && <EndModal onModalOk={onEndModalOk} />}
    </>
  )
}
