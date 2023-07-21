import { useQuizStore } from "../store"
import { AnswersSet } from "./AnswersSet"
import HUD from "./HUD"
import { Message } from "./Message"

export function Quiz() {
  const question = useQuizStore((s) => s.questions[s.activeQuestionNumber])
  const isModalActive = useQuizStore((s) => s.modal.active)
  return (
    <>
      {/* <div className="h-full w-[calc(55vh)] flex flex-col items-center p-3 [container-type:inline-size] justify-between"> */}
      <HUD />
      <p className="text-[5cqi] text-white text-center">{question.question}</p>
      <div className="basis-1/3 flex items-center">
        <img src={"/images/" + question.question_image} alt="Image" />
      </div>
      <AnswersSet />
      {/* </div> */}
      {isModalActive && <Message />}
    </>
  )
}
