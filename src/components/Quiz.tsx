import { nextQuestion, useQuizStore } from "../store"
import { AnswersSet } from "./AnswersSet"
import HUD from "./HUD"
import { Modal } from "./Modal"

export function Quiz() {
  const question = useQuizStore((s) => s.question)
  const isModalActive = useQuizStore((s) => s.modal.active)
  return (
    <>
      <HUD />
      <p className="text-[5cqi] text-white text-center">{question.question}</p>
      <div className="basis-1/3 flex items-center">
        <img src={question.image} alt="Image" />
      </div>
      <AnswersSet />
      {isModalActive && <Modal onModalOk={nextQuestion} />}
    </>
  )
}
